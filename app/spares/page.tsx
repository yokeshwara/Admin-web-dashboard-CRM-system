"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Package, CheckCircle, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const spareRequests = [
  {
    id: "SPR-001",
    part: "Mainboard - Server X1",
    qty: 1,
    requestBy: "Rahul Sharma",
    priority: "Critical",
    status: "Awaiting Procurement",
    date: "2025-01-11",
  },
  {
    id: "SPR-002",
    part: "Battery Pack 5000mAh",
    qty: 5,
    requestBy: "Priya Singh",
    priority: "Normal",
    status: "Approved",
    date: "2025-01-10",
  },
  {
    id: "SPR-003",
    part: "Optical Sensor",
    qty: 2,
    requestBy: "Amit Verma",
    priority: "High",
    status: "Delivered",
    date: "2025-01-09",
  },
]

export default function SparesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Spare Requests</h1>
            <p className="text-slate-500 mt-1">Manage inventory requests and part procurement approvals.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
            <ShoppingCart className="w-4 h-4 mr-2" />
            New Spare Request
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {spareRequests.map((req) => (
            <Card key={req.id} className="border-none shadow-sm overflow-hidden group">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-stretch">
                  <div
                    className={cn(
                      "w-full md:w-2 transition-colors",
                      req.priority === "Critical" ? "bg-red-500" : "bg-slate-200 group-hover:bg-primary",
                    )}
                  />
                  <div className="flex-1 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-50 rounded-2xl">
                        <Package className="w-6 h-6 text-slate-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{req.id}</span>
                          <Badge
                            className={cn(
                              "text-[10px] font-bold border-none uppercase",
                              req.priority === "Critical" ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-600",
                            )}
                          >
                            {req.priority}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mt-1">{req.part}</h3>
                        <p className="text-xs text-slate-500 mt-1 font-medium">Requested by: {req.requestBy}</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="text-center">
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Quantity</p>
                        <p className="text-xl font-bold text-slate-900">{req.qty}</p>
                      </div>
                      <div className="md:w-40">
                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Status</p>
                        <div className="flex items-center gap-2">
                          {req.status === "Awaiting Procurement" ? (
                            <Clock className="w-4 h-4 text-amber-500" />
                          ) : req.status === "Approved" ? (
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                          <span className="text-xs font-bold text-slate-700">{req.status}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {req.status === "Awaiting Procurement" ? (
                          <Button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold uppercase tracking-wider px-6 h-10">
                            Approve
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            className="text-xs font-bold uppercase tracking-wider px-6 h-10 bg-transparent border-slate-200"
                          >
                            Details
                          </Button>
                        )}
                      </div>
                    </div>
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
