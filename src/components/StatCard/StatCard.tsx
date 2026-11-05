import type { LucideIcon } from 'lucide-react';
import './StatCard.css';

interface StatCardProps {
    title: string;
    days: number;
    icon: LucideIcon;
}

function StatCard( { title, days, icon:Icon } : StatCardProps) {
    return (
        <div className="stat-card">
            <div className="stat-card-header">
                <h3> { title } </h3>
                <Icon size={20} />
            </div>

            <h2> { days } </h2>
            <p>Days remaining </p>
        </div>
    );
}

export default StatCard;
