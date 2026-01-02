"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, MoreVertical, Star, MapPin, Phone } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const engineers = [
  {
    id: "ENG001",
    name: "Rahul Sharma",
    specialty: "HVAC Specialist",
    rating: 4.8,
    status: "Active",
    tasks: 12,
    location: "Mumbai South",
    contact: "+91 98765 43210",
  },
  {
    id: "ENG002",
    name: "Amit Verma",
    specialty: "Electrical Engineer",
    rating: 4.5,
    status: "Busy",
    tasks: 8,
    location: "Mumbai West",
    contact: "+91 98765 43211",
  },
  {
    id: "ENG003",
    name: "Priya Singh",
    specialty: "Plumbing Expert",
    rating: 4.9,
    status: "Active",
    tasks: 15,
    location: "Thane",
    contact: "+91 98765 43212",
  },
  {
    id: "ENG004",
    name: "Vikram Malhotra",
    specialty: "Security Systems",
    rating: 4.2,
    status: "Leave",
    tasks: 0,
    location: "Navi Mumbai",
    contact: "+91 98765 43213",
  },
]

export default function EngineersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Engineer Directory</h1>
            <p className="text-slate-500 mt-1">Manage and track your service engineering team.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
            <Plus className="w-4 h-4 mr-2" />
            Add New Engineer
          </Button>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search by name, ID or specialty..."
              className="pl-10 border-slate-200 focus-visible:ring-primary/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" className="flex-1 md:flex-none bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="flex-1 md:flex-none bg-transparent">
              Export
            </Button>
          </div>
        </div>

        {/* Engineer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {engineers.map((engineer) => (
            <Card key={engineer.id} className="border-none shadow-sm hover:shadow-md transition-shadow group">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16 ring-2 ring-white shadow-md">
                        <AvatarImage src={`/.jpg?height=64&width=64&query=${engineer.name}`} />
                        <AvatarFallback className="bg-primary/5 text-primary font-bold">
                          {engineer.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span
                        className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                          engineer.status === "Active"
                            ? "bg-green-500"
                            : engineer.status === "Busy"
                              ? "bg-amber-500"
                              : "bg-slate-300"
                        }`}
                      ></span>
                    </div>
                    <Button variant="ghost" size="icon" className="text-slate-400 opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">{engineer.name}</h3>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-0.5">
                      {engineer.specialty}
                    </p>
                    <div className="flex items-center gap-1 mt-2 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold">{engineer.rating}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="text-xs">{engineer.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span className="text-xs">{engineer.contact}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Open Tasks</p>
                    <p className="text-sm font-bold text-slate-900">{engineer.tasks}</p>
                  </div>
                  <Button variant="ghost" className="text-primary text-xs font-bold hover:bg-primary/5 px-0">
                    VIEW PROFILE
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
