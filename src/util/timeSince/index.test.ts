import { describe, expect, it } from 'vitest'
import timeSince from '.'

describe('timeSince', () => {
  it('should calculate time label before 2 minutes', () => {
    const twoMinutes = 120 * 1000
    const before2minLabel = '2 minutes ago'
    const date = Date.now() - twoMinutes
    expect(timeSince(date)).toEqual(before2minLabel)
  })
})
