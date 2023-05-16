import { Token } from '../apiSignIn'
import { fetchBlob as fetchBlob0, fetchT as fetchT0, putTStringify as putTStringify0, url8 } from '../apiToken'
import { LiveMachines, ScreenButton, ProgramGroup, RunningProfile, HistoryOptions, ScheduledJob } from './apiLiveData'
import { AdaptiveHistory, fixHistory } from './AdaptiveHistory'
import { Tag } from './Tag'

export interface TokenAndMachine {
    token: Token
    machine: string
    // name?: string
}

export interface TokenAndMachines {
    token: Token
    machines: string[]
}

export interface DataPerMachine<T> {
    [machine: string]: T
}

export interface TagAndValue {
    tag: string
    value: unknown
}

export function endPointName(token: Token, machine: string) {
    const s = machine
    const f = s.lastIndexOf('.')
    return f === -1 ? s : s.substring(f + 1)
    // return tokenAndMachine.name ?? tokenAndMachine.tag ?? tokenAndMachine.token.server
}

function url0(server: string, path: string) {
    return url8(server, 'live', path)
}

function fetchT<T>(token: Token, path: string, query?: any) {
    return fetchT0<T>(url0(token.server, path), token.token, { ...query })
}

function fetchBlob(token: Token, path: string, query?: any) {
    return fetchBlob0(url0(token.server, path), token.token, { ...query })
}

function putTStringify<T>(token: Token, path: string, body: any, query?: any) {
    return putTStringify0<T>(url0(token.server, path), token.token, body, { ...query })
}

// function plus(values: string[]) {
//     return values.length !== 0 ? values.join("+") : undefined
// }

function fetchTM<T>(token: Token, machines: string[], path: string, query?: any) {
    return fetchT<T>(token, path, { ...query, m: machines })
}

function fetchTL<T>(token: Token, machine: string, path: string, query?: any) {
    return fetchT<T>(token, path, { ...query, m: machine })
}

function fetchBlobL(token: Token, machine: string, path: string, query?: any) {
    return fetchBlob(token, path, { ...query, m: machine })
}

function putTMStringify<T>(token: Token, machines: string[], path: string, body: any, query?: any) {
    return putTStringify<T>(token, path, body, { ...query, m: machines })
}

function putTLStringify<T>(token: Token, machine: string, path: string, body: any, query?: any) {
    return putTStringify<T>(token, path, body, { ...query, m: machine })
}

export function fetchLiveMachines(token: Token) {
    return fetchT<LiveMachines>(token, 'liveMachines')
}

// TODO: if an enum value, then the 'any' would be { value: number, text: string }>
export function fetchTagValuesMultiple(token: Token, machines: string[], tags: string[]) {
    const joinedTagNames = tags.join('&q=')
    return joinedTagNames.length <= 300 ?
        fetchTM<DataPerMachine<any[]>>(token, machines, 'tagValues', { q: tags }) :
        putTMStringify<DataPerMachine<any[]>>(token, machines, 'tagValues', tags)
}

export function fetchTagValues(token: Token, machine: string, tags: string[]) {
    return unPlural(fetchTagValuesMultiple(token, [machine], tags))
}

export function setTagValues(token: Token, machine: string, ...tagAndValues: TagAndValue[]) {
    return putTStringify(token, 'setTagValues', tagAndValues, { m: machine })
}

// export function fetchJob(token: Token, options: {
//     id: unknown
// }) {
//     return fetchT<ScheduledJob>(token, 'job', options)
// }

export function insertJob(token: Token, machine: string, inserts: unknown | unknown[]) {
    return putTLStringify(token, machine, 'insertJob', inserts)
}

export function updateJob(token: Token, machine: string, updates: unknown | unknown[]) {
    return putTLStringify(token, machine, 'updateJob', updates)
}

export function deleteJob(token: Token, machine: string, ids: unknown | unknown[]) {
    return putTLStringify(token, machine, 'deleteJob', ids)
}

export function fetchTagsMultiple(token: Token, machines: string[]) {
    return fetchTM<DataPerMachine<Tag[]>>(token, machines, 'tags')
}

export function fetchTags(token: Token, machine: string) {
    return unPlural(fetchTagsMultiple(token, [machine]))
}


export function fetchScreenButtonsMultiple(token: Token, machines: string[]) {
    return fetchTM<DataPerMachine<ScreenButton[]>>(token, machines, 'screenButtons')
}

export function fetchProgramsMultiple(token: Token, machines: string[], options: {
    group?: string | string[],
    onlyStepCounts?: boolean
} = {}) {
    // if (q.length !== 0)
    //     url += '?' + q.map(x => x.split('&').join('%26')).join('&')
    return fetchTM<DataPerMachine<ProgramGroup[]>>(token, machines, 'programs', options)
}

export function fetchPrograms(token: Token, machine: string, options: {
    group?: string | string[],
    onlyStepCounts?: boolean
} = {}) {
    return unPlural(fetchProgramsMultiple(token, [machine], options))
}


export async function fetchJobsMultiple(token: Token, machines: string[]) {
    const ret = await fetchTM<DataPerMachine<ScheduledJob[]>>(token, machines, 'jobs')
    Object.values(ret).forEach(mv => mv.forEach(x => {
        x.start = new Date(x.start as any).valueOf()
        x.end = new Date(x.end as any).valueOf()
    }))
    return ret
}

export function fetchJobs(token: Token, machine: string) {
    return unPlural(fetchJobsMultiple(token, [machine]))
}

export function fetchMessagesMultiple(token: Token, machines: string[]) {
    return fetchTM<DataPerMachine<string[]>>(token, machines, 'messages')
}

export function fetchMessages(token: Token, machine: string) {
    return unPlural(fetchMessagesMultiple(token, [machine]))
}


export async function unPlural<T>(promise: Promise<DataPerMachine<T>>) {
    return Object.values(await promise)[0] as T  // TODO: no - what about null ?
}

export function fetchScreenButtons(token: Token, machine: string) {
    return unPlural(fetchScreenButtonsMultiple(token, [machine]))
}


export function fetchTheoreticals(token: Token, machines: string[]) {
    return fetchTM<DataPerMachine<RunningProfile | null>>(token, machines, 'theoreticals')
}


export async function fetchHistoryMultiple(token: Token, machines: string[], options?: HistoryOptions) {
    // const queries: string[] = []
    function date(value: number | Date | undefined) {
        if (value !== undefined) {
            let s: string
            if (typeof value === 'number')
                s = value.toString()
            else {
                s = value.toISOString()
             //   s = s.substring(0, s.length - 5) + 'Z'  // remove the milliseconds
            }
            return s
            // queries.push('start=' + s)
        }
    }

    const query = {
        ...options,
        start: date(options?.start),
        end: date(options?.end),
        valuesOnlyId: options?.valuesOnlyId
    }

    const ret = await fetchTM<DataPerMachine<AdaptiveHistory | null>>(token, machines, 'history', query)
    Object.values(ret).forEach(history => {
        if (history)
            fixHistory(history)
    })
    return ret
}

export function fetchHistory(token: Token, machine: string, options?: HistoryOptions) {
    return unPlural(fetchHistoryMultiple(token, [machine], options))
}

// Get additions to an existing history if possible, or gets a new one
export async function fetchHistory2(token: Token, machine: string, current: AdaptiveHistory | null | undefined,
    options?: Omit<HistoryOptions, 'start' | 'end' | 'valuesOnlyId'>) {

    const hNew = await fetchHistory(token, machine,
        current ?
            { start: new Date(current.end), valuesOnlyId: current.id, ...options } :
            options
    )
    return addHistoryChanges(current, hNew)
}

function addHistoryChanges(current: AdaptiveHistory | null | undefined, hNew: AdaptiveHistory | null) {
    if (!current || hNew === null || hNew.id !== current.id)
        return hNew
    if (current.end === hNew.end)
        return current   // no change to existing history

    // Add some data
    current.elapsedTimes.push(...hNew.elapsedTimes)
    const tags0 = current.tags
    hNew.tags.forEach(tag => {
        const name = tag.name
        const t1 = tags0.find(t => t.name === name)
        if (t1) { // should always be there...
            // TODO: should check we are not adding duplicate elapsed-times...
            t1.elapsedIndexes.push(...tag.elapsedIndexes)
            t1.values.push(...tag.values)
        }
    })
    return { ...current, end: hNew.end } // make it look different - TODO: is this best for Solid? 
}


export function urlHistoryAsFile(token: Token, machine: string) {
    return url0(token.server, 'h.hst')
}

export async function fetchHistoryPdf(token: Token, machine: string) {
    return fetchBlobL(token, machine, 'historyPdf')
}


export function fetchScreenMultiple(token: Token, machines: string[], page?: number) {
    return fetchTM<DataPerMachine<string[]>>(token, machines, 'screen', { page })
}

export function fetchScreen(token: Token, machine: string, page?: number) {
    return unPlural(fetchScreenMultiple(token, [machine], page))
}

// async function putRunningCommand(token: Token, machine: string, command: string, body?: string) {
//     return Object.values(await putTL<DataPerTag<RunningSteps>>(tokenAndMachine, command, body))[0]
// }

// export function putStepNumber(token: Token, machine: string, stepNumber: number) {
//     return putRunningCommand(tokenAndMachine, 'stepNumber', stepNumber.toString())
// }

// export function putRunning(token: Token, machine: string, running: Running) {
//     return putRunningCommand(tokenAndMachine, 'running', running.toString())
// }

// export function putBackward(token: Token, machine: string) {
//     return putRunningCommand(tokenAndMachine, 'backward')
// }

// export function putForward(token: Token, machine: string) {
//     return putRunningCommand(tokenAndMachine, 'forward')
// }

// export function putPause(token: Token, machine: string) {
//     return putRunningCommand(tokenAndMachine, 'pause')
// }

// export function putProceed(token: Token, machine: string) {
//     return putRunningCommand(tokenAndMachine, 'proceed')
// }

// export function putStop(token: Token, machine: string) {
//     return putRunningCommand(tokenAndMachine, 'stop')
// }

// export function putYes(token: Token, machine: string) {
//     return putRunningCommand(tokenAndMachine, 'yes')
// }

// export function putNo(token: Token, machine: string) {
//     return putRunningCommand(tokenAndMachine, 'no')
// }
