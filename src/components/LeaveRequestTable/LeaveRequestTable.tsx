import './LeaveRequestTable.css';
import type { LeaveRequest } from '../../types/leave';

interface LeaveRequestTableProps {
    leaveRequests: LeaveRequest[];
}

function LeaveRequestTable({ leaveRequests }: LeaveRequestTableProps) {
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