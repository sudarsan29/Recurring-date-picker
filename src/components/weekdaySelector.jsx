import React from 'react'
import useRecurringStore from '../hooks/RecurringStore'

const weekdaysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const WeekdaySelector = () => {
  const frequency = useRecurringStore((state) => state.frequency)
  const selectedWeekdays = useRecurringStore((state) => state.weekdays)
  const toggleWeekday = useRecurringStore((state) => state.toggleWeekday)

  // Only show for weekly frequency
  if (frequency !== 'weekly') return null

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Select Days of the Week
      </label>
      <div className="flex flex-wrap gap-2">
        {weekdaysList.map((day) => {
          const isSelected = selectedWeekdays.includes(day)

          return (
            <button
              key={day}
              type="button"
              onClick={() => toggleWeekday(day)}
              className={`px-3 py-1 rounded-md text-sm border ${
                isSelected
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-800 border-gray-300'
              } hover:shadow transition`}
            >
              {day.slice(0, 3)}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default WeekdaySelector
