import { JSX } from "solid-js/jsx-runtime";

export function Cylinder(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="System / Cylinder">
                <path class={props.class} id="Vector" d="M18 7V17C18 18.6569 15.3137 20 12 20C8.68629 20 6 18.6569 6 17V7M18 7C18 5.34315 15.3137 4 12 4C8.68629 4 6 5.34315 6 7M18 7C18 8.65685 15.3137 10 12 10C8.68629 10 6 8.65685 6 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function Square(props: { width: number, height: number, class?: string }) {
    return (
        <svg height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="Interface / Checkbox_Fill">
                <g id="Vector">
                    <path class={props.class} d="M4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path class={props.class} d="M15 13.4001V10.6001C15 10.04 14.9996 9.75981 14.8906 9.5459C14.7948 9.35774 14.6423 9.20487 14.4542 9.10899C14.2403 9 13.9597 9 13.3996 9H10.5996C10.0396 9 9.75981 9 9.5459 9.10899C9.35774 9.20487 9.20487 9.35774 9.10899 9.5459C9 9.75981 9 10.04 9 10.6001V13.4001C9 13.9601 9 14.2398 9.10899 14.4537C9.20487 14.6419 9.35774 14.7952 9.5459 14.8911C9.7596 15 10.039 15 10.598 15H13.4011C13.96 15 14.2405 15 14.4542 14.8911C14.6423 14.7952 14.7948 14.6419 14.8906 14.4537C14.9996 14.2398 15 13.9601 15 13.4001Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </g>
        </svg>
    )
}

export function Circle(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="Interface / Radio_Fill">
                <g id="Vector">
                    <path class={props.class} d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path class={props.class} d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </g>
        </svg>
    )
}

export function Photo(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="Media / Image_01">
                <path class={props.class} id="Vector" d="M3.00005 17.0001C3 16.9355 3 16.8689 3 16.8002V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4801 4 19.9079 4.21799C20.2842 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8031C21 17.2881 21 17.6679 20.9822 17.9774M3.00005 17.0001C3.00082 17.9884 3.01337 18.5058 3.21799 18.9074C3.40973 19.2837 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H17.8036C18.9215 20 19.4805 20 19.9079 19.7822C20.2842 19.5905 20.5905 19.2837 20.7822 18.9074C20.9055 18.6654 20.959 18.3813 20.9822 17.9774M3.00005 17.0001L7.76798 11.4375L7.76939 11.436C8.19227 10.9426 8.40406 10.6955 8.65527 10.6064C8.87594 10.5282 9.11686 10.53 9.33643 10.6113C9.58664 10.704 9.79506 10.9539 10.2119 11.4541L12.8831 14.6595C13.269 15.1226 13.463 15.3554 13.6986 15.4489C13.9065 15.5313 14.1357 15.5406 14.3501 15.4773C14.5942 15.4053 14.8091 15.1904 15.2388 14.7607L15.7358 14.2637C16.1733 13.8262 16.3921 13.6076 16.6397 13.5361C16.8571 13.4734 17.0896 13.4869 17.2988 13.5732C17.537 13.6716 17.7302 13.9124 18.1167 14.3955L20.9822 17.9774M20.9822 17.9774L21 17.9996M15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function RenameFile(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="File / File_Edit">
                <path class={props.class} id="Vector" d="M6 11.0002V6.2002C6 5.08009 6 4.51962 6.21799 4.0918C6.40973 3.71547 6.71547 3.40973 7.0918 3.21799C7.51962 3 8.08009 3 9.2002 3H13.6747C13.7973 3 13.9045 3 14 3.00087M19.9991 9C20 9.09561 20 9.20296 20 9.32568V17.8036C20 18.9215 20 19.4805 19.7822 19.9079C19.5905 20.2842 19.2839 20.5905 18.9076 20.7822C18.4802 21 17.921 21 16.8031 21L13 21M19.9991 9C19.9963 8.71451 19.9857 8.53376 19.9443 8.36133C19.8953 8.15726 19.8142 7.96214 19.7046 7.7832C19.5809 7.58136 19.4089 7.40889 19.063 7.06298L15.9375 3.9375C15.5918 3.59182 15.4186 3.41857 15.2168 3.29492C15.0379 3.18526 14.8429 3.10425 14.6388 3.05526C14.4663 3.01385 14.2856 3.00347 14 3.00087M19.9991 9H20.0002M19.9991 9H17.1969C16.079 9 15.5192 9 15.0918 8.78223C14.7155 8.59048 14.4097 8.28392 14.218 7.90759C14 7.47977 14 6.9201 14 5.8V3.00087M9 14L11 16M4 21V18.5L11.5 11L14 13.5L6.5 21H4Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function Close(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="Menu / Close_SM">
                <path class={props.class} id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function NewFile(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="File / File_Add">
                <path class={props.class} id="Vector" d="M12 18V15M12 15V12M12 15H9M12 15H15M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M13 3.00087V5.8C13 6.9201 13 7.47977 13.218 7.90759C13.4097 8.28392 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.9991M18.9991 9H19.0002" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function Label(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="Interface / Label">
                <path class={props.class} id="Vector" d="M19.2933 9.95137L16.96 7.15137C16.6073 6.72814 16.43 6.51639 16.2139 6.36426C16.0223 6.22946 15.8084 6.12953 15.5822 6.06868C15.327 6 15.0523 6 14.5014 6H7.2002C6.08009 6 5.51962 6 5.0918 6.21799C4.71547 6.40973 4.40973 6.71547 4.21799 7.0918C4 7.51962 4 8.08009 4 9.2002V14.8002C4 15.9203 4 16.4801 4.21799 16.9079C4.40973 17.2842 4.71547 17.5905 5.0918 17.7822C5.5192 18 6.07899 18 7.19691 18H14.5014C15.0523 18 15.327 17.9998 15.5822 17.9312C15.8084 17.8703 16.0223 17.7702 16.2139 17.6354C16.43 17.4833 16.6073 17.2721 16.96 16.8488L19.2933 14.0488C19.9006 13.32 20.2036 12.9556 20.3197 12.5488C20.422 12.1902 20.422 11.8095 20.3197 11.4509C20.2036 11.0441 19.9006 10.6801 19.2933 9.95137Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function Value(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="Interface / Slider_02">
                <path class={props.class} id="Vector" d="M14 18H21M3 18H5M5 18C5 19.3807 6.11929 20.5 7.5 20.5C8.88071 20.5 10 19.3807 10 18C10 16.6193 8.88071 15.5 7.5 15.5C6.11929 15.5 5 16.6193 5 18ZM20 12H21M3 12H10M13 6H21M13 6C13 4.61929 11.8807 3.5 10.5 3.5C9.11929 3.5 8 4.61929 8 6C8 7.38071 9.11929 8.5 10.5 8.5C11.8807 8.5 13 7.38071 13 6ZM3 6H4M16.5 14.5C15.1193 14.5 14 13.3807 14 12C14 10.6193 15.1193 9.5 16.5 9.5C17.8807 9.5 19 10.6193 19 12C19 13.3807 17.8807 14.5 16.5 14.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function Valve(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="Edit / Remove_Minus_Circle">
                <path class={props.class} id="Vector" d="M8 12H16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function Thermometer(props: { width: number, height: number, class?: string }) {
    return (

        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class={props.class} d="M12,2 C13.7330315,2 15.1492459,3.35645477 15.2448552,5.06545968 L15.25,5.24987066 L15.251,13.202 L15.3310301,13.270935 C16.2565465,14.097507 16.8481697,15.2418033 16.9745652,16.4939066 L16.9936024,16.7457024 L17,17 C17,19.7614237 14.7614237,22 12,22 C9.23857625,22 7,19.7614237 7,17 C7,15.637307 7.54959924,14.3654986 8.48922288,13.4395696 L8.66993395,13.2700735 L8.749,13.202 L8.75,5.25 C8.75,3.57886252 10.0112953,2.20231635 11.6338512,2.02039625 L11.8155761,2.00514479 L12,2 Z M12,3.5 C11.0818266,3.5 10.3288077,4.20711027 10.2558012,5.10650661 L10.25,5.25003944 L10.2495427,13.9444921 L9.94128095,14.1691409 C9.04185425,14.824607 8.5,15.8663631 8.5,17 C8.5,18.9329966 10.0670034,20.5 12,20.5 C13.9329966,20.5 15.5,18.9329966 15.5,17 C15.5,15.9375513 15.0240648,14.955799 14.2238599,14.2971002 L14.0595403,14.1697396 L13.7514995,13.9451154 L13.75,5.25 C13.75,4.28350169 12.9664983,3.5 12,3.5 Z M12,8 C12.4142136,8 12.75,8.33578644 12.75,8.75 L12.7505732,14.6146307 C13.7645539,14.9333735 14.5,15.8808004 14.5,17 C14.5,18.3807119 13.3807119,19.5 12,19.5 C10.6192881,19.5 9.5,18.3807119 9.5,17 C9.5,15.8804347 10.2359268,14.9327543 11.250421,14.6143184 L11.25,8.75 C11.25,8.33578644 11.5857864,8 12,8 Z" id="🎨-Color">
            </path>
        </svg>
    )
}

export function Gauge(props: { width: number, height: number, class?: string }) {
    return (

        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class={props.class} d="M10.0492532,15.4208574 L16.3060077,6.94493547 C16.5131405,6.66433611 16.8962754,6.58091825 17.2013158,6.75000494 C17.4758699,6.90219275 17.61052,7.21639422 17.5413028,7.51420559 L17.510592,7.61262428 L13.6405266,17.4116224 C13.2205308,18.475051 12.0179777,18.9966563 10.9545491,18.5766605 C10.8710782,18.543694 10.7898393,18.5053348 10.7113465,18.4618255 C9.71108052,17.9073691 9.34968053,16.6470175 9.904137,15.6467516 L9.97303013,15.5314501 L9.97303013,15.5314501 L10.0492532,15.4208574 L16.3060077,6.94493547 L10.0492532,15.4208574 Z M13.850015,12.7977214 L11.2560655,16.3117019 L11.2160666,16.373966 L11.2160666,16.373966 C11.0632395,16.6496733 11.1628536,16.9970689 11.4385609,17.149896 L11.5055502,17.1815268 L11.5055502,17.1815268 C11.769176,17.2856445 12.0638421,17.1796801 12.2044743,16.9439092 L12.2453929,16.8606213 L13.850015,12.7977214 Z M18.6095174,7.41397033 C19.364068,8.02528183 20.0469718,8.75083284 20.6317275,9.58595046 C21.1562296,10.3350171 21.6612578,11.2420254 21.9517027,11.9842912 C22.1026388,12.3700259 21.9122969,12.8050834 21.5265623,12.9560194 C21.1408277,13.1069554 20.7057702,12.9166136 20.5548341,12.530879 C20.4575421,12.2822379 20.3277108,12.0046594 20.1775548,11.7190679 L18.1280514,12.9023464 C17.769332,13.1094531 17.3106392,12.9865468 17.1035324,12.6278273 C16.9136845,12.2990011 17.0011393,11.8861696 17.2933389,11.6601229 L17.3780514,11.6033083 L19.3963044,10.4364308 L19.1658779,10.1227204 C18.8419948,9.70016342 18.4876665,9.31329453 18.1081562,8.96304177 L18.4883177,7.99876394 C18.5262055,7.90283222 18.5550318,7.80534515 18.5751558,7.70730436 L18.5988599,7.55995309 L18.6095174,7.41397033 Z M15.9809484,5.85271523 C15.8318986,5.9392755 15.694531,6.04936208 15.5743759,6.18134222 L15.4601633,6.32055973 L14.919203,7.05349635 C14.2174399,6.80955942 13.4886764,6.6517272 12.7502416,6.58305531 L12.75,9.25589923 C12.75,9.6701128 12.4142136,10.0058992 12,10.0058992 C11.6203042,10.0058992 11.306509,9.72374535 11.2568466,9.35766979 L11.25,9.25589923 L11.2496135,6.56662077 C9.65294084,6.68015443 8.06551588,7.21425939 6.65889532,8.19918572 C5.84294582,8.77051971 5.13152818,9.52142873 4.54015984,10.4038879 L6.62237477,11.6059717 C6.98109424,11.8130785 7.1040006,12.2717713 6.89689382,12.6304908 C6.70704594,12.959317 6.30579591,13.0899946 5.96393397,12.9499658 L5.87237477,12.9050099 L3.79818254,11.7080227 C3.6704134,11.9742424 3.55177265,12.248307 3.44255853,12.5292935 C3.29249811,12.9153696 2.8578736,13.1066981 2.47179751,12.9566377 C2.08572142,12.8065773 1.89439292,12.3719528 2.04445335,11.9858767 C2.85090303,9.91103954 4.12374054,8.14315832 5.79853067,6.97045765 C8.8904309,4.8054858 12.7328827,4.5119546 15.9809484,5.85271523 Z" id="🎨-Color">
            </path>
        </svg>
    )
}

export function Panel(props: { width: number, height: number, class?: string }) {
    return (

        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class={props.class} d="M3 6H3.01919M3.01919 6H20.9809M3.01919 6C3 6.31438 3 6.70191 3 7.2002V16.8002C3 17.9203 3 18.4796 3.21799 18.9074C3.40973 19.2837 3.71547 19.5905 4.0918 19.7822C4.51921 20 5.079 20 6.19694 20L17.8031 20C18.921 20 19.48 20 19.9074 19.7822C20.2837 19.5905 20.5905 19.2837 20.7822 18.9074C21 18.48 21 17.921 21 16.8031L21 7.19691C21 6.70021 21 6.31368 20.9809 6M3.01919 6C3.04314 5.60768 3.09697 5.3293 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4796 4 19.9074 4.21799C20.2837 4.40973 20.5905 4.71547 20.7822 5.0918C20.9032 5.3293 20.957 5.60768 20.9809 6M20.9809 6H21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export function Copy(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="File / Files">
                <path class={props.class} id="Vector" d="M9 6H9.33687C9.58146 6 9.70385 6 9.81893 6.02763C9.92097 6.05213 10.0189 6.09263 10.1084 6.14746C10.2093 6.20928 10.2959 6.29591 10.4688 6.46875L13.5315 9.53149C13.7044 9.70444 13.7904 9.79044 13.8523 9.89135C13.9071 9.98082 13.9482 10.0786 13.9727 10.1807C14 10.2946 14 10.4155 14 10.6552V18M9 6H4.59961C4.03956 6 3.75981 6 3.5459 6.10899C3.35774 6.20487 3.20487 6.35774 3.10899 6.5459C3 6.75981 3 7.04004 3 7.6001V19.4001C3 19.9601 3 20.2398 3.10899 20.4537C3.20487 20.6419 3.35774 20.7952 3.5459 20.8911C3.7596 21 4.03902 21 4.598 21L12.4011 21C12.96 21 13.2405 21 13.4542 20.8911C13.6423 20.7952 13.7948 20.6421 13.8906 20.4539C13.9996 20.24 14 19.9599 14 19.3999V18M9 6V9.4C9 9.96005 9 10.2399 9.10899 10.4538C9.20487 10.642 9.35774 10.7952 9.5459 10.8911C9.7596 11 10.039 11 10.598 11H13.9996M10 6.0001V4.6001C10 4.04005 10 3.75981 10.109 3.5459C10.2049 3.35774 10.3577 3.20487 10.5459 3.10899C10.7598 3 11.0396 3 11.5996 3H16M16 3H16.3369C16.5815 3 16.7038 3 16.8189 3.02763C16.921 3.05213 17.0189 3.09263 17.1084 3.14746C17.2093 3.20928 17.2959 3.29592 17.4688 3.46875L20.5315 6.53149C20.7044 6.70444 20.7904 6.79044 20.8523 6.89135C20.9071 6.98082 20.9482 7.07863 20.9727 7.18066C21 7.29458 21 7.41552 21 7.65515V16.3999C21 16.9599 20.9996 17.24 20.8906 17.4539C20.7948 17.6421 20.6429 17.7952 20.4548 17.8911C20.2411 18 19.961 18 19.402 18H14M16 3V6.4C16 6.96005 16 7.23988 16.109 7.4538C16.2049 7.64196 16.3577 7.79524 16.5459 7.89111C16.7596 8 17.039 8 17.598 8H20.9996" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}


export function Download(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="File / File_Download">
                <path class={props.class} id="Vector" d="M12 12V18M12 18L15 16M12 18L9 16M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.5192 21 7.07899 21 8.19691 21H15.8031C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M13 3.00087V5.8C13 6.9201 13 7.47977 13.218 7.90759C13.4097 8.28392 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.9991M18.9991 9H19.0002" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function Play(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path class={props.class} id="Vector" d="M5 17.3336V6.66698C5 5.78742 5 5.34715 5.18509 5.08691C5.34664 4.85977 5.59564 4.71064 5.87207 4.67499C6.18868 4.63415 6.57701 4.84126 7.35254 5.25487L17.3525 10.5882L17.3562 10.5898C18.2132 11.0469 18.642 11.2756 18.7826 11.5803C18.9053 11.8462 18.9053 12.1531 18.7826 12.4189C18.6418 12.7241 18.212 12.9537 17.3525 13.4121L7.35254 18.7454C6.57645 19.1593 6.1888 19.3657 5.87207 19.3248C5.59564 19.2891 5.34664 19.1401 5.18509 18.9129C5 18.6527 5 18.2132 5 17.3336Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function Pause(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path class={props.class} d="M15 5.5V18.5C15 18.9647 15 19.197 15.0384 19.3902C15.1962 20.1836 15.816 20.8041 16.6094 20.9619C16.8026 21.0003 17.0349 21.0003 17.4996 21.0003C17.9642 21.0003 18.1974 21.0003 18.3906 20.9619C19.184 20.8041 19.8041 20.1836 19.9619 19.3902C20 19.1987 20 18.9687 20 18.5122V5.48777C20 5.03125 20 4.80087 19.9619 4.60938C19.8041 3.81599 19.1836 3.19624 18.3902 3.03843C18.197 3 17.9647 3 17.5 3C17.0353 3 16.8026 3 16.6094 3.03843C15.816 3.19624 15.1962 3.81599 15.0384 4.60938C15 4.80257 15 5.03534 15 5.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path class={props.class} d="M4 5.5V18.5C4 18.9647 4 19.197 4.03843 19.3902C4.19624 20.1836 4.81599 20.8041 5.60938 20.9619C5.80257 21.0003 6.0349 21.0003 6.49956 21.0003C6.96421 21.0003 7.19743 21.0003 7.39062 20.9619C8.18401 20.8041 8.8041 20.1836 8.96191 19.3902C9 19.1987 9 18.9687 9 18.5122V5.48777C9 5.03125 9 4.80087 8.96191 4.60938C8.8041 3.81599 8.18356 3.19624 7.39018 3.03843C7.19698 3 6.96465 3 6.5 3C6.03535 3 5.80257 3 5.60938 3.03843C4.81599 3.19624 4.19624 3.81599 4.03843 4.60938C4 4.80257 4 5.03534 4 5.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function Live(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path class={props.class} id="Vector" d="M3 8.2502V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8031C21 16.921 21 17.48 20.7822 17.9074C20.5905 18.2837 20.2839 18.5905 19.9076 18.7822C19.4802 19 18.921 19 17.8031 19H14M5 19C5 17.8954 4.10457 17 3 17M8 19C8 16.2386 5.76142 14 3 14M11 19C11 14.5817 7.41828 11 3 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function Stop(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path class={props.class} id="Vector" d="M17.8506 11.5442C17.0475 10.6829 16.0641 10.0096 14.9707 9.57227M20.7759 8.81625C19.5712 7.52437 18.0961 6.51439 16.4561 5.8584C14.816 5.20241 13.0514 4.91635 11.2881 5.02111M8.34277 14.5905C8.95571 13.9332 9.73448 13.4532 10.5971 13.2012C11.4598 12.9491 12.3745 12.9335 13.2449 13.1574M6.14941 11.5438C7.09778 10.5268 8.29486 9.77461 9.62259 9.36133M3.22363 8.81604C4.1215 7.85319 5.17169 7.04466 6.33211 6.42285M4.41406 4L18.5562 18.1421M12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}



export function User(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path class={props.class} id="Vector" d="M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

            </g>
        </svg>
    )
}

export function World(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path class={props.class} id="Vector" d="M3 12H8M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M8 12H16M8 12C8 16.9706 9.79086 21 12 21M8 12C8 7.02944 9.79086 3 12 3M16 12H21M16 12C16 7.02944 14.2091 3 12 3M16 12C16 16.9706 14.2091 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 16.9706 16.9706 21 12 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function UploadCloud(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="File / Cloud_Upload">
                <path class={props.class} id="Vector" d="M12 16V10M12 10L9 12M12 10L15 12M23 15C23 12.7909 21.2091 11 19 11C18.9764 11 18.9532 11.0002 18.9297 11.0006C18.4447 7.60802 15.5267 5 12 5C9.20335 5 6.79019 6.64004 5.66895 9.01082C3.06206 9.18144 1 11.3498 1 13.9999C1 16.7613 3.23858 19.0001 6 19.0001L19 19C21.2091 19 23 17.2091 23 15Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function Upload(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="File / File_Upload">
                <path class={props.class} id="Vector" d="M12 18V12M12 12L9 14M12 12L15 14M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M13 3.00087V5.8C13 6.9201 13 7.47977 13.218 7.90759C13.4097 8.28392 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.9991M18.9991 9H19.0002" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function Settings(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="Interface / Settings">
                <g id="Vector">
                    <path class={props.class} d="M20.3499 8.92293L19.9837 8.7192C19.9269 8.68756 19.8989 8.67169 19.8714 8.65524C19.5983 8.49165 19.3682 8.26564 19.2002 7.99523C19.1833 7.96802 19.1674 7.93949 19.1348 7.8831C19.1023 7.82677 19.0858 7.79823 19.0706 7.76998C18.92 7.48866 18.8385 7.17515 18.8336 6.85606C18.8331 6.82398 18.8332 6.79121 18.8343 6.72604L18.8415 6.30078C18.8529 5.62025 18.8587 5.27894 18.763 4.97262C18.6781 4.70053 18.536 4.44993 18.3462 4.23725C18.1317 3.99685 17.8347 3.82534 17.2402 3.48276L16.7464 3.1982C16.1536 2.85658 15.8571 2.68571 15.5423 2.62057C15.2639 2.56294 14.9765 2.56561 14.6991 2.62789C14.3859 2.69819 14.0931 2.87351 13.5079 3.22396L13.5045 3.22555L13.1507 3.43741C13.0948 3.47091 13.0665 3.48779 13.0384 3.50338C12.7601 3.6581 12.4495 3.74365 12.1312 3.75387C12.0992 3.7549 12.0665 3.7549 12.0013 3.7549C11.9365 3.7549 11.9024 3.7549 11.8704 3.75387C11.5515 3.74361 11.2402 3.65759 10.9615 3.50224C10.9334 3.48658 10.9056 3.46956 10.8496 3.4359L10.4935 3.22213C9.90422 2.86836 9.60915 2.69121 9.29427 2.62057C9.0157 2.55807 8.72737 2.55634 8.44791 2.61471C8.13236 2.68062 7.83577 2.85276 7.24258 3.19703L7.23994 3.1982L6.75228 3.48124L6.74688 3.48454C6.15904 3.82572 5.86441 3.99672 5.6517 4.23614C5.46294 4.4486 5.32185 4.69881 5.2374 4.97018C5.14194 5.27691 5.14703 5.61896 5.15853 6.3027L5.16568 6.72736C5.16676 6.79166 5.16864 6.82362 5.16817 6.85525C5.16343 7.17499 5.08086 7.48914 4.92974 7.77096C4.9148 7.79883 4.8987 7.8267 4.86654 7.88237C4.83436 7.93809 4.81877 7.96579 4.80209 7.99268C4.63336 8.26452 4.40214 8.49186 4.12733 8.65572C4.10015 8.67193 4.0715 8.68752 4.01521 8.71871L3.65365 8.91908C3.05208 9.25245 2.75137 9.41928 2.53256 9.65669C2.33898 9.86672 2.19275 10.1158 2.10349 10.3872C2.00259 10.6939 2.00267 11.0378 2.00424 11.7255L2.00551 12.2877C2.00706 12.9708 2.00919 13.3122 2.11032 13.6168C2.19979 13.8863 2.34495 14.134 2.53744 14.3427C2.75502 14.5787 3.05274 14.7445 3.64974 15.0766L4.00808 15.276C4.06907 15.3099 4.09976 15.3266 4.12917 15.3444C4.40148 15.5083 4.63089 15.735 4.79818 16.0053C4.81625 16.0345 4.8336 16.0648 4.8683 16.1255C4.90256 16.1853 4.92009 16.2152 4.93594 16.2452C5.08261 16.5229 5.16114 16.8315 5.16649 17.1455C5.16707 17.1794 5.16658 17.2137 5.16541 17.2827L5.15853 17.6902C5.14695 18.3763 5.1419 18.7197 5.23792 19.0273C5.32287 19.2994 5.46484 19.55 5.65463 19.7627C5.86915 20.0031 6.16655 20.1745 6.76107 20.5171L7.25478 20.8015C7.84763 21.1432 8.14395 21.3138 8.45869 21.379C8.73714 21.4366 9.02464 21.4344 9.30209 21.3721C9.61567 21.3017 9.90948 21.1258 10.4964 20.7743L10.8502 20.5625C10.9062 20.5289 10.9346 20.5121 10.9626 20.4965C11.2409 20.3418 11.5512 20.2558 11.8695 20.2456C11.9015 20.2446 11.9342 20.2446 11.9994 20.2446C12.0648 20.2446 12.0974 20.2446 12.1295 20.2456C12.4484 20.2559 12.7607 20.3422 13.0394 20.4975C13.0639 20.5112 13.0885 20.526 13.1316 20.5519L13.5078 20.7777C14.0971 21.1315 14.3916 21.3081 14.7065 21.3788C14.985 21.4413 15.2736 21.4438 15.5531 21.3855C15.8685 21.3196 16.1657 21.1471 16.7586 20.803L17.2536 20.5157C17.8418 20.1743 18.1367 20.0031 18.3495 19.7636C18.5383 19.5512 18.6796 19.3011 18.764 19.0297C18.8588 18.7252 18.8531 18.3858 18.8417 17.7119L18.8343 17.2724C18.8332 17.2081 18.8331 17.1761 18.8336 17.1445C18.8383 16.8247 18.9195 16.5104 19.0706 16.2286C19.0856 16.2007 19.1018 16.1726 19.1338 16.1171C19.166 16.0615 19.1827 16.0337 19.1994 16.0068C19.3681 15.7349 19.5995 15.5074 19.8744 15.3435C19.9012 15.3275 19.9289 15.3122 19.9838 15.2818L19.9857 15.2809L20.3472 15.0805C20.9488 14.7472 21.2501 14.5801 21.4689 14.3427C21.6625 14.1327 21.8085 13.8839 21.8978 13.6126C21.9981 13.3077 21.9973 12.9658 21.9958 12.2861L21.9945 11.7119C21.9929 11.0287 21.9921 10.6874 21.891 10.3828C21.8015 10.1133 21.6555 9.86561 21.463 9.65685C21.2457 9.42111 20.9475 9.25526 20.3517 8.92378L20.3499 8.92293Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path class={props.class} d="M8.00033 12C8.00033 14.2091 9.79119 16 12.0003 16C14.2095 16 16.0003 14.2091 16.0003 12C16.0003 9.79082 14.2095 7.99996 12.0003 7.99996C9.79119 7.99996 8.00033 9.79082 8.00033 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </g>
        </svg>
    )
}

export function Pencil(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class={props.class} d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7Z" stroke-width="2" />
            <path class={props.class} d="M16.2739 11.1377C16.6644 10.7472 16.6644 10.114 16.2739 9.7235L14.4823 7.9319C14.0918 7.54137 13.4586 7.54138 13.0681 7.9319L8.96106 12.0389L8.34768 15.7477C8.3365 15.8154 8.39516 15.874 8.4628 15.8627L12.1669 15.2448L16.2739 11.1377Z" stroke-width="2" />
        </svg>
    )
}

export function Undo(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="Edit / Undo">
                <path class={props.class} id="Vector" d="M10 8H5V3M5.29102 16.3569C6.22284 17.7918 7.59014 18.8902 9.19218 19.4907C10.7942 20.0913 12.547 20.1624 14.1925 19.6937C15.8379 19.225 17.2893 18.2413 18.3344 16.8867C19.3795 15.5321 19.963 13.878 19.9989 12.1675C20.0347 10.4569 19.5211 8.78001 18.5337 7.38281C17.5462 5.98561 16.1366 4.942 14.5122 4.40479C12.8878 3.86757 11.1341 3.86499 9.5083 4.39795C7.88252 4.93091 6.47059 5.97095 5.47949 7.36556" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>

    )
}

export function Redo(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="Edit / Redo">
                <path class={props.class} id="Vector" d="M13.9998 8H18.9998V3M18.7091 16.3569C17.7772 17.7918 16.4099 18.8902 14.8079 19.4907C13.2059 20.0913 11.4534 20.1624 9.80791 19.6937C8.16246 19.225 6.71091 18.2413 5.66582 16.8867C4.62073 15.5321 4.03759 13.878 4.00176 12.1675C3.96593 10.4569 4.47903 8.78001 5.46648 7.38281C6.45392 5.98561 7.86334 4.942 9.48772 4.40479C11.1121 3.86757 12.8661 3.86499 14.4919 4.39795C16.1177 4.93091 17.5298 5.97095 18.5209 7.36556" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>

    )
}

export function English(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
            <path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></path>
            <path fill="#CE1124" d="M21 5h-6v10H0v6h15v10h6V21h15v-6H21z"></path>
        </svg>

    )
}

export function Chinese(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
            <path fill="#DE2910" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path>
            <path fill="#FFDE02" d="M11.136 8.977l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zm4.665 2.941l-.356.735l.566.59l-.809-.112l-.386.721l-.144-.805l-.805-.144l.721-.386l-.112-.809l.59.566zm-.957 3.779l.268.772l.817.017l-.651.493l.237.783l-.671-.467l-.671.467l.236-.783l-.651-.493l.817-.017zm-3.708 3.28l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zM7 10.951l.929 2.671l2.826.058l-2.253 1.708l.819 2.706L7 16.479l-2.321 1.615l.819-2.706l-2.253-1.708l2.826-.058z"></path>
        </svg>

    )
}

export function German(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
            <path fill="#FFCD05" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z"></path>
            <path fill="#ED1F24" d="M0 14h36v9H0z"></path>
            <path fill="#141414" d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4z"></path>
        </svg>

    )
}

export function French(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
            <path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path>
            <path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path>
            <path fill="#EEE" d="M12 5h12v26H12z"></path>
        </svg>

    )
}

export function Spanish(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
            <path fill="#C60A1D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path>
            <path fill="#FFC400" d="M0 12h36v12H0z"></path><path fill="#EA596E" d="M9 17v3a3 3 0 1 0 6 0v-3H9z"></path>
            <path fill="#F4A2B2" d="M12 16h3v3h-3z"></path><path fill="#DD2E44" d="M9 16h3v3H9z"></path>
            <ellipse fill="#EA596E" cx="12" cy="14.5" rx="3" ry="1.5"></ellipse>
            <ellipse fill="#FFAC33" cx="12" cy="13.75" rx="3" ry=".75"></ellipse>
            <path fill="#99AAB5" d="M7 16h1v7H7zm9 0h1v7h-1z"></path>
            <path fill="#66757F" d="M6 22h3v1H6zm9 0h3v1h-3zm-8-7h1v1H7zm9 0h1v1h-1z"></path>
        </svg>

    )
}

export function Italian(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
            <path fill="#CE2B37" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path>
            <path fill="#009246" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path>
            <path fill="#EEE" d="M12 5h12v26H12z"></path>
        </svg>

    )
}


export function Sun(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
            <path class={props.class} id="Vector" d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export function Moon(props: { width: number, height: number, class?: string }) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
            <path class={props.class} id="Vector" d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}