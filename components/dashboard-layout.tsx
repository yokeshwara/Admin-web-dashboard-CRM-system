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
  { title: "Clients & Assets", href: "/clients", icon: Users, roles: ["Admin", "Sub-Admin"], color: "bg-purple-500" },
  {
    title: "Service & Complaints",
    href: "/service",
    icon: Wrench,
    roles: ["Admin", "Sub-Admin", "Engineer", "Customer"],
    color: "bg-amber-500",
  },
  { title: "Engineer Hub", href: "/engineers", icon: UserCog, roles: ["Admin", "Sub-Admin"], color: "bg-emerald-500" },
  { title: "AMC Contracts", href: "/contracts", icon: Briefcase, roles: ["Admin", "Sub-Admin"], color: "bg-rose-500" },
  {
    title: "Quotes & Spares",
    href: "/procurement",
    icon: ShoppingCart,
    roles: ["Admin", "Sub-Admin", "Engineer"],
    color: "bg-indigo-500",
  },
  { title: "Reports & Logs", href: "/reports", icon: FileText, roles: ["Admin", "Sub-Admin"], color: "bg-cyan-500" },
  { title: "Settings", href: "/settings", icon: Settings, roles: ["Admin"], color: "bg-slate-500" },
]

export function DashboardLayout({ children, userRole = "Admin" }: { children: React.ReactNode; userRole?: string }) {
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
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-slate-900 tracking-tight">AMC PRO</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enterprise</span>
              </div>
            )}
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

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
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 shadow-sm",
                  item.color || "bg-slate-100",
                  "text-white group-hover:scale-110 group-hover:shadow-md",
                )}
              >
                <item.icon className="w-5 h-5" />
              </div>
              {isSidebarOpen && <span className="font-semibold text-sm">{item.title}</span>}
              {!isSidebarOpen && (
                <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
                  {item.title}
                </div>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 bg-white shrink-0">
          <button className="flex items-center gap-3 px-3 py-3 w-full text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200 font-semibold text-sm group">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-200 shrink-0 shadow-sm">
              <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            {isSidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-20 bg-primary text-white flex items-center justify-between px-4 md:px-8 sticky top-0 z-40 shadow-xl shrink-0">
          <div className="flex items-center gap-3 md:gap-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsMobileMenuOpen(true)
                } else {
                  setIsSidebarOpen(!isSidebarOpen)
                }
              }}
              className="text-white hover:bg-white/10 rounded-xl"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="relative hidden xl:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <Input
                placeholder="Search customers, contracts, engineers..."
                className="bg-white/10 border-none text-white placeholder:text-white/50 pl-11 w-[300px] 2xl:w-[400px] h-11 rounded-xl focus-visible:ring-white/30 transition-all focus:bg-white/15"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-5">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-xl relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full text-[10px] font-bold flex items-center justify-center">
                  12
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10 rounded-xl">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 rounded-full text-[10px] font-bold flex items-center justify-center text-slate-900">
                  8
                </span>
              </Button>
            </div>

            <div className="h-8 w-px bg-white/20 hidden sm:block mx-1"></div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-3 pl-1 pr-3 py-1.5 h-auto hover:bg-white/10 rounded-2xl transition-all"
                >
                  <Avatar className="h-10 w-10 border-2 border-white/30 ring-2 ring-transparent group-hover:ring-white/20 transition-all">
                    <AvatarImage src="/diverse-avatars.png" alt="User" />
                    <AvatarFallback className="bg-white text-primary font-bold">AD</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:flex flex-col items-start">
                    <p className="text-sm font-bold leading-none tracking-tight">Admin User</p>
                    <p className="text-[10px] text-white/70 mt-1.5 font-bold uppercase tracking-[0.1em]">{userRole}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-white/60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                <DropdownMenuItem>Preferences</DropdownMenuItem>
                <DropdownMenuItem>Help & Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 font-semibold">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto overflow-x-hidden">
          <div className="max-w-[1600px] mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
