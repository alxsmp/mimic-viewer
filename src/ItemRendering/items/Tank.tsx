import { createEffect, createMemo, For, JSX } from "solid-js"
import DrawScale from "../DrawScale"
import adjustColor from "../adjustColor"

export default function Tank(props: {
    width: number
    height: number

    value: number
    warningValue: number
    dangerValue: number
    minimum: number
    maximum: number

    tankWidth: number
    tankHeight: number
    tankDepth: number

    liquidColor: string
    tankColor: string

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

    let tankHeight = createMemo(() => (0.6 * (props.height) * props.tankHeight))
    let tankWidth = createMemo(() => (0.6 * (props.width) * props.tankWidth))

    // let ticks = createMemo(()=>Math.max(props.ticks, 2))
    // //the 3d effect is achieved by drawing a cylinder with a radius of tankDepth
    // var tankDepth = createMemo(()=>(0.5 * (props.width / 100)))

    // const volume = createMemo(()=>(props.value - props.minimum) / (props.maximum - props.minimum))

    // function format(value: number) {
    //     return props.multiplier ? (value * props.multiplier).toFixed(props.decimal_places || 0) + (props.suffix || '') : value.toFixed(props.decimal_places || 0) + (props.suffix || '')
    // }

    return <svg style={props.style} width={props.width} height={props.height} viewBox={"0 0 " + props.width + " " + props.height} preserveAspectRatio="none">

        {/* DRAW TANK*/}
        <rect x={props.width * 0.5 - tankWidth() * 0.5}
            y={props.height * 0.5 - tankHeight() * 0.5}
            width={tankWidth()}
            height={tankHeight()}
            stroke={props.tankColor != 'transparent' ? adjustColor(props.tankColor, -80) : 'var(--fore-5)'}
            stroke-dasharray={[0, tankWidth(), tankHeight(), tankWidth(), tankHeight()].toString()}
            fill={props.tankColor} />
        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.5 + tankHeight() * 0.5}
            rx={tankWidth() * 0.5}
            ry={props.tankDepth+ 0.001}
            stroke={props.tankColor != 'transparent' ? adjustColor(props.tankColor, -80) : 'var(--fore-5)'}
            stroke-width="2"
            fill={adjustColor(props.tankColor, 0)} />
        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.5 - tankHeight() * 0.5}
            rx={tankWidth() * 0.5}
            ry={props.tankDepth+ 0.001}
            stroke={props.tankColor != 'transparent' ? adjustColor(props.tankColor, -80) : 'var(--fore-5)'}
            stroke-width="2"
            fill={adjustColor(props.tankColor, 40)} />




        {/* DRAW LIQUID*/}
        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.5 + tankHeight() * 0.5}
            rx={tankWidth() * 0.5}
            ry={props.tankDepth+ 0.001}
            stroke={props.tankColor != 'transparent' ? adjustColor(props.tankColor, -80) : 'var(--fore-5)'}
            stroke-width="2"
            fill={props.liquidColor} 
            style={ props.disableAnimation ? '': {transition: 'all 0.5s ease-in-out'}}
            />
        <rect
            x={props.width * 0.5 - tankWidth() * 0.5}
            y={props.height * 0.5 + tankHeight() * 0.5 - (props.value - props.minimum) / (props.maximum - props.minimum) * tankHeight()}
            width={tankWidth()}
            height={(props.value - props.minimum) / (props.maximum - props.minimum) * tankHeight()}
            fill={props.liquidColor} 
            style={ props.disableAnimation ? '': {transition: 'all 0.5s ease-in-out'}}
            />
        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.5 + tankHeight() * 0.5 - (props.value - props.minimum) / (props.maximum - props.minimum) * tankHeight()}
            rx={tankWidth() * 0.5}
            ry={props.tankDepth+ 0.001}
            stroke={props.value <= props.minimum ? props.tankColor != 'transparent' ? adjustColor(props.tankColor, -80) : 'var(--fore-5)' : props.liquidColor != 'transparent' ? adjustColor(props.liquidColor, -40) : 'var(--fore-5)'}
            stroke-width="2"            
            fill={props.value <= props.minimum ? adjustColor(props.tankColor, 40) : props.liquidColor} 
            style={ props.disableAnimation ? '': {transition: 'all 0.5s ease-in-out'}}
            />
        

        {/* REDRAW TANK SIDE STROKES*/}
        <rect x={props.width * 0.5 - tankWidth() * 0.5}
            y={props.height * 0.5 - tankHeight() * 0.5}
            width={tankWidth()}
            height={tankHeight()}
            stroke={props.tankColor != 'transparent' ? adjustColor(props.tankColor, -80) : 'var(--fore-5)'}
            stroke-dasharray={[0, tankWidth(), tankHeight(), tankWidth(), tankHeight()].toString()}
            stroke-width="2"
            fill="none" />
        


        {/* DRAW DOTTED ELLIPSES TO SHOW THE WARNING AND DANGER LEVELS */}
        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.5 + tankHeight() * 0.5 - (props.warningValue - props.minimum) / (props.maximum - props.minimum) * tankHeight()}
            rx={tankWidth() * 0.5}
            ry={props.tankDepth + 0.001}
            stroke={props.warningColor}
            stroke-width="0.75"
            fill="none" />
        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.5 + tankHeight() * 0.5 - (props.dangerValue - props.minimum) / (props.maximum - props.minimum) * tankHeight()}
            rx={tankWidth() * 0.5}
            ry={props.tankDepth + 0.001}
            stroke={props.dangerColor}
            
            stroke-width="0.75
            "
            fill="none" />


        {/* DRAW the scale*/}
        {/*Input all the props along with the start and end position of the scale*/}

        <DrawScale {...props}
            startPosition={{
                x: props.scalePosition === "left" ? (props.width * 0.5 - tankWidth() * 0.5) - 10 : props.width * 0.5 + tankWidth() * 0.5 + 10,
                y: props.height * 0.5 + tankHeight() * 0.5
            }}
            endPosition={{
                x: props.scalePosition === "left" ? props.width * 0.5 - tankWidth() * 0.5 - 10 : props.width * 0.5 + tankWidth() * 0.5 +10,
                y: props.height * 0.5 - tankHeight() * 0.5
            }}
        />
    </svg>
}
