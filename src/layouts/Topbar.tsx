import { Search, Bell, CircleUserRound } from 'lucide-react'

export function Topbar() {

    return <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
        <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input placeholder="search anything..." aria-label="search dashboard" className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
        </div>
        <div className="flex items-center gap-4">
            <button
                type="button"
                aria-label="Notifications"
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
            >
                <Bell className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
                KM
            </div>
        </div>
    </header>
}