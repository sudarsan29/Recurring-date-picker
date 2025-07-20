import React from 'react'
import RecurrenceSelector from './components/recurrenceSelector'
import CustomRuleInput from './components/customInput'
import WeekSelector from './components/weekdaySelector'
import DateSelector from './components/dateSelector'
import MonthlySelector from './components/monthlySelector'
import CalenderPreview from './components/calenderPreview'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white p-4 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Recurring Date Picker
        </h1>
        <RecurrenceSelector />
        <CustomRuleInput />
        <WeekSelector />
        <DateSelector />
        <MonthlySelector />
        <CalenderPreview />
      </div>
    </div>
  )
}

export default App
