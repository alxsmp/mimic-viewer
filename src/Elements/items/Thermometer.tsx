import { createEffect, createMemo, For, JSX, Show } from "solid-js"
import adjustColor from "../../generalComponents/adjustColor"
import DrawScale from "../../generalComponents/DrawScale"

export default function Thermometer(props: {
    width: number
    height: number

    value: number
    warningValue: number
    dangerValue: number
    minimum: number
    maximum: number

    liquidColor: string
    thermometerColor: string

    scaleColor: string
    warningColor: string
    dangerColor: string

    ticksCount: number
    ticksLength: number
    ticksSubDivisionsCount: number

    labelsCount: number
    labelsColor: string
    fontSize: number

    scalePosition: string

    style?: JSX.CSSProperties
    disableAnimation?: boolean
}

) {


    let thermometerWidth = createMemo(() => (10))
    let thermometerDepth = createMemo(() => 0)
    let thermometerHeight = createMemo(() => (0.6 * (props.height)))

    return <svg style={props.style} width={props.width} height={props.height} viewBox={"0 0 " + props.width + " " + props.height} preserveAspectRatio="none">



        {/* DRAW thermometer*/}

        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.5 + thermometerHeight() * 0.5 + thermometerDepth() + 0.001 + (thermometerWidth() * 0.5)}
            rx={thermometerWidth()}
            ry={thermometerWidth()}
            stroke={props.thermometerColor != 'transparent' ? adjustColor(props.thermometerColor, -80) : 'var(--fore-5)'}
            stroke-width="2"
            stroke-dashoffset={0}
            stroke-dasharray={[(2 * Math.PI * thermometerWidth()) - 2 * thermometerWidth(), thermometerWidth() * 0.8].toString()}
            fill={props.thermometerColor} />

        <rect x={props.width * 0.5 - thermometerWidth() * 0.5}
            y={props.height * 0.5 - thermometerHeight() * 0.5}
            width={thermometerWidth()}
            height={thermometerHeight()}
            stroke={props.thermometerColor != 'transparent' ? adjustColor(props.thermometerColor, -80) : 'var(--fore-5)'}
            stroke-dasharray={[0, thermometerWidth(), thermometerHeight(), thermometerWidth(), thermometerHeight()].toString()}
            stroke-width={2}
            fill={props.thermometerColor} />

        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.5 - thermometerHeight() * 0.5}
            rx={thermometerWidth() * 0.5}
            ry={thermometerDepth() + 0.001}
            stroke={props.thermometerColor != 'transparent' ? adjustColor(props.thermometerColor, -80) : 'var(--fore-5)'}
            stroke-width="2"
            fill={adjustColor(props.thermometerColor, 40)} />


        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.5 + thermometerHeight() * 0.5 + thermometerDepth() + 0.001 + (thermometerWidth() * 0.5)}
            rx={thermometerWidth() * 0.8}
            ry={thermometerWidth() * 0.8}
            stroke={props.liquidColor != 'transparent' ? adjustColor(props.liquidColor, -40) : 'var(--fore-5)'}
            stroke-width="2"
            fill={props.liquidColor} 
            style={ props.disableAnimation ? '': {transition: 'all 0.5s ease-in-out'}}
            />

        {/* DRAW LIQUID*/}


            <rect
                x={props.width * 0.5 - thermometerWidth() * 0.3}
                y={props.height * 0.5 + thermometerHeight() * 0.5 - (props.value - props.minimum) / (props.maximum - props.minimum) * thermometerHeight()}
                width={thermometerWidth() * 0.6}
                stroke={props.liquidColor != 'transparent' ? adjustColor(props.liquidColor, -40) : 'var(--fore-5)'}
                stroke-width="2"
                height={(props.value - props.minimum) / (props.maximum - props.minimum) * thermometerHeight()}
                fill={props.liquidColor} 
                style={ props.disableAnimation ? '': {transition: 'all 0.5s ease-in-out'}}
                />
            <ellipse
                cx={props.width * 0.5}
                cy={props.height * 0.5 + thermometerHeight() * 0.5 + thermometerDepth() + 0.001 + (thermometerWidth() * 0.5)}
                rx={thermometerWidth() * 0.8 - 1}
                ry={thermometerWidth() * 0.8 - 1}

                fill={props.liquidColor} 
                style={ props.disableAnimation ? '': {transition: 'all 0.5s ease-in-out'}}
                />

            <ellipse
                cx={props.width * 0.5}
                cy={props.height * 0.5 + thermometerHeight() * 0.5 - (props.value - props.minimum) / (props.maximum - props.minimum) * thermometerHeight()}
                rx={thermometerWidth() * 0.3}
                ry={thermometerDepth() + 0.001}
                stroke={props.liquidColor != 'transparent' ? adjustColor(props.liquidColor, -40) : 'var(--fore-5)'}
                stroke-width={props.value == props.minimum ? 0 : 2}
                fill={props.liquidColor}
                style={ props.disableAnimation ? '': {transition: 'all 0.5s ease-in-out'}}
            />








        {/* DRAW DOTTED ELLIPSES TO SHOW THE WARNING AND DANGER LEVELS */}
        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.5 + thermometerHeight() * 0.5 - (props.warningValue - props.minimum) / (props.maximum - props.minimum) * thermometerHeight()}
            rx={thermometerWidth() * 0.5}
            ry={thermometerDepth() + 0.001}
            stroke={props.warningColor}
            stroke-width="0.75"
            fill="none" />
        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.5 + thermometerHeight() * 0.5 - (props.dangerValue - props.minimum) / (props.maximum - props.minimum) * thermometerHeight()}
            rx={thermometerWidth() * 0.5}
            ry={thermometerDepth() + 0.001}
            stroke={props.dangerColor}

            stroke-width="0.75
            "
            fill="none" />




        {/* DRAW the scale*/}
        {/*Input all the props along with the start and end position of the scale*/}

        <DrawScale {...props}
            startPosition={{
                x: props.scalePosition === "left" ? (props.width * 0.5 - thermometerWidth() * 0.5) - 10 : props.width * 0.5 + thermometerWidth() * 0.5 + 10,
                y: props.height * 0.5 + thermometerHeight() * 0.5
            }}
            endPosition={{
                x: props.scalePosition === "left" ? props.width * 0.5 - thermometerWidth() * 0.5 - 10 : props.width * 0.5 + thermometerWidth() * 0.5 + 10,
                y: props.height * 0.5 - thermometerHeight() * 0.5
            }}
        />

    </svg>
}


