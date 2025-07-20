import React from 'react'
import useRecurringStore from '../hooks/RecurringStore'

const DateRangeSelector = () => {
  const startDate = useRecurringStore((state) => state.startDate)
  const endDate = useRecurringStore((state) => state.endDate)
  const setStartDate = useRecurringStore((state) => state.setStartDate)
  const setEndDate = useRecurringStore((state) => state.setEndDate)

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
      <input
        type="date"
        value={startDate || ''}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block text-sm font-medium text-gray-700 mb-1">End Date (optional)</label>
      <input
        type="date"
        value={endDate || ''}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default DateRangeSelector
