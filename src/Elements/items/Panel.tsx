import { createEffect, createMemo, For, JSX } from "solid-js"
import DrawScale from "../../generalComponents/DrawScale"
import adjustColor from "../../generalComponents/adjustColor"
import DrawCurvedScale from "../../generalComponents/DrawRadialScale"

export default function Panel(props: {
    width: number
    height: number

    backColor: string
    opacity: number

    borderColor: string
    borderWidth: number
    borderStyle: string

    children?: any

    style?: JSX.CSSProperties
    disableAnimation?: boolean
}

) {
    return <div style={{
        "background-color": props.backColor,
        "opacity": props.opacity,
        "border-color": props.borderColor,
        "border-width": props.borderWidth + 'px',
        "border-style": props.borderStyle,
        "width": (props.width - 2*props.borderWidth) + 'px',
        "height": (props.height- 2*props.borderWidth) + 'px',
    }}>
        
    </div>
}
