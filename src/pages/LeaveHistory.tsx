import LeaveRequestTable from '../components/LeaveRequestTable/LeaveRequestTable';
import type { LeaveRequest, LeaveStatus } from '../types/leave';

interface LeaveHistoryProps {
    leaveRequests: LeaveRequest[];
    onUpdateStatus: (id: number, status: LeaveStatus) => void;
}

function LeaveHistory({
    leaveRequests,
    onUpdateStatus
}: LeaveHistoryProps) {
    const completedRequests = leaveRequests.filter(
        (request) => request.status !== 'Pending'
    );

    return (
        <>
            <h1 className="text-3xl font-bold text-slate-800 mb-6">
                Leave History
            </h1>

            <LeaveRequestTable
                leaveRequests={completedRequests}
                onUpdateStatus={onUpdateStatus}
                currentRole="Employee"
            />
        </>
    );
}

export default LeaveHistory;