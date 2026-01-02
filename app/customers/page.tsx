"use client"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Filter, MoreHorizontal, Phone, Mail } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const customers = [
  {
    id: "CUST001",
    name: "Global Tech Solutions",
    contactPerson: "Rajesh Kumar",
    email: "rajesh@globaltech.com",
    phone: "+91 90000 11111",
    activeContracts: 3,
    status: "Premium",
  },
  {
    id: "CUST002",
    name: "Apex Manufacturing",
    contactPerson: "Sarah Johnson",
    email: "sarah@apex.io",
    phone: "+91 90000 22222",
    activeContracts: 1,
    status: "Standard",
  },
  {
    id: "CUST003",
    name: "Innovate Hub",
    contactPerson: "Kevin Spacey",
    email: "admin@innovate.com",
    phone: "+91 90000 33333",
    activeContracts: 5,
    status: "Premium",
  },
]

export default function CustomersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Customer Management</h1>
            <p className="text-slate-500 mt-1">View and manage your client base and their service history.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold w-full md:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add New Customer
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search customers..."
              className="pl-10 border-slate-200 focus-visible:ring-primary/20 h-11"
            />
          </div>
          <Button variant="outline" className="h-11 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[100px] font-bold text-slate-500">ID</TableHead>
                  <TableHead className="font-bold text-slate-500 min-w-[200px]">Customer Name</TableHead>
                  <TableHead className="font-bold text-slate-500 min-w-[150px]">Contact Person</TableHead>
                  <TableHead className="font-bold text-slate-500 min-w-[200px]">Contact Details</TableHead>
                  <TableHead className="font-bold text-slate-500">Active AMCs</TableHead>
                  <TableHead className="font-bold text-slate-500">Status</TableHead>
                  <TableHead className="text-right font-bold text-slate-500 min-w-[80px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id} className="hover:bg-slate-50 transition-colors">
                    <TableCell className="font-bold text-primary">{customer.id}</TableCell>
                    <TableCell>
                      <p className="font-semibold text-slate-900">{customer.name}</p>
                    </TableCell>
                    <TableCell className="text-slate-600 font-medium">{customer.contactPerson}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Mail className="w-3 h-3 shrink-0" />
                          <span>{customer.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Phone className="w-3 h-3 shrink-0" />
                          <span>{customer.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-bold border-none">
                        {customer.activeContracts}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          customer.status === "Premium" ? "bg-red-50 text-red-600 border-red-100 font-bold" : ""
                        }
                      >
                        {customer.status}
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
                          <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                          <DropdownMenuItem>Manage AMCs</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
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
