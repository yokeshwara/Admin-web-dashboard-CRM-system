"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  UserCog,
  Briefcase,
  Wrench,
  FileText,
  ShoppingCart,
  Settings,
  Bell,
  Search,
  Menu,
  LogOut,
  ChevronDown,
  X,
  Package,
  FileCheck,
  PenTool,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
  roles: string[]
  color?: string
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    roles: ["Admin", "Sub-Admin", "Engineer", "Customer"],
    color: "bg-blue-500",
  },
  {
    title: "Clients",
    href: "/clients",
    icon: Users,
    roles: ["Admin", "Sub-Admin"],
    color: "bg-purple-500",
  },
  {
    title: "Assets",
    href: "/assets",
    icon: Package,
    roles: ["Admin", "Sub-Admin"],
    color: "bg-violet-500",
  },
  {
    title: "Service & Complaints",
    href: "/requests",
    icon: Wrench,
    roles: ["Admin", "Sub-Admin", "Engineer", "Customer"],
    color: "bg-amber-500",
  },
  {
    title: "Engineer Hub",
    href: "/engineers",
    icon: UserCog,
    roles: ["Admin", "Sub-Admin"],
    color: "bg-emerald-500",
  },
  {
    title: "AMC Contracts",
    href: "/contracts",
    icon: Briefcase,
    roles: ["Admin", "Sub-Admin"],
    color: "bg-rose-500",
  },
  {
    title: "Service Quotes",
    href: "/quotes",
    icon: FileCheck,
    roles: ["Admin", "Sub-Admin", "Engineer"],
    color: "bg-indigo-500",
  },
  {
    title: "Spare Requests",
    href: "/spares",
    icon: PenTool,
    roles: ["Admin", "Sub-Admin", "Engineer"],
    color: "bg-sky-500",
  },
  {
    title: "Reports & Logs",
    href: "/reports",
    icon: FileText,
    roles: ["Admin", "Sub-Admin"],
    color: "bg-cyan-500",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    roles: ["Admin"],
    color: "bg-slate-500",
  },
]

export function DashboardLayout({
  children,
  userRole = "Admin",
}: {
  children: React.ReactNode
  userRole?: string
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const filteredNavItems = navItems.filter((item) => item.roles.includes(userRole))

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden">
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-white border-r border-slate-200 transition-all duration-300 ease-in-out z-[70] flex flex-col fixed inset-y-0 left-0 lg:relative",
          isSidebarOpen ? "w-[280px]" : "w-20",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-slate-900 tracking-tight">
                  BI Marketing
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Dashboard
                </span>
              </div>
            )}
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {filteredNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 group relative"
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 shadow-sm text-white",
                  item.color,
                )}
              >
                <item.icon className="w-5 h-5" />
              </div>
              {isSidebarOpen && <span className="font-semibold text-sm">{item.title}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-100 bg-white shrink-0">
          <button className="flex items-center gap-3 px-3 py-3 w-full text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200 font-semibold text-sm">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
              <LogOut className="w-5 h-5" />
            </div>
            {isSidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-20 bg-primary text-white flex items-center justify-between px-6 shadow-xl shrink-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              if (window.innerWidth < 1024) setIsMobileMenuOpen(true)
              else setIsSidebarOpen(!isSidebarOpen)
            }}
            className="text-white hover:bg-white/10 rounded-xl"
          >
            <Menu className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
            </Button>

            <Avatar className="h-10 w-10">
              <AvatarImage src="/diverse-avatars.png" />
              <AvatarFallback>BM</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
