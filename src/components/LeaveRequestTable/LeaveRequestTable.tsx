import './LeaveRequestTable.css';
import type { LeaveRequest, LeaveStatus } from '../../types/leave';

interface LeaveRequestTableProps {
    leaveRequests: LeaveRequest[];
    onUpdateStatus: (id:number, status: LeaveStatus) => void;
}

function LeaveRequestTable({ leaveRequests, onUpdateStatus }: LeaveRequestTableProps) {
    return (
        <div className="leave-request-section">
            <div className="leave-request-heading">
                <h2>Recent Leave Requests </h2>
                <p> Manage employee leave applications</p>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Leave Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Days</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            leaveRequests.map((request) => (
                            <tr key={request.id}>
                                <td>{request.employeeName}</td>
                                <td>{request.leaveType}</td>
                                <td>{request.startDate}</td>
                                <td>{request.endDate}</td>
                                <td>{request.days}</td>
                                <td>{request.reason}</td>
                                <td>{request.status}</td>
                                <td>
                                {request.status === 'Pending' ? (
                                    <>
                                        <button onClick={() => onUpdateStatus(request.id, 'Approved')}>Approve</button>
                                        <button onClick={() => onUpdateStatus(request.id, 'Rejected')}>Reject</button>
                                        
                                    </>):
                                (
                                    <span>Completed</span>
                                )
                                }
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default LeaveRequestTable;