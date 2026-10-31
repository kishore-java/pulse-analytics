import {
    LayoutDashboard,
    ChartNoAxesCombined,
    ArrowLeftRight,
    Users,
    Package,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface NavigationItem {
    label: string
    icon: LucideIcon
}

const navigationItems: NavigationItem[] = [
    { label: 'Overview', icon: LayoutDashboard },
    { label: 'Analytics', icon: ChartNoAxesCombined },
    { label: 'Transactions', icon: ArrowLeftRight },
    { label: 'Customers', icon: Users },
    { label: 'Products', icon: Package },
]

export function Sidebar() {
    const activeItem = 'Overview'

    return (
        <aside className="h-screen w-64 border-r bg-white">
            <div className="flex h-16 items-center gap-3 px-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    P
                </div>

                <span className="text-lg font-bold tracking-tight">
                    pulse analytics
                </span>
            </div>

            <nav className="p-4" aria-label="Main navigation">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Workspace
                </p>

                <ul className="space-y-1">
                    {navigationItems.map((item) => {
                        const Icon = item.icon
                        const isActive = item.label === activeItem

                        return (
                            <li
                                key={item.label}
                            >
                                <a
                                    href={`#${item.label.toLowerCase()}`}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                            ? 'bg-indigo-50 text-indigo-700'
                                            : 'text-slate-600 hover:bg-slate-100'
                                        }`}
                                >
                                    <Icon className="h-5 w-5 shrink-0"  aria-hidden="true"/>
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}
