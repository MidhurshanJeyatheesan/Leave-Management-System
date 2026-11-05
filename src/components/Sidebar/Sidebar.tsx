import type { LucideIcon } from 'lucide-react';

import './Sidebar.css';

interface MenuItem {
    label: string;
    icon: LucideIcon;
}

interface SidebarProps {
    menuItems: MenuItem[];
    onMenuClick: (label:string) => void;
}

function Sidebar({ menuItems, onMenuClick }: SidebarProps) {
    return (
        <aside className="sidebar">
            <h1 className="sidebar-title">
                LeaveMS
            </h1>

            <nav>
                <ul className="sidebar-menu">
                    {
                        menuItems.map((item) => {
                            const Icon=item.icon;

                            return(
                                <li key={item.label} onClick= { () => onMenuClick(item.label) }>
                                    <Icon size={20} />
                                    <span>{item.label}</span>                                    
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </aside>
    );

}
export default Sidebar;
