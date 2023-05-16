import { createEffect, createSignal, For, Match, Show, Switch } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { createMutable } from "solid-js/store"
import { Mimic as Mimic, MimicItem } from "../../generalComponents/MimicAndMimicItem";
import MimicItemElement, { BaseItemWrapper } from "../../Elements/MimicItemElement";
import Settings from "../../Settings";
import { SettingsItems } from "../../SettingsItems";
import ViewerHeader from "./ViewerHeader";
import { signIn, Token } from "../../api/apiSignIn";
import { LiveMachines, LiveMachine } from "../../api/live/apiLiveData";
import { fetchTagValues, fetchLiveMachines } from "../../api/live/apiLive";

export interface SystemState {
    window: SystemWindow
    settings: number[]
    live: boolean | undefined
    token: Token | undefined
    machines: LiveMachines | undefined
    machine: LiveMachine | undefined
}

export enum SystemWindow {
    None,
    Settings,
    LogIn,
    Worlds
}

export default function LiveMimic(props: {
    content: Object,
    server: string,
    refreshMs: number,
    style?: JSX.CSSProperties
}) {

    const [panned, setPanned] = createSignal<[number, number]>([0, 0])
    const [selectedItems, setSelectedItems] = createSignal<MimicItem[]>([])

    const currentMimic = createMutable<Mimic>(JSON.parse(JSON.stringify(props.content)) as Mimic)

    let token: Token | null
    let machines: LiveMachines | null
    let machine: LiveMachine | null


    createEffect(() => {
        // set browser title to mimic name or 'Adaptive Mimic Editor' if no mimic is loaded
        if (currentMimic=== undefined || currentMimic!.name == '')
            document.title = 'Adaptive Mimic Editor'
        else
            document.title = currentMimic!.name + ' - Adaptive Mimic Editor'

    })

    
    signIn(props.server, 'data@adaptivecontrol.com', '').then(newToken => {
        if (token === null)
          console.log('no such user or incorrect password')
        else {
          token = newToken
          fetchLiveMachines(token!).then(liveMachines => {
            machines = liveMachines
            if (liveMachines.machines.length == 1)
              machine = liveMachines.machines[0]
            
            

          })
        }
      })

    setInterval(() => {
        
            //Loop through each item in the mimic
            if (currentMimic != undefined) {
                currentMimic!.items.forEach((item) => {
                    //If the item has an tag that is not empty
                    if (item.tag != '') {
                        //Fetch the tag value
                        fetchTagValues(token!, machine!.name, [item.tag]).then((tagValue) => {
                            
                            //If the tag value is not empty
                            if (tagValue[0].value != '') {
                                //Set the item value to the tag value
                                
                                (item as any).value = tagValue[0]
                                
                            }
                        })
                    }
                })
            }
        
    }, props.refreshMs)





      let mouseStartPosition: [number, number] | undefined = undefined
      let startPan: [number, number] | undefined = undefined

    return (
        <div style={{ width: '100%', height: '100%' }} 

        onMouseDown={e => {
            if (e.button == 1) {


                //Store the current mouse position
                mouseStartPosition = [e.clientX, e.clientY]
                //Store the current pan position
                startPan = panned()
                //Set the cursor to the move cursor
                e.currentTarget.style.cursor = 'move'
            }
        }}
        onMouseMove={e => {

            if (mouseStartPosition !== undefined) {

                e.currentTarget.style.cursor = 'move'

                //Work out how much the mouse has moved
                let mouseDelta = [e.clientX - mouseStartPosition[0], e.clientY - mouseStartPosition[1]]
                //Update the panned state
                setPanned([startPan![0] + mouseDelta[0], startPan![1] + mouseDelta[1]])


            }
        }}
        onMouseUp={e => {
            if (e.button == 1) {

                e.currentTarget.style.cursor = 'default'
                mouseStartPosition = undefined

            }
        }}>

            
            <div style={{ width: '100%', height: '100%' }}>
                <Show when={currentMimic !== undefined} fallback={<div style={{ display: 'flex', "flex-direction": 'column', "align-items": 'center', "justify-content": 'center', "flex": 1 }}>
                    <h1>No Mimic Loaded!</h1>
                    <p>Upload a mimic to start editing.</p>
                </div>}>
                    <div style={{ ...props.style, position: 'relative', flex: 1 }}>
                        <For each={currentMimic!.items}>
                            {(item) =>

                                <div style={{
                                    ...props.style,
                                    position: 'absolute',
                                    left: item.x + 'px',
                                    top: item.y + 'px',
                                    width: item.width + 'px',
                                    height: item.height + 'px',
                                    transform: `translate(${panned()[0]}px, ${panned()[1]}px)`
                                }}>
                                <MimicItemElement item={item} />

                                <For each={item.children}>
                                    {(child) => {
                                        return <MimicItemElement item={child} />
                                    }}
                                </For>
                                </div>



                            
                        }
                        </For>
                    </div>
                </Show>
            </div>

        </div>
    )
}


