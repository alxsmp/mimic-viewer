import Lamp from "./items/Lamp"
import Output from "./items/Output"
import Tank from "./items/Tank"
import { Mimic, MimicItem } from "./MimicAndItemDefinitions"
import Image from "./items/Image"
import Label from "./items/Label"
import Value from "./items/Value"
import { JSX } from "solid-js/jsx-runtime"
import Valve from "./items/Valve"
import Thermometer from "./items/Thermometer"
import Gauge from "./items/Gauge"
import Panel from "./items/Panel"
import { Show, For, enableScheduling } from "solid-js"
import { Resizable } from "./Resizers"


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
