import { JSX } from "solid-js/jsx-runtime"
import adjustColor from "../../generalComponents/adjustColor"
import { Match, Show, createMemo } from "solid-js"

export default function Value(props: {
    width: number
    height: number
    value: boolean
    backgroundColor: string
    openColor: string
    closedColor: string
    style?: JSX.CSSProperties
    disableAnimation?: boolean
}) {

    const outerStroke = 2;

    const radiusX = createMemo(() => (props.width / 2) - (outerStroke/2));
    const radiusY = createMemo(() => (props.height / 2) - (outerStroke/2));
    const barThickness = createMemo(() => props.value ? radiusX() * 0.65 : radiusY() * 0.65);
    const barLength = createMemo(() => props.value ? radiusY() * 2 : radiusX() * 2 );
    const barStroke = 2;

    const adjustAmount = -80;

    return <svg style={props.style} viewBox={"0 0 " + props.width + " " + props.height} preserveAspectRatio="none">
        <g >
            <ellipse cx={props.width / 2} cy={props.height / 2} rx={radiusX()} ry={radiusY()}
                stroke={adjustColor(props.backgroundColor, adjustAmount)}
                stroke-width={outerStroke}
                fill={props.backgroundColor}
            />
            <rect
                x={(props.width / 2) - (barThickness() / 2) }
                y={(props.height / 2) - (barLength() / 2) }
                width={barThickness()}
                height={barLength()}
                stroke={props.value ? adjustColor(props.openColor, adjustAmount) : adjustColor(props.closedColor, adjustAmount)}
                stroke-width={barStroke}
                rx = {barStroke}
                ry = {barStroke}
                fill={props.value ? props.openColor : props.closedColor}
                transform={props.value ? "" : "rotate(90, " + props.width/2 + ", " + props.height/2+ ")" }
                style={ props.disableAnimation ? '': {transition: "transform 0.5s ease-in-out, x 0s, y 0s" }}
            />
            

        </g>

    </svg>
}
