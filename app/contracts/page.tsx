"use client"

import { cn } from "@/lib/utils"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Filter, MoreHorizontal, Calendar, ArrowRight } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const contracts = [
  {
    id: "AMC-2025-001",
    customer: "Global Tech Solutions",
    type: "Comprehensive",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    status: "Active",
    value: "₹45,000",
    assetsCount: 12,
  },
  {
    id: "AMC-2025-002",
    customer: "Apex Manufacturing",
    type: "Non-Comprehensive",
    startDate: "2025-02-15",
    endDate: "2026-02-14",
    status: "Active",
    value: "₹12,500",
    assetsCount: 4,
  },
  {
    id: "AMC-2025-003",
    customer: "Innovate Hub",
    type: "Semi-Comprehensive",
    startDate: "2024-03-01",
    endDate: "2025-02-28",
    status: "Expiring Soon",
    value: "₹88,000",
    assetsCount: 25,
  },
]

export default function ContractsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">AMC Contracts</h1>
            <p className="text-slate-500 mt-1">Manage service agreements and contract lifecycle.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <Button variant="outline" className="bg-white border-slate-200 w-full sm:w-auto">
              Export PDF
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Create New Contract
            </Button>
          </div>
        </div>

        {/* Contract Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Card className="border-none shadow-sm bg-primary text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Total Contract Value</p>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2">₹12,45,000</h3>
                </div>
                <div className="p-3 bg-white/10 rounded-xl">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Active Contracts</p>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 text-slate-900">124</h3>
                </div>
                <div className="p-3 bg-green-50 rounded-xl">
                  <Badge className="bg-green-100 text-green-700 border-none hover:bg-green-100 text-xs">
                    88% Healthy
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm sm:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Expiring (30 Days)</p>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 text-slate-900">12</h3>
                </div>
                <div className="p-3 bg-red-50 rounded-xl">
                  <Badge className="bg-red-100 text-red-700 border-none hover:bg-red-100 text-xs">
                    Action Required
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search contracts by ID or customer..."
              className="pl-10 border-slate-200 h-11 focus-visible:ring-primary/20"
            />
          </div>
          <Button variant="outline" className="h-11 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Contracts Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-bold text-slate-500 min-w-[140px]">Contract ID</TableHead>
                  <TableHead className="font-bold text-slate-500 min-w-[200px]">Customer</TableHead>
                  <TableHead className="font-bold text-slate-500 min-w-[150px]">Type</TableHead>
                  <TableHead className="font-bold text-slate-500 min-w-[250px]">Validity</TableHead>
                  <TableHead className="font-bold text-slate-500">Assets</TableHead>
                  <TableHead className="font-bold text-slate-500">Status</TableHead>
                  <TableHead className="text-right font-bold text-slate-500 min-w-[80px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contracts.map((contract) => (
                  <TableRow key={contract.id} className="hover:bg-slate-50 transition-colors">
                    <TableCell className="font-bold text-slate-900">{contract.id}</TableCell>
                    <TableCell className="font-semibold text-primary">{contract.customer}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="border-slate-200 text-slate-600 font-medium whitespace-nowrap"
                      >
                        {contract.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <span className="whitespace-nowrap">{contract.startDate}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="whitespace-nowrap">{contract.endDate}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-bold text-slate-700">{contract.assetsCount}</TableCell>
                    <TableCell>
                      <Badge
                        className={cn(
                          "font-bold border-none whitespace-nowrap",
                          contract.status === "Active"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-red-100 text-red-700 hover:bg-red-100",
                        )}
                      >
                        {contract.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-slate-400">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Renew Contract</DropdownMenuItem>
                          <DropdownMenuItem>Download PDF</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Terminate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
