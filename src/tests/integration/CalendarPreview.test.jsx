/* eslint-env vitest */
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CalendarPreview from '../../components/calendarPreview'
import React from 'react'

vi.mock('../../hooks/RecurringStore', () => {
  return {
    __esModule: true,
    default: () => ({
      frequency: 'daily',
      interval: 2,
      startDate: '2025-07-20',
      endDate: '2025-07-28',
      weekdays: [],
      monthlyPattern: { week: null, day: null },
      selectedDates: [
        '2025-07-20',
        '2025-07-22',
        '2025-07-24',
        '2025-07-26',
        '2025-07-28',
      ],
    }),
  }
})

describe('CalendarPreview Component', () => {
  it('should render preview list of recurring dates', () => {
    render(<CalendarPreview />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems.length).toBeGreaterThan(0)
  })
})
