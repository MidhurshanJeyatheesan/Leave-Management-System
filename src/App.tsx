import Sidebar from './components/Sidebar/Sidebar';
import type { LeaveRequest, LeaveStatus } from './types/leave';
import { useState,useEffect } from 'react'
import Dashboard from './pages/Dashboard';
import ApplyLeavePage from './pages/ApplyLeavePage';
import { calculateRemainingLeaves as getLeaveBalance } from './utils/leaveUtils';

import {
  LayoutDashboard,
  CalendarDays,
  ClipboardList,
  History
} from 'lucide-react';


const menuItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard
  },
  {
    label: 'Apply Leave',
    icon: CalendarDays
  },
  {
    label: 'My Leave Request',
    icon: ClipboardList
  },
  {
    label: 'Leave History',
    icon: History
  }
];

function App(){
    const [leaveRequests,setLeaveRequests] = useState<LeaveRequest[]>( () => {
         const savedRequests = localStorage.getItem('leaveRequests');
        return savedRequests ? JSON.parse(savedRequests) : [];
     });

    const [activePage,setActivePage] = useState('Dashboard');
    const [currentRole, setCurrentRole] = useState<'Employee' | 'Manager'>('Employee');
    const [currentEmployee, setCurrentEmployee] = useState('John Doe');

    useEffect( () => {
      localStorage.setItem('leaveRequests', JSON.stringify(leaveRequests));
    }, [leaveRequests]);


    const addLeaveRequest = (newRequest : LeaveRequest) =>{
      setLeaveRequests((previousRequests) => [
        ...previousRequests,
        newRequest
      ])
    }

    const updateLeaveStatus = (id: number, status: LeaveStatus) => {

      if (currentRole !== 'Manager') {
           alert('Only managers can update leave request status.');
           return;
      }
      const selectedRequest= leaveRequests.find(
        (request) => request.id === id
      );

      if(!selectedRequest){
        return;
      }

      if( status === 'Approved' ) {
        const remaingBalance = calculateRemainingLeaves(selectedRequest.leaveType, selectedRequest.employeeName);

        if(selectedRequest.days > remaingBalance){
          alert( `cannot approve! only ${remaingBalance} days remaining.`);
          return;
        }
      }

      setLeaveRequests((previousRequests) => 
        previousRequests.map((request) =>
          request.id === id ? { ...request, status } : request
        )
      );
    }

    const calculateRemainingLeaves = (
      leaveType: string,
      employeeName: string = currentEmployee
      ) => {
          return getLeaveBalance(
          leaveRequests,
          leaveType,
          employeeName
          );
    };

    const displayedLeaveRequests =
      currentRole === 'Manager'
        ? leaveRequests
        : leaveRequests.filter(
            (request) => request.employeeName === currentEmployee
        );

    return(
      <div className="flex min-h-screen">

        <Sidebar 
        menuItems={menuItems} 
        onMenuClick={setActivePage}
        />

        <main className="flex-1 bg-slate-100 p-8">

        <div className="mb-6 flex justify-end">
            <select value={currentRole} 
            onChange={(event) => 
              setCurrentRole(event.target.value as 'Employee' | 'Manager')
            }
              className="border rounded-lg p-2 bg-white"
            >
                <option value="Employee">Employee</option>
                <option value="Manager">Manager</option>
            </select>

            <select value={currentEmployee}
                onChange={(event) => setCurrentEmployee(event.target.value)}
                className="border rounded-lg p-2 bg-white"
            >
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
            </select>

        </div> 

        {activePage === 'Dashboard' && (
          <Dashboard
              leaveRequests={displayedLeaveRequests}
              onUpdateStatus={updateLeaveStatus}
              currentRole={currentRole}
              calculateRemainingLeaves={calculateRemainingLeaves}
          />
        )}

        {activePage === 'Apply Leave' && (
          <ApplyLeavePage
              onAddLeaveRequest={addLeaveRequest}
              getRemainingBalance={calculateRemainingLeaves}
              currentEmployee={currentEmployee}
          />
        )}

        </main>
    </div>
  );
}
export default App;