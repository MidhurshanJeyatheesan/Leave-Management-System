import { useState } from 'react';
import type { LeaveRequest } from '../../types/leave';
import './ApplyLeave.css';
import { calculateLeaveDays } from '../../utils/dateUtils';

interface ApplyLeaveProps {
    onAddLeaveRequest: (newRequest: LeaveRequest) => void;
    getRemainingBalance : (leaveType: string) => number;
    currentEmployee: string;
}


function ApplyLeave( {onAddLeaveRequest, getRemainingBalance, currentEmployee } : ApplyLeaveProps) {
    
    const [leaveType,setLeaveType]=useState('annual');
    const [startDate,setStartDate]=useState('');
    const [endDate,setEndDate]=useState('');
    const [reason,setReason]=useState('');


    const dateError = startDate && endDate && endDate < startDate
    ? 'End date cannot be earlier than start date'
    : '';

    const leaveDays=calculateLeaveDays(startDate,endDate);
    const remainingBalance=getRemainingBalance(leaveType);


    const handleSubmit=(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!startDate || !endDate ){
            alert('Please select both start and end dates');
            return;
        }

        if(dateError){
            alert(dateError);
            return;
        }

        if(leaveDays > remainingBalance){
            alert(`you only have ${remainingBalance} days remaining for this leave typr.`);
            return;
        }

        if(!reason.trim()){
            alert('Please provide a reason for leave');
            return;
        }

        const newLeaveRequest: LeaveRequest = {
            id: Date.now(),
            employeeName: currentEmployee,
            leaveType: leaveType,
            startDate: startDate,
            endDate: endDate,
            days: leaveDays,
            reason: reason.trim(),
            status: 'Pending'
        }

        onAddLeaveRequest(newLeaveRequest)

        setLeaveType('annual');
        setStartDate('');
        setEndDate('');
        setReason('');

        alert('Leave request submitted successfully!');
    }
    return(
        <div className="apply-leave-section">
            <h2>Apply for Leave</h2>
            <form className="apply-leave-form" onSubmit={ handleSubmit }>

                    <div className="form-group-leavetype">

                        <label htmlFor="leave-type">Leave Type:</label>

                        <select id="leave-type" name="leave-type" value= { leaveType } onChange={ (event) => setLeaveType(event.target.value)} required > 

                            <option value="annual">Annual Leave</option>
                            <option value="casual">Casual Leave</option>
                            <option value="medical">Medical Leave</option>  

                        </select>
                        <p>Selected Leave Type: {leaveType}</p>

                    </div>
                    
                    <div className="form-group-startdate">

                        <label htmlFor="start-date">Start Date:</label>

                        <input type="date" id="start-date" name="start-date" value= { startDate } onChange={ (event) => setStartDate(event.target.value)} required />

                    </div>

                    <div className="form-group-enddate">

                        <label htmlFor="end-date">End Date:</label>

                        <input type="date" id="end-date" name="end-date" value={ endDate } onChange={ (event) => setEndDate(event.target.value) } required/>

                    </div>
                    
                    {dateError && <p className="error-message">{dateError}</p>}
                    <p>Total Leave Days: {leaveDays}</p>


                    <div className="form-group-reason">

                        <label htmlFor="reason">Reason:</label>

                        <textarea id="reason" name="reason" rows={4} value={ reason } onChange={ (event) => setReason(event.target.value) } required/>

                    </div>
                    
                    <div className="form-group-submit">

                        <button type="submit">Submit</button>

                    </div>
                    
            </form>
        </div>
    );
}
export default ApplyLeave;
