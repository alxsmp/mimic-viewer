

export interface Mimic {
    name: string;
    items: MimicItem[];


}
// File formats follow...
// JSON 'file format' when serializing these items

export interface MimicItem {
    
    type: string

    x: number
    y: number
    width: number
    height: number
    tag: string

    //Define a dictionary of properties that can be used to define the item
    propertyDefinitions: {}
    disableAnimation?: boolean;
    children?: MimicItem[];
}


export enum PropType {
    tag,
    boolean,
    number,
    slider,
    string,
    color,
    image,
    constant,
    alignment_h,
    alignment_lr,
    alignment_v,
    alignment_tb,
    imageFit,
    borderStyle,
    hidden
}

const commonPropertiesDefs: { [key: string]: PropertyDefinition } = {
tag:                    { type: PropType.tag,    description: "The tag of the item",                                                     default: "" },
x:                      { type: PropType.number,    description: "The x position of the item",                                              default: 0},
y:                      { type: PropType.number,    description: "The y position of the item",                                              default: 0}

}

const scalePropertiesDefs: { [key: string]: PropertyDefinition } = {
    warningValue:           { type: PropType.number,    description: "The value at which the tank will turn to the warning color",                        default: 70 },
    dangerValue:            { type: PropType.number,    description: "The value at which the tank will turn to the danger color",                           default: 90 },
    scaleColor:             { type: PropType.color,    description: "The normal color of the scale",                                              default: "#4d4d4d" },
    warningColor:           { type: PropType.color,     description: "The color of the scale when the value is above the warning value",    default: "#ac8211" },
    dangerColor:            { type: PropType.color,    description: "The color of the scale when the value is above the danger value",     default: "#ae0f0f" },
    ticksCount:             { type: PropType.number,    description: "The number of ticks on the scale",                                    default: 4 },
    ticksLength:            { type: PropType.number,    description: "The length of the ticks on the scale",                                default: 10 },
    ticksSubDivisionsCount: { type: PropType.number,    description: "The number of subdivisions of the ticks on the scale",                default: 4 },
    labelsCount:            { type: PropType.number,    description: "The number of labels on the scale",                                   default: 4 },
    fontSize:               { type: PropType.number,    description: "The font size of the labels on the scale",                            default: 12 },
}



export const propertiesDefs: { [key: string]: { [key: string]: PropertyDefinition } } = {
    Tank: {
        type:               { type: PropType.constant,  description: "The type of the item",                                                default: "Tank" },
        ...commonPropertiesDefs,
        width:              { type: PropType.number,    description: "The width of the item",                                               default: 250, min:20  },
        height:             { type: PropType.number,    description: "The height of the item",                                              default: 250, min:20  },
        value:              { type: PropType.slider,    description: "The current value of the tank",                                       default: 50, min:'minimum', max:'maximum', step:1 },
        maximum:            { type: PropType.number,    description: "The maximum value of the tank",                                       default: 100 },
        minimum:            { type: PropType.number,    description: "The minimum value of the tank",                                       default: 0 ,min:0},
        liquidColor:        { type: PropType.color,    description: "The color of the liquid in the tank",                                 default: "#0378A6" },
        tankColor:          { type: PropType.color,    description: "The color of the tank",                                               default: "#ABABAB" },
        tankWidth:          { type: PropType.slider,    description: "The width of the tank",                                               default: 0.5, min:0.1, max:1, step:0.05 },
        tankHeight:         { type: PropType.slider,    description: "The height of the tank",                                              default: 1 ,min:0.1, max:1, step:0.05 },
        tankDepth:          { type: PropType.number,    description: "The depth of the tank",                                               default: 5 },
        scalePosition:      { type: PropType.alignment_lr,    description: "The position of the scale",                                           default: "left" },
        ...scalePropertiesDefs,
    },
    Thermometer: {
        type:               { type: PropType.constant,  description: "The type of the item",                                                default: "Thermometer" },
        ...commonPropertiesDefs,
        width:              { type: PropType.number,    description: "The width of the item",                                               default: 125, min:20  },
        height:             { type: PropType.number,    description: "The height of the item",                                              default: 250, min:20  },
        value:              { type: PropType.slider,    description: "The current value of the thermometer",                                       default: 50, min:'minimum', max:'maximum', step:0.1 },
        maximum:            { type: PropType.number,    description: "The maximum value of the thermometer",                                       default: 100 },
        minimum:            { type: PropType.number,    description: "The minimum value of the thermometer",                                       default: 0 ,min:0},
        liquidColor:        { type: PropType.color,    description: "The color of the liquid in the thermometer",                                 default: "#d55858" },
        thermometerColor:          { type: PropType.color,    description: "The color of the thermometer",                                               default: "#E5f6FF" },
        scalePosition:          { type: PropType.alignment_lr,    description: "The position of the scale",                                           default: "left" },
        ...scalePropertiesDefs,
    },
    Gauge: {
        type:               { type: PropType.constant,  description: "The type of the item",                                                default: "Gauge" },
        ...commonPropertiesDefs,
        width:              { type: PropType.number,    description: "The width of the item",                                               default: 200, min:20  },
        height:             { type: PropType.number,    description: "The height of the item",                                              default: 125, min:20  },
        value:              { type: PropType.slider,    description: "The current value of the gauge",                                       default: 50, min:'minimum', max:'maximum', step:1 },
        maximum:            { type: PropType.number,    description: "The maximum value of the gauge",                                       default: 100 },
        minimum:            { type: PropType.number,    description: "The minimum value of the gauge",                                       default: 0 ,min:0},
        gaugeColor:         { type: PropType.color,    description: "The color of the gauge",                                               default: "#383838" },
        ...scalePropertiesDefs,
    },

    Lamp: {
        type:               { type: PropType.constant,  description: "The type of the item",                                                default: "Lamp" },
        ...commonPropertiesDefs,
        width:              { type: PropType.number,    description: "The width of the lamp",                                               default: 50, min:20 },
        height:             { type: PropType.number,    description: "The height of the lamp",                                              default: 50, min:20  },
        value:              { type: PropType.boolean,   description: "The current value of the lamp",                                       default: false },
        onColor:            { type: PropType.color,     description: "The color of the lamp when it is on",                                 default: "#62DB45" },
        offColor:           { type: PropType.color,     description: "The color of the lamp when it is off",                                default: "#9C9C9C" },
    },
    Output: {
        type:               { type: PropType.constant,  description: "The type of the item",                                                default: "Output" },
        ...commonPropertiesDefs,
        width:              { type: PropType.number,    description: "The width of the output",                                             default: 50 },
        height:             { type: PropType.number,    description: "The height of the output",                                            default: 50 },
        value:              { type: PropType.boolean,   description: "The current value of the output",                                     default: false },
        onColor:            { type: PropType.color,     description: "The color of the output when it is on",                               default: "#C23E24" },
        offColor:           { type: PropType.color,     description: "The color of the output when it is off",                              default: "#9C9C9C" },
    },
    Valve: {
        type:               { type: PropType.constant,  description: "The type of the item",                                                default: "Valve" },
        ...commonPropertiesDefs,
        width:              { type: PropType.number,    description: "The width of the valve",                                              default: 50 },
        height:             { type: PropType.number,    description: "The height of the valve",                                             default: 50 },
        value:              { type: PropType.boolean,   description: "The current value of the valve",                                      default: false },
        openColor:            { type: PropType.color,     description: "The color of the valve when it is open",                            default: "#62DB45" },
        closedColor:           { type: PropType.color,     description: "The color of the valve when it is closed",                         default: "#C23E24" },
        backgroundColor:    { type: PropType.color,     description: "The background color of the valve",                                   default: "#9C9C9C" },
    },
    Image: {
        type:               { type: PropType.constant,  description: "The type of the item",                                                default: "Image" },
        ...commonPropertiesDefs,
        width:              { type: PropType.number,    description: "The width of the image",                                              default: 200 },
        height:             { type: PropType.number,    description: "The height of the image",                                             default: 150 },
        src:                { type: PropType.image,    description: "The source of the image",                                             default: "" },
        backgroundColor:    { type: PropType.color,     description: "The background color of the image",                                   default: "#DDDDDD" },
        opacity:            { type: PropType.slider,    description: "The opacity of the image", min:0, max:1, step:0.05,                                           default: 1 },
        fit:                { type: PropType.imageFit,    description: "The fit of the image",                                                default: "contain" },
    },
    Label: {
        type:               { type: PropType.constant,  description: "The type of the item",                                                default: "Label" },
        ...commonPropertiesDefs,
        width:              { type: PropType.number,    description: "The width of the label",                                              default: 200 },
        height:             { type: PropType.number,    description: "The height of the label",                                             default: 50 },
        text:               { type: PropType.string,    description: "The text of the label",                                               default: "Text Label" },
        fontSize:           { type: PropType.number,    description: "The font size of the label",                                          default: 25 },
        fontColor:          { type: PropType.color,     description: "The font color of the label",                                         default: 'var(--fore-1)' },
        backgroundColor:    { type: PropType.color,     description: "The background color of the label",                                   default: "transparent" },
        opacity:            { type: PropType.slider,    description: "The opacity of the label", min:0, max:1,step:0.05,                                             default: 1 },
        horizontalAlign:    { type: PropType.alignment_h,    description: "The horizontal alignment of the text in the label",                   default: "center" },
        verticalAlign:      { type: PropType.alignment_v,    description: "The vertical alignment of the text in the label",                     default: "center" },
    },
    Value: {
        type:               { type: PropType.constant,  description: "The type of the item",                                                default: "Value" },
        ...commonPropertiesDefs,
        width:              { type: PropType.number,    description: "The width of the value",                                              default: 200 },
        height:             { type: PropType.number,    description: "The height of the value",                                             default: 50 },
        value:             { type: PropType.string,    description: "The value of the value",                                              default: "Value" },
        fontSize:           { type: PropType.number,    description: "The font size of the value",                                          default: 25 },
        fontColor:          { type: PropType.color,     description: "The font color of the value",                                         default: 'var(--fore-1)' },
        backgroundColor:    { type: PropType.color,     description: "The background color of the value",                                   default: "transparent" },
        opacity:            { type: PropType.slider,    description: "The opacity of the value", min:0, max:1,step:0.05,                                             default: 1 },
        horizontalAlign:    { type: PropType.alignment_h,    description: "The horizontal alignment of the text in the value",                   default: "center" },
        verticalAlign:      { type: PropType.alignment_v,    description: "The vertical alignment of the text in the value",                     default: "center" },
    },
    Panel: {
        type:               { type: PropType.constant,  description: "The type of the item",                                                default: "Panel" },
        ...commonPropertiesDefs,
        width:              { type: PropType.number,    description: "The width of the panel",                                              default: 300 },
        height:             { type: PropType.number,    description: "The height of the panel",                                             default: 250 },
        backColor:          { type: PropType.color,     description: "The background color of the panel",                                   default: "#CCCCCC" },
        opacity:            { type: PropType.slider,    description: "The opacity of the panel", min:0, max:1,step:0.05,                                             default: 1 },
        borderColor:        { type: PropType.color,     description: "The border color of the panel",                                       default: "#000000" },
        borderWidth:        { type: PropType.number,    description: "The border width of the panel",                                       default: 8 },
        borderStyle:        { type: PropType.borderStyle,    description: "The border style of the panel",                                       default: "ridge" },
        children:          { type: PropType.hidden,  description: "",                                           default: [] },
    },

}


export interface PropertyDefinition {
    type: PropType
    description: string
    default?: unknown
    min?: number | string
    max?: number | string
    step?: number 
}
