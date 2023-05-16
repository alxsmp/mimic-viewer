import { createEffect, createMemo, For, JSX } from "solid-js"
import DrawScale from "../../generalComponents/DrawScale"
import adjustColor from "../../generalComponents/adjustColor"
import DrawCurvedScale from "../../generalComponents/DrawRadialScale"

export default function Gauge(props: {
    width: number
    height: number

    value: number
    warningValue: number
    dangerValue: number
    minimum: number
    maximum: number

    gaugeWidth: number
    gaugeHeight: number
    gaugeDepth: number

    scaleColor: string
    warningColor: string
    dangerColor: string

    ticksCount: number
    ticksLength: number
    ticksSubDivisionsCount: number

    labelsCount: number
    labelsColor: string
    fontSize: number

    gaugeColor: string

    style?: JSX.CSSProperties
    disableAnimation?: boolean
}

) {

    let radius = createMemo(() => (props.width* 0.3))
    const backAdjust = 90
    const backSize = 1

    const needleAdjust = -90
    const needleWidth = createMemo(()=>radius() * 0.15)
    const needleHeight = createMemo(()=>radius() * 0.8)

    return <svg style={props.style} width={props.width} height={props.height} viewBox={"0 0 " + props.width + " " + props.height} preserveAspectRatio="none">

        {/* DRAW scale Color background to the gauge*/}
        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.75}
            rx={radius()/2}
            ry={radius()/2}
            
            fill='transparent'
            stroke={adjustColor(props.scaleColor, backAdjust)}
            stroke-width={radius() * backSize}
            stroke-dasharray={[0,Math.PI * radius()/2, Math.PI * radius()/2 * ((props.warningValue - props.minimum) / (props.maximum-props.minimum)), 0].toString()}
             />
        {/* DRAW warning color background to the gauge*/}
        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.75}
            rx={radius()/2}
            ry={radius()/2}

            fill='transparent'
            stroke={adjustColor(props.warningColor, backAdjust)}
            stroke-width={radius() * backSize}
            stroke-dasharray={[0,   Math.PI * radius()/2 + Math.PI * radius()/2 * ((props.warningValue - props.minimum) / (props.maximum-props.minimum)), 
                                    Math.PI * radius()/2 * ((props.dangerValue - props.warningValue) / (props.maximum-props.minimum)), 0].toString()}

        />
        {/* DRAW danger color background to the gauge*/}
        <ellipse
            cx={props.width * 0.5}
            cy={props.height * 0.75}
            rx={radius()/2}
            ry={radius()/2}

            fill='transparent'
            stroke={adjustColor(props.dangerColor, backAdjust)}
            stroke-width={radius() * backSize}
            stroke-dasharray={[0,   Math.PI * radius()/2 + Math.PI * radius()/2 * ((props.warningValue - props.minimum) / (props.maximum-props.minimum)) + Math.PI * radius()/2 * ((props.dangerValue - props.warningValue) / (props.maximum-props.minimum)),
                                    Math.PI * radius()/2 * ((props.maximum - props.dangerValue) / (props.maximum-props.minimum)), 0].toString()}
        />

       


        {/* DRAW the base of the gauge*/}
        <rect
            x={props.width * 0.5 - radius()}
            y={props.height * 0.75 - 1}
            width={radius()*2}
            height={radius() * 0.2}
            fill={adjustColor(props.scaleColor, backAdjust *0.5)}
            stroke={adjustColor(props.scaleColor, needleAdjust*10)}
            stroke-width='2'
            stroke-dasharray={[0, radius()*2, 10000, 0].toString()}
        />

        {/* DRAW the scale*/}
        {/*Input all the props along with the start and end position of the scale*/}
        <DrawCurvedScale {...props}
            radius={radius()}
            center={{ x: props.width * 0.5, y: props.height * 0.75 }}
            
        />



        

        {/* DRAW the needle*/}
        <polygon
            points={
                (props.width * 0.5 ) + "," + (props.height * 0.75 - needleWidth() * 0.5) + " " +
                (props.width * 0.5 ) + "," + (props.height * 0.75 + needleWidth() * 0.5) + " " +
                (props.width * 0.5 - needleHeight()) + "," + (props.height * 0.75)
            }

            fill={props.gaugeColor}
            stroke={adjustColor(props.gaugeColor, needleAdjust*10)}
            stroke-width='2'
            transform={"rotate(" + (props.value - props.minimum) / (props.maximum - props.minimum) * 180 + " " + props.width * 0.5 + " " + props.height * 0.75 + ")"}
            style = {props.disableAnimation ? '': {transition: "all 0.5s ease-in-out"}}
        />


        {/* DRAW the needle base*/}
        <circle
            cx={props.width * 0.5}
            cy={props.height * 0.75}
            r={needleWidth() }
            fill={props.value <= props.warningValue ? adjustColor(props.scaleColor, backAdjust) : props.value <= props.dangerValue ? adjustColor(props.warningColor, backAdjust) : adjustColor(props.dangerColor, backAdjust)}
            stroke-width='2'
            style = {props.disableAnimation ? '': {transition: "all 0.5s ease-in-out"}}
            stroke = {props.value <= props.warningValue ? props.scaleColor : props.value <= props.dangerValue ? props.warningColor :props.dangerColor}
        />


    </svg>
}
