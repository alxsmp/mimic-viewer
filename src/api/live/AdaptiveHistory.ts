import { Tag } from "./Tag"

export interface AdaptiveHistory {
    id: string
    start: number
    end: number
    elapsedTimes: number[]
    tags: HistoryTag[]
}

export interface HistoryTag extends Tag {
    // elapsedTimes: number[]
    elapsedIndexes: number[]
    values: unknown[]
}

export function fixHistory(history: AdaptiveHistory) {
    history.start = new Date(history.start).valueOf()
    history.end = new Date(history.end).valueOf()
    let prev = 0, prevDelta = 0
    for (let i = 0; i !== history.elapsedTimes.length; i++) {
        const delta = prevDelta + history.elapsedTimes[i]
        prevDelta = delta
        const value = prev + delta
        prev = value
        history.elapsedTimes[i] = value
    }

    for (const tag of history.tags) {
        let prev = 0
        for (let i = 0; i !== tag.elapsedIndexes.length; i++) {
            const value = prev + tag.elapsedIndexes[i]
            prev = value
            tag.elapsedIndexes[i] = value
        }

        if (tag.type === 'number') {
            let prev = 0
            for (let i = 0; i !== tag.values.length; i++) {
                const value = prev + (tag.values[i] as number)
                prev = value
                tag.values[i] = value
            }
        } else if (tag.type === 'boolean') {
            if (tag.values.length) {
                let prev = tag.values[0] as boolean
                for (let i = 1; i !== tag.elapsedIndexes.length; i++) {
                    prev = !prev
                    tag.values[i] = prev
                }
            }
        } else if (tag.name === 'Parent._TimeInSteps') {
            if (tag.values.length) {
                // Go to some lengths to have a compact format
                let prev = (tag.values[0] as number[]).map(x => x === -1 ? undefined : x * 60000)
                // Remove any trailing undefineds to save on memory
                while (prev.length && prev[prev.length - 1] === undefined)
                    prev.pop()

                tag.values[0] = prev

                for (let i = 1; i !== tag.elapsedIndexes.length; i++) {
                    const arr = [...prev]
                    const changes = tag.values[i] as number[][]  // an array of array pairs
                    for (const change of changes) {
                        const x = arr[change[0]]
                        if (x === undefined)
                            arr[change[0]] = (change[1] - 1) * 60000
                        else
                            arr[change[0]] = x + (change[1] * 60000)
                    }
                    tag.values[i] = arr
                    prev = arr
                }
            }
        }
    }
}
