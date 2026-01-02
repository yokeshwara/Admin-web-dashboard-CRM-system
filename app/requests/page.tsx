"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, Clock, MapPin, User, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const complaints = [
  {
    id: "REQ-2025-442",
    customer: "Global Tech Solutions",
    asset: "High-Speed Server (AST-001)",
    priority: "Critical",
    status: "Pending Allocation",
    createdAt: "2025-01-10 09:30 AM",
    description: "Server is shutting down unexpectedly every 2 hours.",
    location: "Mumbai South",
  },
  {
    id: "REQ-2025-441",
    customer: "Apex Manufacturing",
    asset: "MacBook Pro M3 (AST-002)",
    priority: "Medium",
    status: "Allocated",
    engineer: "Rahul Sharma",
    createdAt: "2025-01-10 10:15 AM",
    description: "Battery draining rapidly after recent update.",
    location: "Mumbai West",
  },
  {
    id: "REQ-2025-440",
    customer: "Innovate Hub",
    asset: "Industrial UPS (AST-003)",
    priority: "High",
    status: "Resolved",
    engineer: "Amit Verma",
    createdAt: "2025-01-09 04:00 PM",
    description: "Backup power not kicking in during outage.",
    location: "Thane",
  },
]

export default function RequestsPage() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Service Requests & Complaints</h1>
            <p className="text-slate-500 mt-1">Register new complaints and track service status.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
            <Plus className="w-4 h-4 mr-2" />
            Register Complaint
          </Button>
        </div>

        {/* Status Tabs */}
        <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-slate-100 w-fit shadow-sm">
          {["all", "pending", "allocated", "resolved"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all",
                activeTab === tab ? "bg-primary text-white shadow-md" : "text-slate-500 hover:text-primary",
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search by ticket ID or customer..."
              className="pl-10 border-slate-200 h-11 focus-visible:ring-primary/20"
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" className="h-11 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Complaints Grid */}
        <div className="grid grid-cols-1 gap-4">
          {complaints.map((req) => (
            <Card
              key={req.id}
              className="border-none shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
            >
              <div
                className={cn(
                  "h-1 w-full",
                  req.priority === "Critical" ? "bg-red-500" : req.priority === "High" ? "bg-amber-500" : "bg-blue-500",
                )}
              ></div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between md:justify-start gap-4">
                      <span className="text-sm font-bold text-primary">{req.id}</span>
                      <Badge
                        className={cn(
                          "font-bold border-none px-3",
                          req.status === "Pending Allocation"
                            ? "bg-red-50 text-red-600"
                            : req.status === "Allocated"
                              ? "bg-blue-50 text-blue-600"
                              : "bg-green-50 text-green-600",
                        )}
                      >
                        {req.status}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-[10px] font-bold uppercase tracking-widest border-slate-200"
                      >
                        {req.priority}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{req.customer}</h3>
                      <p className="text-sm text-slate-600 font-medium mt-1">{req.asset}</p>
                      <p className="text-sm text-slate-500 mt-2 line-clamp-2 italic">"{req.description}"</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{req.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{req.createdAt}</span>
                      </div>
                      {req.engineer && (
                        <div className="flex items-center gap-2 text-xs text-primary font-bold">
                          <User className="w-3.5 h-3.5" />
                          <span>Assigned: {req.engineer}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex md:flex-col justify-end gap-2 md:w-48 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                    {req.status === "Pending Allocation" ? (
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white text-xs font-bold uppercase tracking-wider">
                        Allocate Engineer
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full text-xs font-bold uppercase tracking-wider bg-transparent"
                      >
                        View Progress
                      </Button>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full text-xs font-bold uppercase tracking-wider text-slate-500"
                        >
                          <MoreHorizontal className="w-4 h-4 mr-2" />
                          Actions
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Request</DropdownMenuItem>
                        <DropdownMenuItem>Cancel Request</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
