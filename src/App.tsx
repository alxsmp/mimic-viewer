import { Component, Show, createEffect } from "solid-js";
import LiveMimic, { SystemState, SystemWindow } from "./mimic/Viewer/LiveMimic";
import styles from './css/App.module.css'
import { Mimic } from "./generalComponents/MimicAndMimicItem";
import ViewerHeader from "./mimic/Viewer/ViewerHeader";
import { createMutable } from "solid-js/store";

const App: Component = () => {

//   const state = createMutable<SystemState>(
//     {
//         window: SystemWindow.None,
//         settings: [0, 0],
//         live: undefined,
//         token: undefined,
//         machines: undefined,
//         machine: undefined
//     }

// )

// if (localStorage.getItem('State') != null) {
//     //If state is stored, set to stored state
//     let saved = JSON.parse(localStorage.getItem('State') ?? '[]') as SystemState
//     state.settings = saved.settings ?? [0, 0]
//     state.live = false
//     state.window = saved.window ?? SystemWindow.None

//     state.token = undefined
//     state.machines = undefined
//     state.machine = undefined
// }


const jsonFromMimFile = JSON.parse('{"name":"wd","items":[{"type":"Lamp","tag":"IO.TakeSampleLamp","x":352,"y":178,"width":50,"height":50,"value":true,"onColor":"#62DB45","offColor":"#9C9C9C"}]}') as Mimic

// createEffect(() => {

//     localStorage.setItem('State', JSON.stringify(state)) // save settings to local storage when they change
//     if (state.settings == undefined) {
//         return
//     }
    
//     if (state.settings[1] == 0) {
//         //Light Mode
//         const themeLink = document.getElementById('themeLink') as HTMLLinkElement;
//         themeLink.href = `/src/css/themes/light.css`;

//     }
//     else {
//         //Dark Mode
//         const themeLink = document.getElementById('themeLink') as HTMLLinkElement;
//         themeLink.href = `/src/css/themes/dark.css`;
//     }
// })

  return (<LiveMimic content={jsonFromMimFile} server='http://localhost:80' refreshMs={1000} style={{ width: '100%', height: '100%', "user-select": 'none' }} />
  )
}
  
  {/* <ViewerHeader state={state}  currentMimic={currentMimic!}/> */}

export default App;
