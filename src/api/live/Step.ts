export interface Step {
    command?: string
    parameters?: (string | number)[]
    notes?: string
    name?: string  // long name
    text?: string  // formatted form
}

export interface Theoretical {
    elapsed?: number
    extraTime?: number
    totalTime?: number
    valueAfter?: number
}

export interface Prefix {
    program: string
    step: number
    position: number[]
}

export interface PrefixedStep extends Step, Prefix, Theoretical {
}

export interface PrefixedStepTime {
    timeInStepMs?: number
    start?: Date
}

export interface Profile {
    elapsed: number[]
    extraTime?: number[]
    valueAfter: number[]
}

export interface ParentProgram {
    number: string
    name: string
    steps: Step[]
    theoreticals: Profile
}
export interface RunningSteps {
    currentStep: number
    paused: boolean
    changingStep: number
    steps: PrefixedStep[]
    timeInSteps: (number|null)[]
    programs: ParentProgram[]
}

