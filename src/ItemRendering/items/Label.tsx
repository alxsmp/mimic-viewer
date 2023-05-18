import { For, JSX } from "solid-js"
import adjustColor from "../adjustColor";

export default function Label(props: {
    width: number
    height: number
    
    text?: string

    backgroundColor?: string
    fontColor?: string
    fontSize: number
    verticalAlign: "top" | "center" | "bottom"
    horizontalAlign: "left" | "center" | "right"
    opacity: number
    style?: JSX.CSSProperties
    disableAnimation?: boolean
}) {

    return <div style={{
            ...props.style,
            width: props.width.toString() + "px",
            height: props.height.toString() + "px",
            'background-color': props.backgroundColor,
            'color': props.fontColor,
            'font-size': props.fontSize.toString() + "px",
            'display': 'flex',
            opacity: props.opacity,
            'justify-content': props.horizontalAlign,
            //put the text at the top middle or bottom of the div 

            "align-items": translate(props.verticalAlign),

            

        }}>
        {props.text}
    </div>

}

function translate(align: "top" | "center" | "bottom") {
    switch (align) {
        case "top": return "flex-start"
        case "center": return "center"
        case "bottom": return "flex-end"
    }
}

