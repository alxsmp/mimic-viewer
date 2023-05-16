export interface Tag {
    name: string
    // originalName?: string
    //    displayName: string
    type: string | {}
    category?: string
    description?: string
    minimum?: number
    maximum?: number
    io?: IO
    graph?: Graph
    format?: string
}

export interface IO {
    ioType: string
    channel: number
    allowOverride?: boolean
    device?: string
    format?: string
}

export interface Graph {
    minValue: number
    maxValue: number
    minYPercent: number
    maxYPercent: number
    color: string
    format?: string
    labels?: Label[]
}

export interface Label {
    text: string
    value: number
}

export function tagFormat(tag: Tag) {
    return tag.format ?? tag.io?.format ?? tag.graph?.format
}
