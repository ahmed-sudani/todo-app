import { Signal } from '@preact/signals'

export const signalSetter = (signal: Signal) => (vl: unknown) => (signal.value = vl)
