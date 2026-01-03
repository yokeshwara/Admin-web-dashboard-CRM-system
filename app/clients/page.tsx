"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Search, Plus, Edit2, Trash2, TrendingUp, Users, DollarSign, AlertCircle } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DashboardLayout } from "@/components/dashboard-layout"

const clientsData = [
  {
    id: 1,
    name: "TechCorp Industries",
    industry: "Technology",
    contract: "Comprehensive",
    status: "Active",
    health: 95,
    revenue: "₹45,000/mo",
    calls: 12,
    satisfaction: 4.8,
  },
  {
    id: 2,
    name: "Global Logistics Ltd",
    industry: "Logistics",
    contract: "Semi-Comprehensive",
    status: "Active",
    health: 82,
    revenue: "₹32,000/mo",
    calls: 8,
    satisfaction: 4.5,
  },
  {
    id: 3,
    name: "Nexus Real Estate",
    industry: "Real Estate",
    contract: "Non-Comprehensive",
    status: "Active",
    health: 70,
    revenue: "₹18,000/mo",
    calls: 5,
    satisfaction: 4.2,
  },
  {
    id: 4,
    name: "Skyline Towers",
    industry: "Construction",
    contract: "Comprehensive",
    status: "Expiring Soon",
    health: 45,
    revenue: "₹52,000/mo",
    calls: 15,
    satisfaction: 3.9,
  },
  {
    id: 5,
    name: "Metro Bank Corp",
    industry: "Finance",
    contract: "Comprehensive",
    status: "Active",
    health: 88,
    revenue: "₹65,000/mo",
    calls: 10,
    satisfaction: 4.7,
  },
]

const monthlyRevenueData = [
  { month: "Jan", revenue: 180000, contracts: 45 },
  { month: "Feb", revenue: 195000, contracts: 48 },
  { month: "Mar", revenue: 210000, contracts: 52 },
  { month: "Apr", revenue: 205000, contracts: 50 },
  { month: "May", revenue: 225000, contracts: 56 },
  { month: "Jun", revenue: 245000, contracts: 61 },
]

const contractDistribution = [
  { name: "Comprehensive", value: 245, fill: "#dc2626" },
  { name: "Semi-Comprehensive", value: 98, fill: "#f87171" },
  { name: "Non-Comprehensive", value: 39, fill: "#ec4899" },
]

export default function ClientsContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTab, setSelectedTab] = useState("overview")

  const filteredClients = clientsData.filter((client) => client.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const getHealthColor = (health:any) => {
    if (health >= 80) return "bg-green-100 text-green-800"
    if (health >= 60) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  const getStatusBadge = (status:any) => {
    if (status === "Active") return "bg-green-100 text-green-800"
    if (status === "Expiring Soon") return "bg-yellow-100 text-yellow-800"
    return "bg-gray-100 text-gray-800"
  }

  return (
      <DashboardLayout>
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Clients Management</h1>
            <p className="text-gray-600">Track and manage all customer relationships and AMC contracts</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add New Client
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Clients</p>
                  <p className="text-3xl font-bold text-black">382</p>
                </div>
                <Users className="w-10 h-10 text-red-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Monthly Revenue</p>
                  <p className="text-3xl font-bold text-black">₹245K</p>
                </div>
                <DollarSign className="w-10 h-10 text-green-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Avg Health Score</p>
                  <p className="text-3xl font-bold text-black">78%</p>
                </div>
                <TrendingUp className="w-10 h-10 text-purple-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Avg Satisfaction</p>
                  <p className="text-3xl font-bold text-black">4.6/5</p>
                </div>
                <AlertCircle className="w-10 h-10 text-orange-500 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="clients" className="mb-8">
          <TabsList className="bg-white border-gray-200">
            <TabsTrigger value="clients" className="data-[state=active]:bg-red-600">
              Clients List
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-red-600">
              Analytics
            </TabsTrigger>
            {/* <TabsTrigger value="contracts" className="data-[state=active]:bg-red-600">
              Contract Status
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="clients" className="mt-6">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Search className="w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search clients by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-gray-50 border-gray-200 text-black placeholder:text-gray-400"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-black font-semibold">Client Name</th>
                        <th className="text-left py-3 px-4 text-black font-semibold">Industry</th>
                        <th className="text-left py-3 px-4 text-black font-semibold">Contract Type</th>
                        <th className="text-left py-3 px-4 text-black font-semibold">Status</th>
                        <th className="text-left py-3 px-4 text-black font-semibold">Health Score</th>
                        <th className="text-left py-3 px-4 text-black font-semibold">Monthly Revenue</th>
                        <th className="text-left py-3 px-4 text-black font-semibold">Satisfaction</th>
                        <th className="text-left py-3 px-4 text-black font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredClients.map((client) => (
                        <tr key={client.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                          <td className="py-3 px-4 text-black">{client.name}</td>
                          <td className="py-3 px-4 text-gray-700">{client.industry}</td>
                          <td className="py-3 px-4">
                            <Badge className="bg-red-600/20 text-red-700">{client.contract}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusBadge(client.status)}>{client.status}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-gray-200 rounded h-2">
                                <div
                                  className={`h-full rounded`}
                                  style={{
                                    width: `${client.health}%`,
                                    background:
                                      client.health >= 80 ? "#22c55e" : client.health >= 60 ? "#eab308" : "#ef4444",
                                  }}
                                ></div>
                              </div>
                              <span
                                className={`text-xs font-semibold px-2 py-1 rounded ${getHealthColor(client.health)}`}
                              >
                                {client.health}%
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-green-600 font-semibold">{client.revenue}</td>
                          <td className="py-3 px-4 text-yellow-600">★ {client.satisfaction}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="ghost" className="text-red-500 hover:bg-red-50">
                                <Edit2 className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-red-500 hover:bg-red-50">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black">Monthly Revenue Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{ revenue: { color: "#dc2626" } }} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyRevenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="month" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#dc2626" name="Revenue (₹)" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black">Contract Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{ comprehensive: { color: "#dc2626" } }} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={contractDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {contractDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-black">Active Contracts Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{ contracts: { color: "#f87171" } }} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyRevenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="month" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="contracts" fill="#f87171" name="Active Contracts" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contracts" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-white border-gray-200">
                <CardContent className="pt-6">
                  <p className="text-gray-600 text-sm mb-2">Active Contracts</p>
                  <p className="text-3xl font-bold text-green-600">382</p>
                  <p className="text-xs text-gray-500 mt-2">+12 this month</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardContent className="pt-6">
                  <p className="text-gray-600 text-sm mb-2">Expiring Soon (30 days)</p>
                  <p className="text-3xl font-bold text-yellow-600">45</p>
                  <p className="text-xs text-gray-500 mt-2">Needs renewal</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardContent className="pt-6">
                  <p className="text-gray-600 text-sm mb-2">Expired</p>
                  <p className="text-3xl font-bold text-red-600">28</p>
                  <p className="text-xs text-gray-500 mt-2">Action required</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardContent className="pt-6">
                  <p className="text-gray-600 text-sm mb-2">Renewed This Year</p>
                  <p className="text-3xl font-bold text-red-600">127</p>
                  <p className="text-xs text-gray-500 mt-2">+5 this month</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </DashboardLayout>
  )
}
