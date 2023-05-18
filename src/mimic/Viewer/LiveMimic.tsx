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





export default function LiveMimic(props: {
    content: Object,
    onRefresher: (refresher: () => void) => void,
    getTagValues: (tag: string[]) => Promise<any[]>,
    // darkTheme?: boolean,
    style?: JSX.CSSProperties
}) {

    const mimic = createMutable<Mimic>(props.content as Mimic)

    // Call this just once at setup
    props.onRefresher(() => {
        //Loop through each item in the mimic
        mimic.items.forEach((item) => {
            //If the item has an tag that is not empty
            if (item.tag != '') {
                //Fetch the tag value
                props.getTagValues([item.tag]).then((tagValue) => {
                    //If the tag value is not empty
                    if (tagValue[0].value != '') {
                        //Set the item value to the tag value
                        (item as any).value = tagValue[0]
                    }
                })
            }
        })
    })



    return (
            <div style={{ width: '100%', height: '100%' }}>

                <div style={{ ...props.style, position: 'relative', flex: 1 }}>
                    <For each={mimic.items}>
                        {(item) =>

                            //Create a container for the item to fill
                            <div style={{
                                ...props.style,
                                position: 'absolute',
                                left: item.x + 'px',
                                top: item.y + 'px',
                                width: item.width + 'px',
                                height: item.height + 'px',
                            }}>

                                {/* Render the item */}
                                <MimicItemElement item={item} />

                                {/* If the item is a panel, render its children */}
                                <For each={item.children}>
                                    {(child) => {
                                        return <MimicItemElement item={child} />
                                    }}
                                </For>
                            </div>
                        }
                    </For>
                </div>
            </div>
    )
}


