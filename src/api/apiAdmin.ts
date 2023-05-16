import { Token, query } from "./apiSignIn"
import { Feature,  fetchT, tk } from "./apiToken"

export interface FeaturesAndUsers {
    allFeatures: Feature[]
    users: User[]
}
export interface User {
    email: string
    admin?: boolean
    features?: Feature[]
}

export function fetchFeaturesAndUsers(token: Token) {
    return fetchT<FeaturesAndUsers>(`${token.server}/api/featuresAndUsers`, token.token)
}

export function inviteUser(token: Token, email: string) {
    return fetch(`${token.server}/api/inviteUser${query({ email })}`, {
        ...tk(token.token),
        method: 'PUT'
    })
}

export function setUserFeatures(token: Token, email: string, features: string) {
    return fetch(`${token.server}/api/setUserFeatures${query({ email, features })}`, {
        ...tk(token.token),
        method: 'PUT'
    })
}
