import { For, Show, createEffect, createMemo } from "solid-js"
import { JSX } from "solid-js/jsx-runtime"


export default function DrawScale(props: {
    //define the x and y of the scales start and end as a pair of numbers
    startPosition: { x: number, y: number}
    endPosition: { x: number, y: number}

    warningValue: number
    dangerValue: number
    minimum: number
    maximum: number

    scaleColor: string
    warningColor: string
    dangerColor: string

    ticksCount: number
    ticksLength: number
    ticksSubDivisionsCount: number

    labelsCount: number
    labelsColor: string
    fontSize: number

    scalePosition: string

}) {



    // Use pythagoras to calculate the length of the scale
    const length = createMemo(() => (Math.sqrt(Math.pow(props.endPosition.x - props.startPosition.x, 2) + Math.pow(props.endPosition.y - props.startPosition.y, 2))))
    const directionX = createMemo(() => (props.endPosition.x - props.startPosition.x) / length())
    const directionY = createMemo(() => (props.endPosition.y - props.startPosition.y) / length())
    const tickSeparation = createMemo(() => length() / (props.ticksCount))
    const labelSeparation = createMemo(() => length() / (props.labelsCount))
    const difference = createMemo(() => props.maximum - props.minimum)
    const lengthPerUnit = createMemo(() => length() / (props.maximum - props.minimum))

    const betterRange =  () => range(0, props.labelsCount + 1)

    return <>
        {/* Draw the main scale line until the warning value is reached*/}
        <line
            x1={props.startPosition.x}
            y1={props.startPosition.y}
            x2={props.startPosition.x + (directionX() * (props.warningValue - props.minimum) * lengthPerUnit())}
            y2={props.startPosition.y + (directionY() * (props.warningValue - props.minimum) * lengthPerUnit())}
            stroke-linecap="butt"
            stroke={props.scaleColor}
            stroke-width="3"
        />
        {/* Draw the warning scale line until the danger value is reached*/}
        <line
            x1={props.startPosition.x + (directionX() * (props.warningValue - props.minimum)  * lengthPerUnit())}
            y1={props.startPosition.y + (directionY() * (props.warningValue - props.minimum)  * lengthPerUnit())}
            x2={props.startPosition.x + (directionX() * (props.dangerValue - props.minimum)  * lengthPerUnit())}
            y2={props.startPosition.y + (directionY() * (props.dangerValue - props.minimum)  * lengthPerUnit())}
            stroke-linecap="butt"
            stroke={props.warningColor}
            stroke-width="3"
        />
        {/* Draw the danger scale line until the end of the scale*/}
        <line
            x1={props.startPosition.x + (directionX() * (props.dangerValue - props.minimum) * lengthPerUnit())}
            y1={props.startPosition.y + (directionY() * (props.dangerValue - props.minimum) * lengthPerUnit())}
            x2={props.endPosition.x}
            y2={props.endPosition.y}
            stroke-linecap="butt"
            stroke={props.dangerColor}
            stroke-width="3"
        />

        {/* Draw the scale ticks */}
        <For each={range(0, props.ticksCount + 1)}>{i => 
            // <For each={Array.from(Array(props.ticksCount  + 1).keys())}>{i => 
            <>
            { i <= props.ticksCount ?
                <line
                    x1={props.startPosition.x + (i * tickSeparation()) * directionX() - (1.5 * (props.scalePosition === 'left' ? 1 : -1) * directionY())}
                    y1={props.startPosition.y + (i * tickSeparation()) * directionY() - (1.5 * (props.scalePosition === 'left' ? -1 : 1) * directionX())}

                    x2={props.startPosition.x + (i * tickSeparation()) * directionX() + (props.ticksLength * (props.scalePosition === 'left' ? 1 : -1) * directionY())}
                    y2={props.startPosition.y + (i * tickSeparation()) * directionY() + (props.ticksLength * (props.scalePosition === 'left' ? -1 : 1) * directionX())}
                    stroke-linecap="butt"
                   
                    // Work out the colour based on the tick value
                    stroke={i * (difference() / props.ticksCount) + props.minimum < props.warningValue ? props.scaleColor :
                            i * (difference() / props.ticksCount) + props.minimum < props.dangerValue ? props.warningColor :
                            props.dangerColor}
                    stroke-width="3"
                />: null
            }
                
                { i < props.ticksCount ?
                    <For each={range(0, props.ticksSubDivisionsCount)}>{j =>
                        <>
                            <line
                                x1={props.startPosition.x + ((i * tickSeparation()) + (j * tickSeparation() / props.ticksSubDivisionsCount)) * directionX() - (1.5 * (props.scalePosition === 'left' ? 1 : -1) * directionY())}
                                y1={props.startPosition.y + ((i * tickSeparation()) + (j * tickSeparation() / props.ticksSubDivisionsCount)) * directionY() - (1.5 * (props.scalePosition === 'left' ? -1 : 1) * directionX())}

                                x2={props.startPosition.x + ((i * tickSeparation()) + (j * tickSeparation() / props.ticksSubDivisionsCount)) * directionX() + (props.ticksLength * (props.scalePosition === 'left' ? 1 : -1) * directionY()) / 2}
                                y2={props.startPosition.y + ((i * tickSeparation()) + (j * tickSeparation() / props.ticksSubDivisionsCount)) * directionY() + (props.ticksLength * (props.scalePosition === 'left' ? -1 : 1) * directionX()) / 2}
                                stroke-linecap="butt"
                                // Work out the colour based on the tick value
                                stroke = 
                                    {props.minimum + (i * tickSeparation() / lengthPerUnit()) + (j * tickSeparation() / props.ticksSubDivisionsCount / lengthPerUnit()) < props.warningValue ? props.scaleColor
                                    : props.minimum + (i * tickSeparation() / lengthPerUnit()) + (j * tickSeparation() / props.ticksSubDivisionsCount / lengthPerUnit()) < props.dangerValue ? props.warningColor
                                    : props.dangerColor}
                                stroke-width="3"
                            />
                        </>
                    }
                    </For>
                    : null}
            </>
        }
        </For>
        {/* Draw the scale labels */}
        {/* <For each={range(0, props.labelsCount + 1)}>{k => */}
        <For each={betterRange()}>{k =>
            <>
        {k <= props.labelsCount ?    
                <text
                    x={props.startPosition.x + (k * labelSeparation()) * directionX() + (props.ticksLength * (props.scalePosition === 'left' ? 1 : -1)* directionY()) + (props.fontSize * (props.scalePosition === 'left' ? 1 : -1) * directionY())}
                    y={props.startPosition.y + (k * labelSeparation()) * directionY() + (props.ticksLength * (props.scalePosition === 'left' ? -1 : 1)* directionX()) + (props.fontSize * (props.scalePosition === 'left' ? -1 : 1) * directionX())}

                    // Work out the colour based on the value
                    fill= {props.minimum + (k * difference() / props.labelsCount) < props.warningValue ? props.scaleColor : 
                        props.minimum + (k * difference() / props.labelsCount) < props.dangerValue ? props.warningColor : props.dangerColor}


                    alignment-baseline="middle"
                    text-anchor="middle"
                    style={`font-size: ${props.fontSize}px;`}>
                    {
                        // Work out the label based on the value, rounded
                        props.minimum + (k * difference() / props.labelsCount)

                    }
                    

                </text>: null}
            </>
        }

        
        </For>

    </>
}

export function range(start: number, stop: number, step = 1) : number[] {
    return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
}