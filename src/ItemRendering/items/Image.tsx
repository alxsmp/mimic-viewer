import { JSX, Show } from "solid-js"

export default function Image(props: {
    width: number
    height: number
    src: string
    backgroundColor: string
    opacity: number
    fit: any
    style?: JSX.CSSProperties
    disableAnimation?: boolean
}) {

    return <div
        style={{
            ...props.style,
            width: props.width.toString() + "px",
            height: props.height.toString() + "px",
            opacity: props.opacity,
            'background-color': props.backgroundColor ? props.backgroundColor : 'transparent',
        }}>

        {/* If src is defined */}
        <Show when={props.src}>
        <img draggable={false} src={props.src}

            style={{
                ...props.style,
                width: props.width.toString() + "px",
                height: props.height.toString() + "px",
                "object-fit": props.fit,
                opacity: props.opacity,
            }
        } />
        </Show>
    </div>
}



