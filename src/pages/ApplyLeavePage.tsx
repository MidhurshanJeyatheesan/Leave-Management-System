
import ApplyLeave from '../components/ApplyLeave/ApplyLeave';
import type { LeaveRequest } from '../types/leave';

interface ApplyLeavePageProps {
    onAddLeaveRequest: (newRequest: LeaveRequest) => void;
    getRemainingBalance: (leaveType: string) => number;
    currentEmployee: string;
}

function ApplyLeavePage({
    onAddLeaveRequest,
    getRemainingBalance,
    currentEmployee
}: ApplyLeavePageProps) {

    return (
        <ApplyLeave
            onAddLeaveRequest={onAddLeaveRequest}
            getRemainingBalance={getRemainingBalance}
            currentEmployee={currentEmployee}
        />
    );
}

export default ApplyLeavePage;
