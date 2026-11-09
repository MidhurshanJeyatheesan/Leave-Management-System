# Leave Management System

A responsive Leave Management System built with React, TypeScript, and Tailwind CSS. This application allows employees to apply for leave, track their requests, and view their remaining leave balances. Managers can review, approve, and reject employee leave requests.

## Features

### Employee Features
- Apply for annual, casual, and medical leave.
- Select leave start and end dates.
- Automatically calculate leave duration.
- Validate leave applications before submission.
- View personal leave requests.
- Track leave balances.

### Manager Features
- View leave requests from all employees.
- Approve or reject pending leave requests.
- Prevent managers from approving or rejecting their own requests.
- Check leave balances before approving requests.
- Apply for personal leave requests.

### General Features
- Dashboard with leave balance cards.
- Separate Dashboard, Apply Leave, My Leave Requests, and Leave History pages.
- Role and employee selection for frontend workflow simulation.
- Leave status tracking: Pending, Approved, and Rejected.
- LocalStorage persistence.
- Responsive user interface.
- Empty-state messages when no leave requests are available.

## Technologies Used

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- React Hooks
- Browser LocalStorage

## Project Structure

src/
├── components/
│   ├── ApplyLeave/
│   ├── Header/
│   ├── LeaveRequestTable/
│   ├── Sidebar/
│   └── StatCard/
│
├── pages/
│   ├── Dashboard.tsx
│   ├── ApplyLeavePage.tsx
│   ├── MyLeaveRequests.tsx
│   └── LeaveHistory.tsx
│
├── types/
│   └── leave.ts
│
├── utils/
│   ├── dateUtils.ts
│   └── leaveUtils.ts
│
├── App.tsx
└── index.css


## Installation and Setup

### Prerequisites
- Node.js
- npm
- Git

### 1. Clone the repository

git clone https://github.com/MidhurshanJeyatheesan/Leave-Management-System.git


### 2. Navigate to the project directory

cd Leave-Management-System


### 3. Install dependencies

npm install


### 4. Start the development server

npm run dev


Open the local URL displayed in your terminal to access the application.

## Available Commands

| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run lint` | Check code quality |
| `npm run preview` | Preview the production build |

## Data Storage

This project uses browser LocalStorage to save leave requests. Data remains available after refreshing the browser, but it is stored locally in the browser rather than in a shared database.

## Role Simulation

The application provides Employee and Manager role selection to demonstrate role-based functionality.

This is a frontend demonstration and does not include real authentication or backend authorization.


## Future Improvements

- Backend API integration.
- Database integration.
- Real employee authentication and authorization.
- Manager and employee account management.
- Email notifications for leave status updates.

---

**Developed as a React.js and TypeScript technical evaluation project.**