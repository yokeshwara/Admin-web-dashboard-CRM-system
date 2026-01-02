"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, CheckCircle2, XCircle, Download, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const quotes = [
  {
    id: "QUO-8821",
    request: "REQ-2025-442",
    customer: "Global Tech Solutions",
    amount: "₹12,400",
    status: "Pending Approval",
    engineer: "Rahul Sharma",
    date: "2025-01-11",
  },
  {
    id: "QUO-8819",
    request: "REQ-2025-438",
    customer: "Innovate Hub",
    amount: "₹5,200",
    status: "Approved",
    engineer: "Amit Verma",
    date: "2025-01-10",
  },
  {
    id: "QUO-8815",
    request: "REQ-2025-430",
    customer: "Apex Manufacturing",
    amount: "₹24,500",
    status: "Rejected",
    engineer: "Priya Singh",
    date: "2025-01-08",
  },
]

export default function QuotesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Service Quotes</h1>
            <p className="text-slate-500 mt-1">Review and approve quotes generated for out-of-warranty services.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
            <Plus className="w-4 h-4 mr-2" />
            Create Quote
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Awaiting Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-3xl font-bold text-slate-900">14</h3>
              <p className="text-xs text-amber-600 font-bold mt-2">Action Required</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Approval Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-3xl font-bold text-slate-900">92%</h3>
              <p className="text-xs text-green-600 font-bold mt-2">+5% from last month</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Revenue Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-3xl font-bold text-slate-900">₹4.2L</h3>
              <p className="text-xs text-primary font-bold mt-2">Pending quotes</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-bold text-slate-500">Quote ID</TableHead>
                <TableHead className="font-bold text-slate-500">Customer / Request</TableHead>
                <TableHead className="font-bold text-slate-500 text-center">Amount</TableHead>
                <TableHead className="font-bold text-slate-500">Engineer</TableHead>
                <TableHead className="font-bold text-slate-500">Status</TableHead>
                <TableHead className="text-right font-bold text-slate-500">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotes.map((quote) => (
                <TableRow key={quote.id} className="hover:bg-slate-50 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span className="font-bold text-slate-900">{quote.id}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="font-semibold text-slate-900">{quote.customer}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{quote.request}</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="font-bold text-slate-900">{quote.amount}</span>
                  </TableCell>
                  <TableCell className="text-slate-600 font-medium">{quote.engineer}</TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        "font-bold border-none",
                        quote.status === "Approved"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : quote.status === "Pending Approval"
                            ? "bg-amber-100 text-amber-700 hover:bg-amber-100"
                            : "bg-red-100 text-red-700 hover:bg-red-100",
                      )}
                    >
                      {quote.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {quote.status === "Pending Approval" ? (
                        <>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-green-600 hover:bg-green-50">
                            <CheckCircle2 className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-red-600 hover:bg-red-50">
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </>
                      ) : (
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400">
                          <Download className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  )
}
