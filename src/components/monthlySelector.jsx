import React from 'react'
import useRecurringStore from '../hooks/RecurringStore'

const weekOptions = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Last', value: -1 },
]

const dayOptions = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const MonthlyPatternSelector = () => {
  const frequency = useRecurringStore((state) => state.frequency)
  const monthlyPattern = useRecurringStore((state) => state.monthlyPattern)
  const setMonthlyPattern = useRecurringStore((state) => state.setMonthlyPattern)

  if (frequency !== 'monthly') return null

  const handleChange = (key, value) => {
    setMonthlyPattern(
      key === 'week' ? value : monthlyPattern.week,
      key === 'day' ? value : monthlyPattern.day
    )
  }

  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Monthly Pattern (e.g., Second Tuesday)
      </label>
      <div className="flex gap-2">
        <select
          value={monthlyPattern.week || ''}
          onChange={(e) => handleChange('week', Number(e.target.value))}
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Week</option>
          {weekOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <select
          value={monthlyPattern.day || ''}
          onChange={(e) => handleChange('day', e.target.value)}
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Day</option>
          {dayOptions.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default MonthlyPatternSelector
