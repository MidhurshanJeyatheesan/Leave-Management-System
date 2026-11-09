import {Bell,UserCircle } from 'lucide-react';
import './Header.css';

interface HeaderProps {
    currentEmployee: string;
    currentRole: 'Employee' | 'Manager';
}

function Header({ currentEmployee, currentRole }: HeaderProps){
    return(
        <header className="header">
            <div className="header-title">
                <h2>Dashboard</h2>
                <p>Welcome Back! Manage your leaves here.</p>
            </div>

            <div className="header-actions">
                <button className="notification-button">
                    <Bell size={20} />
                </button>

                <div className="user-profile">
                    <UserCircle size={20} />

                    <div>
                        <h3>{currentEmployee}</h3>
                        <p>{currentRole}</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;