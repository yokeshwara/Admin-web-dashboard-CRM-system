"use client"

import { cn } from "@/lib/utils"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronRight, AlertCircle } from "lucide-react"

const unallocated = [
  { id: "REQ-442", customer: "Global Tech", priority: "Critical", time: "2h ago" },
  { id: "REQ-445", customer: "Smart Hub", priority: "High", time: "5h ago" },
]

const engineerAvailability = [
  { name: "Rahul Sharma", tasks: 2, availability: "Busy", load: 85 },
  { name: "Amit Verma", tasks: 0, availability: "Available", load: 0 },
  { name: "Suresh Raina", tasks: 1, availability: "Available", load: 30 },
]

export default function AllocationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Engineer Allocation Center</h1>
          <p className="text-slate-500 mt-1">Smartly assign engineers to open service requests.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Unallocated Requests Queue */}
          <Card className="lg:col-span-1 border-none shadow-sm h-fit">
            <CardHeader className="bg-red-50/50">
              <CardTitle className="text-sm font-bold text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Pending Allocation Queue
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {unallocated.map((req) => (
                  <div key={req.id} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-bold text-primary">{req.id}</p>
                        <p className="font-semibold text-slate-900 mt-1">{req.customer}</p>
                      </div>
                      <Badge className="bg-red-100 text-red-600 border-none font-bold text-[10px]">
                        {req.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{req.time}</p>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Engineer Smart Selection */}
          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Suggested Engineers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {engineerAvailability.map((eng, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                          <AvatarFallback className="bg-primary/5 text-primary font-bold">
                            {eng.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-slate-900">{eng.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge
                              className={
                                eng.availability === "Available"
                                  ? "bg-green-100 text-green-700 border-none"
                                  : "bg-amber-100 text-amber-700 border-none"
                              }
                            >
                              {eng.availability}
                            </Badge>
                            <span className="text-xs text-slate-500">{eng.tasks} current tasks</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:w-48">
                        <div className="flex justify-between mb-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Current Workload</span>
                          <span className="text-[10px] font-bold text-slate-900">{eng.load}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all duration-500",
                              eng.load > 80 ? "bg-red-500" : "bg-primary",
                            )}
                            style={{ width: `${eng.load}%` }}
                          />
                        </div>
                      </div>

                      <Button
                        disabled={eng.availability === "Busy"}
                        className="bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-widest px-6"
                      >
                        Assign
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
