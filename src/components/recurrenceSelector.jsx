import React from 'react'
import useRecurringStore from '../hooks/RecurringStore'

const RecurrenceSelector = () => {
  const frequency = useRecurringStore((state) => state.frequency)
  const setFrequency = useRecurringStore((state) => state.setFrequency)

  const options = ['daily', 'weekly', 'monthly', 'yearly']

  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Repeat Frequency
      </label>
      <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default RecurrenceSelector
