import { JSX } from "solid-js/jsx-runtime";
import adjustColor from "../../generalComponents/adjustColor";

// Draws a red or gray circle to square to ndicate whether the value is true
export default function OutputIndicator(props: {
    value: boolean
    width: number
    height: number
    onColor: string
    offColor: string
    style?: JSX.CSSProperties
    disableAnimation?: boolean
}) {
    const outerStroke = 2;

    const innerOffset = 10 ;
    const innerStroke = 1;

    const outerRoundness = 1;
    const innerRoundness = 4;

    const adjustAmountFill = 40;
    const adjustAmountStroke = -80;

    return <svg style={props.style} width={props.width} height={props.height} viewBox={"0 0 " + props.width + " " + props.height} preserveAspectRatio="none">

        <rect x={outerStroke} y={outerStroke} width={(props.width - 2*outerStroke)} height={(props.height - 2* outerStroke)} 
        rx={outerRoundness} ry={outerRoundness}
        stroke={props.value ? adjustColor(props.onColor, adjustAmountStroke) : adjustColor(props.offColor, adjustAmountStroke)}
        stroke-width = {outerStroke} 
        fill={props.value ? props.onColor : props.offColor} 
        style={ props.disableAnimation ? '': {transition: "fill 0.4s, stroke 0.1s"}}
        />
        <rect 
        x={outerStroke + Math.min(innerOffset, props.width/10)} 
        y={outerStroke + Math.min(innerOffset, props.height/10)} 
        width={(props.width - 2* outerStroke) - Math.min(innerOffset, props.width/10) * 2}
        height={(props.height - 2* outerStroke) - Math.min(innerOffset, props.height/10) * 2}
        rx={innerRoundness} ry={innerRoundness}
        stroke={props.value ? adjustColor(props.onColor, adjustAmountStroke) : adjustColor(props.offColor, adjustAmountStroke)}
        stroke-width = {innerStroke} 
        fill={props.value ? adjustColor(props.onColor, adjustAmountFill) : adjustColor(props.offColor, adjustAmountFill)} 
        style={ props.disableAnimation ? '': {transition: "fill 0.4s, stroke 0.1s"}}
        />
    </svg>
}