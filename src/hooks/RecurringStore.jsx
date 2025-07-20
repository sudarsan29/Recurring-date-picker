import { create } from "zustand";

const useRecurringStore = create((set) => ({
  repeatOption: "Does not repeat",
  startDate: null,
  endDate: null,
  customRule: "",
  selectedWeekdays: [],
  selectedMonthDays: [],
  frequency: 'daily',
  
  setFrequency: (val) => set({ frequency: val }),
  setRepeatOption: (option) => set({ repeatOption: option }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setCustomRule: (rule) => set({ customRule: rule }),
  setSelectedWeekdays: (days) => set({ selectedWeekdays: days }),
  setSelectedMonthDays: (days) => set({ selectedMonthDays: days }),
}));

export default useRecurringStore;
