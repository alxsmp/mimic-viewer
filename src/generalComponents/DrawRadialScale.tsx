import { For, Show, createEffect, createMemo } from "solid-js"
import { JSX } from "solid-js/jsx-runtime"
import { range } from "../utils/range"
import adjustColor from "./adjustColor"

export default function DrawRadialScale(props: {
    //define the x and y of the scales start and end as a pair of numbers
    radius: number
    center : { x: number, y: number}

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

}) {    
    const startRotation = -90
    const endRotation = 90
    

    // Use pythagoras to calculate the length of the scale
    const length = createMemo(() => (props.radius * 2))
    const tickSeparation = createMemo(() => length() / (props.ticksCount))
    const labelSeparation = createMemo(() => length() / (props.labelsCount))
    const difference = createMemo(() => props.maximum - props.minimum)
    const lengthPerUnit = createMemo(() => length() / (props.maximum - props.minimum))
    
    const betterRange =  () => range(0, props.labelsCount + 1)



    const radius = createMemo(() => (length() / 2))

    return <>
        {/* Draw the main scale line until the warning value is reached*/}
        <ellipse
            cx={props.center.x}
            cy={props.center.y}
            rx={radius()}
            ry={radius()}
            stroke-linecap="butt"
            stroke={props.scaleColor}
            stroke-width='3'
            fill= 'transparent'
            stroke-dasharray={[0, radius() * Math.PI, 
                                    radius() * Math.PI * (props.warningValue/ difference()), 0].toString()}
        />
        {/* Draw the warning scale line until the danger value is reached*/}
        <ellipse
            cx={props.center.x}
            cy={props.center.y}
            rx={radius()}
            ry={radius()}
            stroke-linecap="butt"
            stroke={props.warningColor}
            stroke-width='3'
            fill= 'transparent'
            stroke-dasharray={[0, radius() * Math.PI + radius() * Math.PI * (props.warningValue/ difference()),
                                    radius() * Math.PI * ((props.dangerValue - props.warningValue)/ difference()), 0].toString()}
        />
        {/* Draw the danger scale line until the maximum value is reached*/}
        <ellipse
            cx={props.center.x}
            cy={props.center.y}
            rx={radius()}
            ry={radius()}
            stroke-linecap="butt"
            stroke={props.dangerColor}
            stroke-width='3'
            fill= 'transparent'
            stroke-dasharray={[0, radius() * Math.PI + radius() * Math.PI * (props.warningValue/ difference()) + radius() * Math.PI * ((props.dangerValue - props.warningValue)/ difference()),
                                    radius() * Math.PI * ((props.maximum - props.dangerValue)/ difference()), 0].toString()}
        />


        {/* Draw the scale ticks */}
        <For each={range(0, props.ticksCount + 1)}>{i => 
            
            // <For each={Array.from(Array(props.ticksCount  + 1).keys())}>{i => 
            <>
            { i <= props.ticksCount ?
                
                <line
                    x1 = {props.center.x}
                    y1 = {props.center.y - (length() / 2 )}

                    x2={props.center.x
                        
                        }
                    y2={props.center.y - (length() / 2)
                        + (props.ticksLength )
                        }
                    stroke-linecap="butt"
                   
                    // Work out the colour based on the tick value
                    stroke={tickValue(i) < props.warningValue ?     props.scaleColor    :
                            tickValue(i) < props.dangerValue  ?     props.warningColor  :
                                                                    props.dangerColor   }
                    stroke-width='3'

                    transform = {tickRotation(i)}
  
                    
                />: null
            }
                
            { i < props.ticksCount ?
                <For each={range(0, props.ticksSubDivisionsCount)}>{j =>
                    <>
                        <line
                            x1 = {props.center.x}
                            y1 = {props.center.y - (length() / 2 )}

                            x2={props.center.x}
                            y2={props.center.y - (length() / 2 )
                                + (props.ticksLength/2 )
                                }
                            stroke-linecap="butt"
                            stroke={tickValue(i, j) < props.warningValue ?     props.scaleColor    :
                                    tickValue(i, j) < props.dangerValue  ?     props.warningColor  :
                                                                                                            props.dangerColor   }
                            stroke-width='3'
                            transform = {tickRotation(i, j)}

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
                    x = {props.center.x }
                    y = {props.center.y- (length() / 2 )  + (props.fontSize * -0.75 )}
                    // Work out the colour based on the value
                    fill= { labelValue(k) < props.warningValue ?    props.scaleColor : 
                            labelValue(k) < props.dangerValue ?     props.warningColor : 
                                                                    props.dangerColor}

                    alignment-baseline="middle"
                    text-anchor="middle"
                    style={`font-size: ${props.fontSize}px;`}
                    transform = {labelRotation(k)}>

                    {
                        // Work out the label based on the value, rounded
                        labelValue(k)

                    }
                    
                    
                </text>: null}
            </>
        }

        
        </For>

    </>



        // Return the transformation for a tick at a given index
        function tickRotation(i : number, j?: number) {
            if(j == undefined)
                return `rotate(${startRotation + (tickValue(i) - props.minimum) * (endRotation - startRotation) / difference()} ${props.center.x} ${props.center.y})`
            else
                return `rotate(${startRotation + (tickValue(i, j) - props.minimum) * (endRotation - startRotation) / difference()} ${props.center.x} ${props.center.y})`
        }

        // Return the rotation for a label at a given index
        function labelRotation(k: number) {
            return `rotate(${startRotation + (labelValue(k) - props.minimum) * (endRotation - startRotation) / difference()} ${props.center.x} ${props.center.y})`
        }

        //Return the value of the tick at a given i and j index
        function tickValue(i: number, j?: number) {
            if(j == undefined)
                return props.minimum + (i * tickSeparation() / lengthPerUnit())
            else
                return props.minimum + (i * tickSeparation() / lengthPerUnit()) + (j * tickSeparation() / props.ticksSubDivisionsCount / lengthPerUnit())
        }

        // Return the value of a label at a given index
        function labelValue(k: number) {
            return props.minimum + (k * difference() / props.labelsCount)
        }






    

}
