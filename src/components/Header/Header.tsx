import {Bell,UserCircle } from 'lucide-react';
import './Header.css';

function Header(){
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
                        <h3>John Doe</h3>
                        <p>Employee</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;