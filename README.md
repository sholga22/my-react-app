# React Schedule Manager

This is a web application built with React + TypeScript to manage lesson schedules between teachers and students. It supports:

- adding teachers, students, and subjects via configurable forms;
- creating one or multiple lessons based on selected weekdays;
- integration with [Make.com](https://www.make.com/) (via Webhook);
- visualizing the schedule using [FullCalendar](https://fullcalendar.io/);
- storing data using `json-server` (local mock API).

## Technologies

- React 18
- TypeScript
- React Hook Form
- React Router v6
- FullCalendar
- json-server
- Make.com

###  Installation & Running

### 1. Clone the repository

git clone https://github.com/your-username/react-schedule-manager.git
cd react-schedule-manager

### 2. Install dependencies
npm install

### 3. Run JSON server
npx json-server --watch db.json --port 3001
node server.js
### 4. Run React app
npm run dev

####  Project Structure

src/  
├── components/        # Shared components (Layout, forms, etc.)  
├── hooks/             # Custom hooks (e.g. useSendToMake)  
├── pages/             # Pages (Home, Schedule, About)  
├── config/            # Form configuration (teachers, students, etc.)  
├── router.tsx         # Route configuration  
└── main.tsx           # Application entry point  
