import Header from '../components/Header/Header';
import StatCard from '../components/StatCard/StatCard';
import LeaveRequestTable from '../components/LeaveRequestTable/LeaveRequestTable';

import type { LeaveRequest, LeaveStatus } from '../types/leave';

import {
    CalendarDays,
    Coffee,
    HeartPulse
} from 'lucide-react';

interface DashboardProps {
    leaveRequests: LeaveRequest[];
    onUpdateStatus: (id: number, status: LeaveStatus) => void;
    currentRole: 'Employee' | 'Manager';
    calculateRemainingLeaves: (leaveType: string) => number;
}

function Dashboard({
    leaveRequests,
    onUpdateStatus,
    currentRole,
    calculateRemainingLeaves
}: DashboardProps) {

    return (
        <>
            <h1 className="text-3xl font-bold text-slate-800 mb-6">
                Leave Management Dashboard
            </h1>

            <Header />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <StatCard
                    title="Annual Leave"
                    days={calculateRemainingLeaves('annual')}
                    icon={CalendarDays}
                />

                <StatCard
                    title="Casual Leave"
                    days={calculateRemainingLeaves('casual')}
                    icon={Coffee}
                />

                <StatCard
                    title="Medical Leave"
                    days={calculateRemainingLeaves('medical')}
                    icon={HeartPulse}
                />

            </div>

            <LeaveRequestTable
                leaveRequests={leaveRequests}
                onUpdateStatus={onUpdateStatus}
                currentRole={currentRole}
            />
        </>
    );
}

export default Dashboard;
