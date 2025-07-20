# React + Vite

# 📅 Recurring Date Picker Component

A flexible and reusable Recurring Date Picker component inspired by platforms like **TickTick**. Built using React, Vite, and Tailwind CSS, with state management via Zustand. Users can easily configure recurring dates based on frequency, intervals, and date ranges with real-time preview.

## 🚀 Tech Stack

-  **React** – Component-based UI
- **Vite** – Superfast development tooling
-  **Tailwind CSS** – Utility-first styling
-  **Zustand** – Lightweight state management
-  **Day.js** – Date manipulation

## 🎯 Features

-  **Repeat Frequency**: Daily, Weekly, Monthly, Yearly
-  **Custom Interval**: Repeat every X days/weeks/months
-  **Start & End Dates**: Select custom range
-  **Live Preview**: View all generated recurring dates instantly
-  **Reusable Component**: Easily integrate into other apps

## ⚙️ Getting Started

### 1. Clone the Repository

git clone https://github.com/sudarsan29/recurring-date-picker.git
cd recurring-date-picker

## Install Dependencies
npm install

## Start the Development Server
npm run dev
App runs at http://localhost:5173

## State Management
Using Zustand for clean and efficient global state:

const useRecurringStore = create((set) => ({
  frequency: 'daily',
  interval: 1,
  ...
}));

## Vercel-Live: https://recurring-date-picker-nu.vercel.app/

## 🙋‍♂️ Author
Sudharshan M.
Frontend Developer | MERN Stack Enthusiast
LinkedIn: https://www.linkedin.com/in/sudharshan-malyavantam/
GitHub: https://github.com/sudarsan29?tab=repositories
Vercel: https://vercel.com/sudarsans-projects-b49c7388
