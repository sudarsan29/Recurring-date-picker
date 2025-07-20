import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import useRecurringStore from '../hooks/RecurringStore'

const CalendarPreview = () => {
  const {
    frequency,
    interval,
    startDate,
    endDate,
    weekdays,
    monthlyPattern,
  } = useRecurringStore()

  const [generatedDates, setGeneratedDates] = useState([])

  useEffect(() => {
    if (!startDate) return

    const start = dayjs(startDate)
    const end = endDate ? dayjs(endDate) : start.add(3, 'month') // preview 3 months if no end date
    const result = []

    let current = start

    while (current.isBefore(end) || current.isSame(end, 'day')) {
      switch (frequency) {
        case 'daily':
          result.push(current)
          current = current.add(interval, 'day')
          break

        case 'weekly':
          weekdays.forEach((day) => {
            const weekdayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day)
            const next = current.day(weekdayIndex)
            if (next.isAfter(current)) result.push(next)
            else result.push(next.add(7 * interval, 'day'))
          })
          current = current.add(interval, 'week')
          break

        case 'monthly':
          if (monthlyPattern.week && monthlyPattern.day) {
            const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(monthlyPattern.day)
            const month = current.month()
            const year = current.year()

            let firstDayOfMonth = dayjs(new Date(year, month, 1))
            let count = 0
            let found = null

            for (let i = 0; i < 31; i++) {
              const d = firstDayOfMonth.add(i, 'day')
              if (d.month() !== month) break
              if (d.day() === dayIndex) {
                count++
                if (count === monthlyPattern.week) {
                  found = d
                  break
                }
              }
            }

            if (monthlyPattern.week === -1) {
              // Last weekday of month
              for (let i = 31; i >= 0; i--) {
                const d = dayjs(new Date(year, month, i))
                if (d.isValid() && d.day() === dayIndex) {
                  found = d
                  break
                }
              }
            }

            if (found && found.isValid()) {
              result.push(found)
            }
          } else {
            result.push(current)
          }
          current = current.add(interval, 'month')
          break

        case 'yearly':
          result.push(current)
          current = current.add(interval, 'year')
          break

        default:
          current = current.add(1, 'day')
          break
      }
    }

    // Sort and remove duplicates
    const uniqueSorted = [...new Set(result.map((d) => d.format('YYYY-MM-DD')))].sort()

    setGeneratedDates(uniqueSorted)
  }, [frequency, interval, startDate, endDate, weekdays, monthlyPattern])

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Preview Dates</h3>
      {generatedDates.length === 0 ? (
        <p className="text-sm text-gray-500">No dates to preview. Select options above.</p>
      ) : (
        <ul className="text-sm text-gray-800 list-disc list-inside space-y-1 max-h-40 overflow-auto border p-2 rounded-md bg-gray-50">
          {generatedDates.map((date, idx) => (
            <li key={idx}>{dayjs(date).format('dddd, MMMM D, YYYY')}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CalendarPreview
