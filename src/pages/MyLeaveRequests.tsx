import LeaveRequestTable from '../components/LeaveRequestTable/LeaveRequestTable';
import type { LeaveRequest, LeaveStatus } from '../types/leave';

interface MyLeaveRequestsProps {
    leaveRequests: LeaveRequest[];
    onUpdateStatus: (id: number, status: LeaveStatus) => void;
}

function MyLeaveRequests({
    leaveRequests,
    onUpdateStatus
}: MyLeaveRequestsProps) {
    return (
        <>
            <h1 className="text-3xl font-bold text-slate-800 mb-6">
                My Leave Requests
            </h1>

            <LeaveRequestTable
                leaveRequests={leaveRequests}
                onUpdateStatus={onUpdateStatus}
                currentRole="Employee"
            />
        </>
    );
}

export default MyLeaveRequests;