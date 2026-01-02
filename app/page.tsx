import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  Briefcase,
  AlertCircle,
  FileText,
  Wrench,
  UserCog,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Package,
  Star,
  BarChart3,
  Download,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
              AMC Management Dashboard
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 font-bold uppercase tracking-wider">
                Live
              </Badge>
            </h1>
            <p className="text-slate-600 font-medium mt-1.5">
              Complete overview of contracts, services, engineers, and customer feedback
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Button variant="outline" className="rounded-xl font-semibold h-11 bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button className="rounded-xl bg-primary hover:bg-primary/90 shadow-lg font-semibold h-11">
              <AlertCircle className="w-4 h-4 mr-2" />
              New Service Request
            </Button>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Active AMC Contracts",
              value: "482",
              change: "+12.5%",
              trend: "up",
              icon: Briefcase,
              color: "bg-blue-500",
            },
            {
              label: "Open Service Calls",
              value: "24",
              change: "-8.3%",
              trend: "down",
              icon: Wrench,
              color: "bg-amber-500",
            },
            {
              label: "Active Engineers",
              value: "38",
              change: "+2",
              trend: "up",
              icon: UserCog,
              color: "bg-green-500",
            },
            {
              label: "Customer Satisfaction",
              value: "4.8/5",
              change: "+0.3",
              trend: "up",
              icon: Star,
              color: "bg-purple-500",
            },
          ].map((metric, i) => (
            <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  {/* Updated to circular full-color backgrounds with white icons and hover effects */}
                  <div
                    className={cn(
                      "p-3 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:shadow-md",
                      metric.color,
                      "text-white",
                    )}
                  >
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 text-sm font-bold">
                    {metric.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-600" />
                    )}
                    <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>{metric.change}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</h3>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Recent Service Requests - Large Section */}
          <Card className="xl:col-span-2 border-none shadow-lg">
            <CardHeader className="border-b bg-slate-50/50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">Recent Service Requests</CardTitle>
                  <p className="text-sm text-slate-500 font-medium mt-1">Latest complaints and service calls</p>
                </div>
                <Button variant="ghost" className="text-primary font-semibold hover:bg-red-50">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    id: "SR-2024-001",
                    customer: "TechCorp Industries",
                    asset: "HVAC System - Floor 3",
                    type: "Comprehensive",
                    priority: "High",
                    status: "Assigned",
                    engineer: "Rajesh Kumar",
                    time: "2 hours ago",
                  },
                  {
                    id: "SR-2024-002",
                    customer: "Global Logistics Ltd",
                    asset: "Generator 500KVA",
                    type: "Semi-Comprehensive",
                    priority: "Critical",
                    status: "In Progress",
                    engineer: "Priya Sharma",
                    time: "5 hours ago",
                  },
                  {
                    id: "SR-2024-003",
                    customer: "Nexus Real Estate",
                    asset: "Fire Safety System",
                    type: "Non-Comprehensive",
                    priority: "Medium",
                    status: "Pending Quote",
                    engineer: "Unassigned",
                    time: "1 day ago",
                  },
                  {
                    id: "SR-2024-004",
                    customer: "Skyline Towers",
                    asset: "Elevator #2",
                    type: "Comprehensive",
                    priority: "Low",
                    status: "Completed",
                    engineer: "Amit Patel",
                    time: "2 days ago",
                  },
                ].map((request, i) => (
                  <div key={i} className="p-5 hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-bold text-sm text-slate-900">{request.id}</span>
                          <Badge
                            variant="outline"
                            className={cn(
                              "font-bold uppercase text-[10px] tracking-wider",
                              request.priority === "Critical"
                                ? "border-red-500 text-red-700 bg-red-50"
                                : request.priority === "High"
                                  ? "border-amber-500 text-amber-700 bg-amber-50"
                                  : request.priority === "Medium"
                                    ? "border-blue-500 text-blue-700 bg-blue-50"
                                    : "border-slate-500 text-slate-700 bg-slate-50",
                            )}
                          >
                            {request.priority}
                          </Badge>
                          <Badge variant="outline" className="font-semibold text-[10px]">
                            {request.type}
                          </Badge>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1">{request.customer}</h4>
                        <p className="text-sm text-slate-600 font-medium mb-2">{request.asset}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <UserCog className="w-3 h-3" />
                            {request.engineer}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {request.time}
                          </span>
                        </div>
                      </div>
                      <Badge
                        className={cn(
                          "font-bold uppercase text-[10px] tracking-wider shrink-0",
                          request.status === "Completed"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : request.status === "In Progress"
                              ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                              : request.status === "Assigned"
                                ? "bg-purple-100 text-purple-700 hover:bg-purple-100"
                                : "bg-amber-100 text-amber-700 hover:bg-amber-100",
                        )}
                      >
                        {request.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Engineer Allocation Status */}
          <Card className="border-none shadow-lg">
            <CardHeader className="border-b bg-slate-50/50">
              <CardTitle className="text-xl font-bold text-slate-900">Engineer Allocation</CardTitle>
              <p className="text-sm text-slate-500 font-medium mt-1">Real-time workload tracking</p>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              {[
                { name: "Rajesh Kumar", avatar: "/diverse-avatars.png", active: 3, load: 85, status: "Busy" },
                { name: "Priya Sharma", avatar: "/diverse-avatars.png", active: 2, load: 60, status: "Active" },
                { name: "Amit Patel", avatar: "/diverse-avatars.png", active: 1, load: 30, status: "Available" },
                { name: "Suresh Reddy", avatar: "/diverse-avatars.png", active: 4, load: 95, status: "Overloaded" },
              ].map((engineer, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border-2 border-slate-100">
                        <AvatarImage src={engineer.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-primary text-white font-bold">
                          {engineer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-sm text-slate-900">{engineer.name}</p>
                        <p className="text-xs text-slate-500 font-medium">{engineer.active} active jobs</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={cn(
                        "font-bold text-[10px] uppercase tracking-wider",
                        engineer.load >= 90
                          ? "border-red-500 text-red-700 bg-red-50"
                          : engineer.load >= 60
                            ? "border-amber-500 text-amber-700 bg-amber-50"
                            : "border-green-500 text-green-700 bg-green-50",
                      )}
                    >
                      {engineer.status}
                    </Badge>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium">Workload</span>
                      <span className="font-bold text-slate-900">{engineer.load}%</span>
                    </div>
                    <Progress value={engineer.load} className="h-2" />
                  </div>
                </div>
              ))}
              <Button className="w-full rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 font-semibold mt-4">
                View All Engineers
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Pending Quotes */}
          <Card className="border-none shadow-lg">
            <CardHeader className="border-b bg-slate-50/50">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-slate-900">Pending Quotes</CardTitle>
                <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 font-bold">8</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  { id: "QT-2024-045", customer: "TechCorp", amount: "₹45,000", status: "Awaiting Approval" },
                  { id: "QT-2024-046", customer: "Global Log", amount: "₹32,500", status: "Under Review" },
                  { id: "QT-2024-047", customer: "Nexus Real", amount: "₹28,000", status: "Customer Review" },
                ].map((quote, i) => (
                  <div key={i} className="p-4 hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-slate-900">{quote.id}</span>
                      <span className="font-bold text-sm text-primary">{quote.amount}</span>
                    </div>
                    <p className="text-sm text-slate-600 font-medium mb-2">{quote.customer}</p>
                    <Badge variant="outline" className="text-[10px] font-semibold">
                      {quote.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <Button variant="ghost" className="w-full text-primary font-semibold hover:bg-red-50">
                  View All Quotes →
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Spare Requests */}
          <Card className="border-none shadow-lg">
            <CardHeader className="border-b bg-slate-50/50">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-slate-900">Spare Requests</CardTitle>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 font-bold">12</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  { item: "HVAC Compressor Unit", qty: 2, priority: "Urgent", engineer: "Rajesh K." },
                  { item: "Fire Alarm Sensor", qty: 5, priority: "Medium", engineer: "Priya S." },
                  { item: "Generator Oil Filter", qty: 3, priority: "Low", engineer: "Amit P." },
                ].map((spare, i) => (
                  <div key={i} className="p-4 hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-bold text-sm text-slate-900 mb-1">{spare.item}</h4>
                        <p className="text-xs text-slate-500 font-medium">Requested by {spare.engineer}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className={cn(
                          "font-bold text-[10px] uppercase tracking-wider",
                          spare.priority === "Urgent"
                            ? "border-red-500 text-red-700 bg-red-50"
                            : spare.priority === "Medium"
                              ? "border-amber-500 text-amber-700 bg-amber-50"
                              : "border-slate-500 text-slate-700 bg-slate-50",
                        )}
                      >
                        {spare.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium">Quantity: {spare.qty}</span>
                      <Button size="sm" variant="ghost" className="h-7 text-xs font-semibold text-primary">
                        Approve
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <Button variant="ghost" className="w-full text-primary font-semibold hover:bg-red-50">
                  Manage Inventory →
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Customer Feedback */}
          <Card className="border-none shadow-lg">
            <CardHeader className="border-b bg-slate-50/50">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-slate-900">Recent Feedback</CardTitle>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-900">4.8</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    customer: "Arun Verma",
                    rating: 5,
                    comment: "Excellent service! Very prompt and professional.",
                    time: "2h ago",
                  },
                  {
                    customer: "Sneha Gupta",
                    rating: 4,
                    comment: "Good work, but took slightly longer than expected.",
                    time: "5h ago",
                  },
                  {
                    customer: "Vikram Singh",
                    rating: 5,
                    comment: "Outstanding! Engineer was very knowledgeable.",
                    time: "1d ago",
                  },
                ].map((feedback, i) => (
                  <div key={i} className="p-4 hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-slate-900">{feedback.customer}</span>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className={cn(
                              "w-3 h-3",
                              j < feedback.rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200",
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 font-medium mb-2 leading-relaxed">{feedback.comment}</p>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {feedback.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <Button variant="ghost" className="w-full text-primary font-semibold hover:bg-red-50">
                  View All Reviews →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AMC Contract Overview and Performance Stats */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* AMC Contracts Status */}
          <Card className="border-none shadow-lg">
            <CardHeader className="border-b bg-slate-50/50">
              <CardTitle className="text-xl font-bold text-slate-900">AMC Contract Status</CardTitle>
              <p className="text-sm text-slate-500 font-medium mt-1">Contract lifecycle management</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Active", value: 382, color: "text-green-600", bg: "bg-green-100" },
                  { label: "Expiring Soon", value: 45, color: "text-amber-600", bg: "bg-amber-100" },
                  { label: "Expired", value: 28, color: "text-red-600", bg: "bg-red-100" },
                  { label: "Renewed", value: 127, color: "text-blue-600", bg: "bg-blue-100" },
                ].map((stat, i) => (
                  <div key={i} className={cn("p-4 rounded-xl", stat.bg)}>
                    <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className={cn("text-2xl font-bold", stat.color)}>{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-slate-700">Comprehensive Coverage</span>
                    <span className="font-bold text-slate-900">245 contracts</span>
                  </div>
                  <Progress value={64} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-slate-700">Semi-Comprehensive</span>
                    <span className="font-bold text-slate-900">98 contracts</span>
                  </div>
                  <Progress value={26} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-slate-700">Non-Comprehensive</span>
                    <span className="font-bold text-slate-900">39 contracts</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="border-none shadow-lg">
            <CardHeader className="border-b bg-slate-50/50">
              <CardTitle className="text-xl font-bold text-slate-900">Performance Metrics</CardTitle>
              <p className="text-sm text-slate-500 font-medium mt-1">Service quality indicators</p>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              {[
                { label: "Average Response Time", value: "2.4 hrs", target: "< 4 hrs", progress: 85, status: "good" },
                {
                  label: "First-Time Fix Rate",
                  value: "87%",
                  target: "> 80%",
                  progress: 87,
                  status: "excellent",
                },
                { label: "SLA Compliance", value: "94%", target: "> 90%", progress: 94, status: "excellent" },
                {
                  label: "Customer Satisfaction",
                  value: "4.8/5",
                  target: "> 4.5",
                  progress: 96,
                  status: "excellent",
                },
              ].map((metric, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-slate-900">{metric.label}</p>
                      <p className="text-xs text-slate-500 font-medium">Target: {metric.target}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-slate-900">{metric.value}</p>
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-[10px] font-bold uppercase tracking-wider mt-1",
                          metric.status === "excellent"
                            ? "border-green-500 text-green-700 bg-green-50"
                            : "border-blue-500 text-blue-700 bg-blue-50",
                        )}
                      >
                        {metric.status}
                      </Badge>
                    </div>
                  </div>
                  <Progress
                    value={metric.progress}
                    className={cn("h-2", metric.status === "excellent" ? "bg-green-100" : "bg-blue-100")}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section: Notifications and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* System Notifications */}
          <Card className="lg:col-span-2 border-none shadow-lg">
            <CardHeader className="border-b bg-slate-50/50">
              <CardTitle className="text-xl font-bold text-slate-900">System Notifications & Alerts</CardTitle>
              <p className="text-sm text-slate-500 font-medium mt-1">Important updates and reminders</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    type: "Contract Expiry",
                    message: "5 AMC contracts expiring within 30 days",
                    icon: Calendar,
                    color: "bg-amber-500",
                    time: "Today",
                  },
                  {
                    type: "Spare Approval",
                    message: "3 spare requests pending admin approval",
                    icon: Package,
                    color: "bg-blue-500",
                    time: "2h ago",
                  },
                  {
                    type: "Quote Expiry",
                    message: "2 pending quotes will expire tomorrow",
                    icon: FileText,
                    color: "bg-red-500",
                    time: "5h ago",
                  },
                  {
                    type: "Engineer Overload",
                    message: "1 engineer exceeds 90% workload capacity",
                    icon: AlertCircle,
                    color: "bg-purple-500",
                    time: "1d ago",
                  },
                ].map((notif, i) => (
                  <div key={i} className="p-5 hover:bg-slate-50/50 transition-colors flex items-start gap-4 group">
                    {/* Updated to rounded-full with solid colors and hover scale effect */}
                    <div
                      className={cn(
                        "p-3 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110",
                        notif.color,
                        "text-white",
                      )}
                    >
                      <notif.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-sm text-slate-900">{notif.type}</h4>
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                          {notif.time}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 font-medium">{notif.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-red-600 text-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">Quick Actions</CardTitle>
              <p className="text-sm text-white/80 font-medium mt-1">Frequently used operations</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl">
                <Users className="w-4 h-4 mr-3" />
                Add New Customer
              </Button>
              <Button className="w-full justify-start h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl">
                <UserCog className="w-4 h-4 mr-3" />
                Register Engineer
              </Button>
              <Button className="w-full justify-start h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl">
                <Briefcase className="w-4 h-4 mr-3" />
                Create AMC <br/> <br/> Contract
              </Button>
              <Button className="w-full justify-start h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl">
                <BarChart3 className="w-4 h-4 mr-3" />
                Generate Report
              </Button>
              <Button className="w-full justify-start h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl">
                <Settings className="w-4 h-4 mr-3" />
                Manage Roles
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
