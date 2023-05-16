import { JSX } from "solid-js";

import styles from './css/Settings.module.css'

import { English, Chinese, German, French, Spanish, Italian, Sun, Moon } from "./assets/icons";

export interface SettingsItem {
    text: string;
    icons: JSX.Element[];
    values: string[];
    
}
export const SettingsItems: SettingsItem[] = [
    {
        text: 'Language',
        icons: [<English width={30} height={30} class={styles.Flag} />,
                <Chinese  width={30} height={30} class={styles.Flag} />, 
                <German  width={30} height={30} class={styles.Flag} />,
                <French  width={30} height={30} class={styles.Flag} />,
                <Spanish  width={30} height={30} class={styles.Flag} />,
                <Italian  width={30} height={30} class={styles.Flag} />
            ],
        values: ['English', '繁體中文', 'Deutsch', 'Français', 'Español', 'Italiano']
    },
    {
        text: 'Theme',
        icons: [<Sun width={30} height={30} class={styles.Sun} />,
                <Moon  width={30} height={30} class={styles.Moon}/>
            ],
        values: ['Light', 'Dark']
    },

];
