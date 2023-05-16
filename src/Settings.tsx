import { createSignal, For, JSX, Signal } from "solid-js";

import styles from './css/Settings.module.css'
import { SystemState } from "./mimic/Viewer/LiveMimic";


export default function MimicSettings(props: {
  items: { text: string, icons: JSX.Element[], values: string[] }[]
  state: SystemState
  
  style?: JSX.CSSProperties
}) {



  return (
    <div class={styles.main}

      style={{
        position: 'absolute',
        left: '0px',
        right: '0px',
        top: '0px',
        bottom: '0px',
        margin: 'auto auto',
      }}>

      <div class={styles.header}>Settings</div>

        <For each={props.items}>
          {(item, setting) =>
            <div style={{ width: '100%', display:'flex', "justify-items":'center', "align-items":'center','height':'3em', 'margin-bottom':'1em'}}>
                <div style={{ 'margin-right': '2em', 'width':'10%'}}>{item.text}</div>
                <div style={{ display: 'flex', flex:1,'flex-direction': 'row', 'justify-content': 'space-between' }}>

                  {/* Display Each of the current language options and their icon */}
                  <For each={item.icons}>
                    {(icon, option) =>
                      <div
                        style={{ 'margin-left': '0.5em', width: 100 / item.values.length + '%' }}
                        class={styles.settingsButton}
                        onclick={(e) => {
                          e.stopPropagation()
                          let newSettings = props.state.settings
                          newSettings[setting()] = option()
                          
                         props.state.settings = newSettings
                          
                          
                        }}
                      >
                        {icon}
                        {item.values[option()]}

                      </div>
                    }
                  </For>
                </div>


              </div>

          }
        </For>
    </div>
  )
}