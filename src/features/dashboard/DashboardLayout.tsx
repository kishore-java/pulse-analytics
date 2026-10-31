import type { ReactNode } from "react";
import { Sidebar } from "../../layouts/Sidebar";
import { Topbar } from "../../layouts/Topbar";



type DashboardLayoutProps = {
    children: ReactNode
}


export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 md:flex">
    <div className="hidden md:block">
      <Sidebar />
      </div>
    <div className="min-w-0 flex-1">
     <Topbar/>
      <main className="p-6">
        {children}
      </main>
      </div>
    </div>
  )
}