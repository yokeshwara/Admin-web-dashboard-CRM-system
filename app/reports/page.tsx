"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileDown, BarChart3, Star, Download, Filter, FileSpreadsheet } from "lucide-react"
import { cn } from "@/lib/utils"

const recentReports = [
  { id: "REP-101", name: "Monthly AMC Performance", format: "PDF", date: "2025-01-01", status: "Generated" },
  { id: "REP-102", name: "Engineer Attendance Log", format: "Excel", date: "2024-12-31", status: "Generated" },
  { id: "REP-103", name: "Spare Inventory Audit", format: "PDF", date: "2024-12-15", status: "Archived" },
]

const feedbackData = [
  {
    customer: "Global Tech",
    engineer: "Rahul Sharma",
    rating: 5,
    comment: "Excellent service, very professional.",
    date: "2 days ago",
  },
  {
    customer: "Innovate Hub",
    engineer: "Amit Verma",
    rating: 4,
    comment: "Prompt response but parts took time.",
    date: "5 days ago",
  },
]

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Reports & Insights</h1>
            <p className="text-slate-500 mt-1">Generate detailed performance reports and review feedback.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="bg-white border-slate-200">
              <Filter className="w-4 h-4 mr-2" />
              Custom Range
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <FileDown className="w-4 h-4 mr-2" />
              Generate New Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Reports List */}
          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader className="border-b border-slate-50">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">Generated Reports</CardTitle>
                <BarChart3 className="w-5 h-5 text-slate-400" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {recentReports.map((report) => (
                  <div
                    key={report.id}
                    className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "p-3 rounded-xl",
                          report.format === "PDF" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600",
                        )}
                      >
                        {report.format === "PDF" ? (
                          <FileDown className="w-5 h-5" />
                        ) : (
                          <FileSpreadsheet className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{report.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                          {report.id} • {report.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-slate-100 text-slate-600 border-none font-bold text-[10px] uppercase">
                        {report.status}
                      </Badge>
                      <Button size="icon" variant="ghost" className="text-primary hover:bg-primary/5">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Customer Feedback */}
          <Card className="border-none shadow-sm">
            <CardHeader className="border-b border-slate-50">
              <CardTitle className="text-lg font-bold">Recent Feedback</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {feedbackData.map((fb, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{fb.customer}</p>
                      <p className="text-[10px] text-slate-500 font-medium">Assigned: {fb.engineer}</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className={cn("w-3 h-3 fill-current", idx >= fb.rating && "text-slate-200")} />
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border-l-2 border-primary">
                    <p className="text-xs text-slate-600 italic">"{fb.comment}"</p>
                  </div>
                  <p className="text-[10px] text-slate-400 text-right font-medium">{fb.date}</p>
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full text-xs font-bold uppercase tracking-widest bg-transparent h-11 border-slate-200 text-slate-600 hover:text-primary"
              >
                View All Reviews
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
