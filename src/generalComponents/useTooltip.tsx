import { Component, createContext, createSignal, JSX, Show, useContext } from "solid-js"
import { Portal } from "solid-js/web"

const TooltipContext = createContext<[(component: Component<any>, props: any, el: HTMLElement) => void, ()=>void]>([()=> {}, ()=> {}] )

export function TooltipProvider(props: {
    children: JSX.Element
}) {
    const [data, setData] = createSignal<{component: Component, props: any, rect: DOMRect} | undefined>()

    const tooltip = <div
        style={{
            ...tooltipStyle,
            position: 'absolute',
            top: (data()?.rect?.bottom ?? 0) + 5 + 'px',
            left: (data()?.rect?.left ?? 0) + 'px',
            "text-align": 'center',
            "z-index": 1000,
            visibility: data() ? 'visible' : 'hidden',
            opacity: data() ? 1 : 0,
            transition: 'opacity .3s',
        }}
    >
        {data() ? data()!.component(data()!.props) : null}
    </div>
    const showTooltip = (component: Component, props: any, el: HTMLElement) => {
        setData({component, props, rect: el.getBoundingClientRect()})
    }
    const hideTooltip = () => setData(undefined)

    return (
        <TooltipContext.Provider value={[showTooltip, hideTooltip]}>
            {props.children}
            <Portal>{tooltip}</Portal>
        </TooltipContext.Provider>
    )
}

const useTooltip = () => useContext(TooltipContext)
export default useTooltip

export const tooltipStyle: JSX.CSSProperties = {
    "background-color": '#252526', color: '#CCCCCC',
    "font-size": '14px',
    outline: '1px #454545 solid',
    "border-radius": '4px',
    "box-shadow": '0 2px 8px 0 rgb(38 38 55 / 75%)'
}
