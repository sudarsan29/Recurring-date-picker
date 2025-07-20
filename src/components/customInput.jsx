import React from 'react'
import useRecurringStore from '../hooks/RecurringStore'

const CustomRuleInput = () => {
  const frequency = useRecurringStore((state) => state.frequency)
  const interval = useRecurringStore((state) => state.interval)
  const setInterval = useRecurringStore((state) => state.setInterval)

  const unitMap = {
    daily: 'day(s)',
    weekly: 'week(s)',
    monthly: 'month(s)',
    yearly: 'year(s)',
  }

  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Repeat every:
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="w-20 px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-700 text-sm">
          {unitMap[frequency] || 'unit(s)'}
        </span>
      </div>
    </div>
  )
}

export default CustomRuleInput
