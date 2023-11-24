import { describe, expect, it } from 'vitest'
import { Signal } from '@preact/signals'
import { signalSetter } from '.'

describe('signalSetter', () => {
  it('should set value in a signal successfully', () => {
    const testSignal = new Signal()
    const setTestSignal = signalSetter(testSignal)
    const vl = 'test'
    setTestSignal(vl)
    expect(testSignal.value).toEqual(vl)
  })
})
