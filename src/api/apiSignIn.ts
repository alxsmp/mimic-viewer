export async function signUp(server: string, world: string, email: string, name: string, password: string): Promise<Token | null> {
    const response = await fetch(`${server}/api/signUp` + query({ world, email, name, password }), { method: 'PUT' })
    // return response.status === 200 ? response.text() : Promise.reject(response.status)
    if (response.status !== 200)
        return null
    return { server, world, email, name, token: await response.text() }
}
export async function signIn(server: string, email: string, password: string, world?: string ): Promise<Token | null> {
    const response = await fetch(`${server}/api/signIn` + query({ email, password, world }))
    if (response.status !== 200)
        return null
    return { server, world: world ?? '', email, ...await response.json() as { name: string, token: string } }
}

// Makes the server send an email to a user allowing them to reset their password
export async function forgottenPassword(server: string, email: string) {
    return (await fetch(`${server}/api/forgottenPassword` + query({ email }), { method: 'PUT' })).text()
}

// As long as 'k' is valid, updates a user's password
export async function updatePassword(server: string, k: string, newPassword: string) {
    return (await fetch(`${server}/api/updatePassword` + query({ k, newPassword }), { method: 'PUT' })).text()
}

export interface Token {
    server: string
    world: string
    email: string
    name?: string
    token: string
    // superAdmin?: boolean
}

export interface World {
    name: string
    description?: string
    // demo?: boolean
}

export async function fetchWorlds(server: string) {
    return await ((await fetch(`${server}/api/worlds`)).json()) as World[]
}


export function urlWorldImage(server: string, world: string, wide?: boolean) {
    return `${server}/api/worldImage` + query({ world, wide })
}

export function query(options: any | undefined) {
    // // Don't want any undefined's or false's
    // const options2: any = {}
    // if (options) {
    //     const keys = Object.keys(options)
    //         keys.forEach(key => {
    //             const v = options[key]
    //             if (Array.isArray(v))
    //                 v.forEach(w => parts.push(asString(key, w)))
    //             else if (v !== undefined && v !== false)
    //                 parts.push(asString(key, v))
    //         })
    // }

    // const ret = new URLSearchParams(options).toString()
    // return ret ? '?' + ret : ''
    //     console.log(new URLSearchParams({"Plc 1異常": 12} as any).toString())
    // //    console.log(new URLSearchParams(options).toString())
    const parts: string[] = []
    if (options) {
        const keys = Object.keys(options)
        if (keys.length !== 0) {
            keys.forEach(key => {
                const v = options[key]
                if (Array.isArray(v))
                    v.forEach(w => parts.push(asString(key, w)))
                else if (v !== undefined && v !== false)
                    parts.push(asString(key, v))
            })
        }
    }
    return parts.length !== 0 ? '?' + parts.join('&') : ''
}

function iso(v: Date) {
    // no milliseconds
    return v.toISOString().substring(0, 19) + 'Z'
}

function asString(key: any, v: any) {
    return key + '=' + encodeURIComponent((v instanceof Date ? iso(v) : v.toString()))
}
