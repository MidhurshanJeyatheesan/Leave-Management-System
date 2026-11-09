import type { LeaveRequest } from '../types/leave';

export const calculateRemainingLeaves = (
    leaveRequests: LeaveRequest[],
    leaveType: string,
    employeeName: string
): number => {

    const approvedLeaves = leaveRequests.filter(
        (request) =>
            request.leaveType === leaveType &&
            request.status === 'Approved' &&
            request.employeeName === employeeName
    );

    const totalApprovedDays = approvedLeaves.reduce(
        (total, request) => total + request.days,
        0
    );

    const generalCount = leaveType === 'annual' ? 14 : 7;

    return generalCount - totalApprovedDays;
};
