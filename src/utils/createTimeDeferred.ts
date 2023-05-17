export function createTimeDeferred<T>(action: (v: T) => void, intervalMs: number, initialValue: T | undefined = undefined): [() => T | undefined, (v: T) => void] {
    let last = initialValue
    let current = last

    setInterval(() => {
        if (current && current !== last) {
            last = current
            action(current)
        }
    }, intervalMs)
    return [() => current, (v: T) => current = v]
}
