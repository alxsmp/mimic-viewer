import Lamp from "./items/Lamp"
import Output from "./items/Output"
import Tank from "./items/Tank"
import { Mimic, MimicItem } from "../generalComponents/MimicAndMimicItem"
import Image from "./items/Image"
import Label from "./items/Label"
import Value from "./items/Value"
import { JSX } from "solid-js/jsx-runtime"
import Valve from "./items/Valve"
import Thermometer from "./items/Thermometer"
import Gauge from "./items/Gauge"
import Panel from "./items/Panel"
import { Show, For, enableScheduling } from "solid-js"
import { Resizable } from "../generalComponents/Resizers"


export default function MimicItemElement(props: {item: any, style?: JSX.CSSProperties}) {
    switch (props.item.type) {
        case "Lamp": return <Lamp {...props.item} style={props.style} />
        case "Output": return <Output {...props.item} style={props.style} />
        case "Tank": return <Tank {...props.item} style={props.style} />
        case "Image": return <Image {...props.item} style={props.style} />
        case "Label": return <Label {...props.item} style={props.style} />
        case "Value": return <Value {...props.item} style={props.style} />
        case "Valve": return <Valve {...props.item} style={props.style} />
        case "Thermometer": return <Thermometer {...props.item} style={props.style} />
        case "Gauge":return <Gauge {...props.item} style={props.style} />
        case "Panel": return <Panel {...props.item} style={props.style} />
        default: return <div>Not Found</div>
    }
}

export function BaseItemWrapper(props: {item: MimicItem, 
    selectedItems: MimicItem[],
    setSelectedItems: (items: MimicItem[]) => void,
    panned: [number, number],
    mimic: Mimic
    children?: any,
    style?: JSX.CSSProperties
}) {
        const unselected: () => JSX.CSSProperties = () => ({
            position: 'absolute', left:props.item.x + 'px', top:props.item.y + 'px',
            width:props.item.width + 'px', height:props.item.height + 'px',
            overflow: 'hidden',
        })
        const selected: () => JSX.CSSProperties = () => ({
            'outline': '1px dashed', "outline-color": 'var(--fore-1)', "outline-offset": '5px',
            position: 'absolute', left:props.item.x + 'px', top:props.item.y + 'px',
            width:props.item.width + 'px', height:props.item.height + 'px',
            overflow: 'visible',
        })

        let dragStartLeft: number, dragStartTop: number
        let dragStartItemLeft: number, dragStartItemTop: number
        let mouseDown = false
        let startPanel: MimicItem | undefined
        let endPanel: MimicItem | undefined

return <div style={{
    ...props.style,
    ...props.selectedItems.includes(props.item) ? selected() : unselected(),
    position: 'absolute',
    left: props.item.x + 'px',
    top: props.item.y + 'px',
    width: props.item.width + 'px',
    height: props.item.height + 'px',
    transform: `translate(${props.panned[0]}px, ${props.panned[1]}px)`
}}
    onPointerOver={e => {
        if (mouseDown) return
        if (props.selectedItems.includes(props.item)) {
            e.currentTarget.style.cursor = 'grab'
        }
        else { e.currentTarget.style.cursor = 'default' }
    }}
    onPointerDown={(e) => {
        e.stopPropagation()
        e.currentTarget.setPointerCapture(e.pointerId)
        mouseDown = true
        dragStartLeft = e.clientX  // 54000
        dragStartTop = e.clientY
        dragStartItemLeft = props.item.x
        dragStartItemTop = props.item.y
        e.currentTarget.style.cursor = 'grabbing'


        if(props.item.type !== "Panel"){
            startPanel = checkPanels(props.mimic.items, {x: e.x, y: e.y})
        }

    }}
    onMouseMove={(e) => {
        e.stopPropagation()
        if (mouseDown === false)
            return
        props.item.x = Math.round(dragStartItemLeft + (e.clientX - dragStartLeft))
        props.item.y = Math.round(dragStartItemTop + (e.clientY - dragStartTop))
        e.currentTarget.style.cursor = 'grabbing'
    }}
    onPointerUp={(e) => {
        e.currentTarget.releasePointerCapture(e.pointerId)
        mouseDown = false

        if(props.item.type !== "Panel"){
        

            endPanel = checkPanels(props.mimic.items, {x: e.x, y: e.y})

            if(endPanel == startPanel){return}
            else if(endPanel != undefined){
                //Remove it from the mimic
                props.mimic.items = props.mimic.items.filter(i => i !== props.item)

                
                //If so, add it to the panel
                props.item.x = props.item.x - endPanel.x
                props.item.y = props.item.y - endPanel.y

                endPanel.children!.push(props.item)
                props.mimic.items =
                    props.mimic.items.filter(i => i !== props.item) 
            }
            else{
                //Remove it from the panel
                if(startPanel != undefined){

                    startPanel.children = startPanel.children!.filter(i => i !== props.item)
                                    //Add it to the mimic
                props.mimic.items.push(props.item)

                props.item.x = props.item.x + startPanel.x
                props.item.y = props.item.y + startPanel.y
                }

            }

        }

        startPanel = undefined
        endPanel = undefined
        
        
        
    }}
    onClick={e => {
        if (e.ctrlKey || e.shiftKey) {
            if (props.selectedItems.includes(props.item))
                props.setSelectedItems(props.selectedItems.filter(i => i !== props.item))
            else
                props.setSelectedItems([...props.selectedItems, props.item])
        }

        else
            props.setSelectedItems([props.item])
        // Stop propagation so background click handler doesn't fire as well
        e.stopPropagation()
    }}>
        <Resizable item={props.item} selectedItems={props.selectedItems} mimic={props.mimic} />

        {props.children}


    </div>
    }


    //Write a function that iterates over the items and determines if a point is within the bounds of a panel

export function checkPanels(items: MimicItem[], point: { x: number, y: number }) {

    let panels = items.filter(i => i.type == 'Panel')

    //get position of canvas relative to the page
    let canvas = document.getElementById('canvas')!
    let canvasRect = canvas.getBoundingClientRect()


    for (let i = 0; i < panels.length; i++) {
        let panel = panels[i]

        if (point.x > panel.x + canvasRect.x && point.x < panel.x + panel.width + canvasRect.x
            && point.y > panel.y + canvasRect.y && point.y < panel.y + panel.height + canvasRect.y) {

            return panel

        }
    }

    return undefined

}