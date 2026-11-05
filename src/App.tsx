import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import LeaveRequestTable from './components/LeaveRequestTable/LeaveRequestTable';
import ApplyLeave from './components/ApplyLeave/ApplyLeave';
import type { LeaveRequest } from './types/leave';
import { useState,useEffect } from 'react';

import {
  LayoutDashboard,
  CalendarDays,
  ClipboardList,
  History,
  Coffee,
  HeartPulse
} from 'lucide-react';

import StatCard from './components/StatCard/StatCard';

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

    useEffect( () => {
      localStorage.setItem('leaveRequests', JSON.stringify(leaveRequests));
    }, [leaveRequests]);


    const addLeaveRequest = (newRequest : LeaveRequest) =>{
      setLeaveRequests((previousRequests) => [
        ...previousRequests,
        newRequest
      ])
    }

    return(
      <div className="flex min-h-screen">

        <Sidebar 
        menuItems={menuItems} 
        onMenuClick={setActivePage}
        />

        <main className="flex-1 bg-slate-100 p-8">

        { activePage === 'Dashboard' && (<>

          <h1 className="text-3xl font-bold text-slate-800 mb-6">
            Leave Management Dashboard
          </h1>

          <Header />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
                title= "Anual Leave"
                days= {14}
                icon= {CalendarDays}
              />

            <StatCard 
                title= "Casual Leave"
                days= {7}
                icon= {Coffee}
              />

            <StatCard 
                title= "Medical Leave"
                days= {7}
              icon= {HeartPulse}
              />
          </div>

        <LeaveRequestTable leaveRequests={leaveRequests} />

        </>
        )}

        { activePage=== 'Apply Leave' && (<>

          <ApplyLeave onAddLeaveRequest= { addLeaveRequest } />
          
        </>
      )}

        </main>
    </div>
  );
}
export default App;