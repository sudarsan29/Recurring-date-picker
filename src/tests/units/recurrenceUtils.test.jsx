/* eslint-env vitest */
import { describe, it, expect } from 'vitest'
import dayjs from 'dayjs'

describe('Recurring Date Logic', () => {
  it('should generate daily recurring dates with interval', () => {
    const start = dayjs('2025-07-20')
    const interval = 2
    const count = 5

    const result = []
    for (let i = 0; i < count; i++) {
      result.push(start.add(i * interval, 'day').format('YYYY-MM-DD'))
    }

    expect(result).toEqual([
      '2025-07-20',
      '2025-07-22',
      '2025-07-24',
      '2025-07-26',
      '2025-07-28',
    ])
  })
})
