import { For, JSX } from "solid-js"
import adjustColor from "../adjustColor";

// Draws a green or gray circle to indicate whether the value is true
export default function Lamp(props: {
    value: boolean
    width: number
    height: number
    onColor: string
    offColor: string
    style?: JSX.CSSProperties
    disableAnimation?: boolean
}) {
    const outerStroke = 2;

    const innerRadius = -10 ;
    const innerStroke = 1;

    const adjustAmountFill = 40;
    const adjustAmountStroke = -80;

    return <svg style = {props.style} viewBox={"0 0 " + props.width + " " + props.height} preserveAspectRatio="none">
        <ellipse cx={props.width/2} cy={props.height/2} rx={((props.width - outerStroke) / 2 )} ry={((props.height - outerStroke) / 2 )} 
        stroke={props.value ? adjustColor(props.onColor, adjustAmountStroke) : adjustColor(props.offColor, adjustAmountStroke)}
        stroke-width = {outerStroke} 
        fill={props.value ? props.onColor : props.offColor} 
        style= {{transition: "fill 0.4s, stroke 0.1s"}}
        />
        <ellipse cx={props.width/2} cy={props.height/2} rx={((props.width - outerStroke) / 2 ) + Math.max(innerRadius, -props.width/10)} ry={((props.height - outerStroke) / 2 ) + Math.max(innerRadius, -props.height/10)} 
        stroke={props.value ? adjustColor(props.onColor, adjustAmountStroke) : adjustColor(props.offColor, adjustAmountStroke)}
        stroke-width = {innerStroke} 
        fill={props.value ? adjustColor(props.onColor, adjustAmountFill) : adjustColor(props.offColor, adjustAmountFill)} 
        style= {{transition: "fill 0.2s, stroke 0.2s"}}
        />
    </svg>
}
