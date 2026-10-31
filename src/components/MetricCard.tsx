type MetricCardProps = {
    title: string
    value: string
    change: string
    trend: 'up' | 'down'
}

export function MetricCard(props: MetricCardProps) {

    const trendColor =
        props.trend === 'up'
            ? 'text-green-600'
            : 'text-red-600'

    return <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-medium text-slate-500">
            {props.title}
        </h2>
        <p className="mt-2 text-2xl font-bold text-slate-900">
            {props.value}
        </p>
        <span className={`${trendColor} text-xs font-semibold`}>
            {props.trend === 'up' ? '↑' : '↓'} {props.change}
        </span>

    </div>
}