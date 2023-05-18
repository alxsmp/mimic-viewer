import { Component } from "solid-js";
import LiveMimic from "./mimicViewer/LiveMimic";
import { Mimic } from "./ItemRendering/MimicAndMimicItem";
import { Token, signIn } from "./api/apiSignIn";
import { fetchLiveMachines, fetchTagValues } from "./api/live/apiLive";
import { LiveMachines, LiveMachine } from "./api/live/apiLiveData";

const App: Component = () => {

const jsonFromMimFile = JSON.parse('{"name":"wd","items":[{"type":"Lamp","tag":"IO.TakeSampleLamp","x":352,"y":178,"width":50,"height":50,"value":true,"onColor":"#62DB45","offColor":"#9C9C9C"}]}') as Mimic

    let refresher!: () => void  // hold on to the refresher function so we can call it later
    setInterval(() => refresher(), 1000)  // call the refresher function every second


  //Test Setup for token, machines and machine using the local server
    let token: Token | null
    let machines: LiveMachines | null
    let machine: LiveMachine | null
    const server = 'http://localhost:80'
    signIn(server, 'data@adaptivecontrol.com', '').then(newToken => {
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

    
    
  return (<LiveMimic content={jsonFromMimFile} 
         onRefresher={refresher1 => refresher = refresher1}  // make a note of the refresher function
         getTagValues={async (tags: string[]) => { return fetchTagValues(token!, machine!.name, tags)}}
         style={{ width: '100%', height: '100%', "user-select": 'none',
        }} />
  )
}
  
  {/* <ViewerHeader state={state}  currentMimic={currentMimic!}/> */}

export default App;
