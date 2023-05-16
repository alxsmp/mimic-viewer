import styles from '../../css/Header.module.css'
import { Live, Settings, Stop, Upload } from '../../assets/icons';
import useTooltip from '../../generalComponents/useTooltip';
import { Mimic } from '../../generalComponents/MimicAndMimicItem';
import { Logo } from '../../assets/logo';
import { SystemState, SystemWindow } from './LiveMimic';
import { Show } from 'solid-js';


export default function ViewerHeader(props: {
    state: SystemState
    currentMimic: Mimic


}) {


    const [showTooltip, hideTooltip] = useTooltip()
    return (
        <div class={styles.main}>
            
            <span class={styles.header}>
            <div style={{height:'90%', "margin-bottom":'auto', 'margin-top':'auto', 'margin-left':'3em', 'margin-right':'3em'}}><Logo class={styles.logo}/></div>
            
                <button class={styles.button} style={{ width: '8em', height: '5em' }}
                    onMouseOver={e => {
                        showTooltip(() => <span style={{ padding: '0.5em' }}>Upload File</span>, {}, e.currentTarget)
                    }}
                    onMouseOut={hideTooltip}
                    onClick={() => {
                        const input = document.createElement('input')
                        input.type = 'file'
                        input.onchange = (e: any) => {
                            const file = e.target.files[0]
                            const reader = new FileReader()
                            reader.onload = (e: any) => {
                                const mimic = JSON.parse(e.target.result) as Mimic

                                props.currentMimic.items = mimic.items
                                props.currentMimic.name = mimic.name

                                
                                
                            }
                            reader.readAsText(file)
                        }
                        input.click()
                        
                    }
                    }
                    >
                    <Upload class={styles.upload} width={35} height={35} />
                </button>
                <span style={{ flex: 1 }} />
                <div style={{ display: 'flex', "flex-direction": 'row', "align-items": 'center', "margin-top": 'auto', "margin-bottom": 'auto' }}>
                    Connect to
                    <input type="text" class={styles.input} spellcheck={false}
                        value={"localhost"}
                    />
                </div>
                <Show when={props.state.machine !== undefined && props.currentMimic}>
                    <Show when={props.state.live} fallback={
                        <button class={styles.button} style={{ width: '8em', height: '5em' }}
                            onMouseOver={e => {
                                showTooltip(() => <span style={{ padding: '0.5em' }}>Go Live</span>, {}, e.currentTarget)
                            }}
                            onMouseOut={hideTooltip}
                            onClick={() => {

                                props.state.live = true


                            }}>
                            <Live class={styles.play} width={30} height={30} />
                            <svg width={30} height={30}>
                                <circle cx="50%" cy="50%" r="1em" fill="LightGray" stroke='Gray' />
                            </svg>
                        </button>

                    }>
                        <button class={styles.button} style={{ width: '8em', height: '5em' }}
                            onMouseOver={e => {
                                showTooltip(() => <span style={{ padding: '0.5em' }}>Disconnect</span>, {}, e.currentTarget)
                            }}
                            onMouseOut={hideTooltip}
                            onClick={() => {

                                props.state.live = false


                            }}>

                            <Stop class={styles.pause} width={30} height={30} />
                            <svg width={30} height={30}>
                                <circle cx="50%" cy="50%" r="1em" fill="IndianRed" stroke='darkRed' />
                            </svg>
                        </button>

                    </Show>

                </Show>
                <span style={{ flex: 1 }} />
                <button class={styles.button} style={{ width: '8em', height: '5em', 'margin-right': '5em' }}
                    onMouseOver={e => {
                        showTooltip(() => <span style={{ padding: '0.5em' }}>Settings</span>, {}, e.currentTarget)
                    }}
                    onMouseOut={hideTooltip}
                    
                    onClick={() => {
                        if(props.state.window == SystemWindow.Settings){
                            props.state.window = SystemWindow.None
                        }
                        else{
                            props.state.window = SystemWindow.Settings
                        }
                        
                    }}>


                    <Settings class={styles.download} width={35} height={35} />
                </button>
            </span>
        </div>
    )
}
