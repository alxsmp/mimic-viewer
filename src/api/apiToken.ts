import { gzip } from "pako"
import { query } from "./apiSignIn"

async function asJson<T>(value: Response) {
    return value.status === 200 ? value.json().then(v => v as T) : Promise.reject(value.status)
}

async function asBlob(value: Response) {
    return value.status === 200 ? value.blob() : Promise.reject(value.status)
}

export async function fetchBlob(url: string, token: string, query1?: any) {
    return asBlob(await fetch(url + query(query1), tk(token)))
}

export async function fetchT<T = any>(url: string, token: string, query1?: any) {
    // // Automatically performs a PUT instead if the query string would be too long
    // const q = query(query1)
    // if (q.length > 300)
    //     return putT<T>(url, token, query1, undefined)
    // const value = await fetch(url + q, tk(token))

    // console.log(url + query(query1))
    return asJson<T>(await fetch(url + query(query1), tk(token)))
}


export async function putTStringify<T = any>(url: string, token: string, body?: any, query1?: any) {
    let headers = tk(token).headers
    let body2: any
    if (body !== undefined) {
        const stringifiedBody = JSON.stringify(body)
        if (stringifiedBody.length > 2000) {
            body2 = gzip(stringifiedBody)
            headers = { ...headers, 'Content-Encoding': 'gzip' }
        } else
            body2 = stringifiedBody
    }
    return asJson<T>(await fetch(url + query(query1), { method: 'PUT', body: body2, headers }))
}

export async function putT<T = any>(url: string, token: string, body: any, query1?: any) {
    return asJson<T>(await fetch(url + query(query1), { method: 'PUT', body, headers: tk(token).headers }))
}


export function tk(token: string): RequestInit {
    return ({
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export function url8(server: string, api: string, path: string) {
    return `${server}/api/${api}/${path}`
}

//////////////////////////////////////////////////////////////////////////////////
// Need a token for these next ones

export interface WorldFeatures {
    features: Feature[]
    admin?: boolean
}
export interface Feature {
    name: string
    // TODO: and allowed sub-features
}

// Gets the world features for the user implied by the token
export function fetchWorldFeatures(server: string, token: string) {
    return fetchT<WorldFeatures>(`${server}/api/worldFeatures`, token)
}
