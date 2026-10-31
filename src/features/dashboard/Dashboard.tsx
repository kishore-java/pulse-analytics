
import { MetricCard } from "../../components/MetricCard";

const metrics = [
    {
        title: 'Total Revenue',
        value: '$48,294',
        change: '+12.5%',
        trend: 'up',
    },
    {
        title: 'Active Users',
        value: '2,420',
        change: '+8.2%',
        trend: 'up',
    },
    {
        title: 'Conversion Rate',
        value: '3.6%',
        change: '-2.1%',
        trend: 'down',
    },
    {
        title: 'Growth Rate',
        value: '14.2%',
        change: '+4.8%',
        trend: 'up',
    },
] as const

export function Dashboard() {


    return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {
            metrics.map((metric) => <MetricCard
                key={metric.title}
                title={metric.title}
                value={metric.value}
                change={metric.change}
                trend={metric.trend}
            />)
        }
    </div>

}