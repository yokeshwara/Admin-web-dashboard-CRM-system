"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit2, Trash2 } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

/* ================= TYPES ================= */

type Asset = {
  id: number
  name: string
  client: string
  status: string
  health: number
  lastService: string
  nextService: string
  cost: string
}

type MaintenanceRecord = {
  date: string
  type: "Preventive" | "Corrective"
  cost: string
  engineer: string
  notes: string
}

/* ================= DATA ================= */

const assetsData: Record<string, Asset[]> = {
  comprehensive: [
    {
      id: 1,
      name: "HVAC System - Floor 3",
      client: "TechCorp Industries",
      status: "Active",
      health: 95,
      lastService: "2024-01-10",
      nextService: "2024-04-10",
      cost: "₹45,000",
    },
    {
      id: 2,
      name: "Elevator #2",
      client: "Skyline Towers",
      status: "Active",
      health: 88,
      lastService: "2024-01-05",
      nextService: "2024-04-05",
      cost: "₹38,000",
    },
  ],
  semi: [
    {
      id: 3,
      name: "Fire Safety System",
      client: "Nexus Real Estate",
      status: "Active",
      health: 82,
      lastService: "2024-01-15",
      nextService: "2024-05-15",
      cost: "₹28,000",
    },
  ],
  non: [
    {
      id: 4,
      name: "UPS System",
      client: "Global Logistics Ltd",
      status: "Needs Attention",
      health: 45,
      lastService: "2023-11-01",
      nextService: "2024-02-01",
      cost: "₹15,000",
    },
  ],
}

const maintenanceHistory: MaintenanceRecord[] = [
  {
    date: "2024-01-10",
    type: "Preventive",
    cost: "₹5,000",
    engineer: "Rajesh Kumar",
    notes: "Routine maintenance completed",
  },
  {
    date: "2024-01-05",
    type: "Corrective",
    cost: "₹12,000",
    engineer: "Priya Sharma",
    notes: "Replaced compressor unit",
  },
]

/* ================= COMPONENTS ================= */

function AssetRow({ asset }: { asset: Asset }) {
  const statusColor =
    asset.status === "Active"
      ? "bg-green-100 text-green-800"
      : asset.status === "Scheduled Maintenance"
      ? "bg-blue-100 text-blue-800"
      : "bg-red-100 text-red-800"

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">{asset.name}</td>
      <td className="px-4 py-3">{asset.client}</td>
      <td className="px-4 py-3">
        <Badge className={statusColor}>{asset.status}</Badge>
      </td>
      <td className="px-4 py-3">{asset.health}%</td>
      <td className="px-4 py-3">{asset.lastService}</td>
      <td className="px-4 py-3">{asset.nextService}</td>
      <td className="px-4 py-3 font-semibold text-green-600">
        {asset.cost}
      </td>
      <td className="px-4 py-3 flex gap-2">
        <Button size="sm" variant="ghost">
          <Edit2 size={16} />
        </Button>
        <Button size="sm" variant="ghost">
          <Trash2 size={16} />
        </Button>
      </td>
    </tr>
  )
}

/* ================= MAIN ================= */

export default function AssetsContent() {
  const [search, setSearch] = useState("")

  const renderTable = (data: Asset[]) => (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Search size={18} className="text-gray-400" />
          <Input
            placeholder="Search assets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left px-4 py-3">Asset</th>
              <th className="text-left px-4 py-3">Client</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Health</th>
              <th className="text-left px-4 py-3">Last</th>
              <th className="text-left px-4 py-3">Next</th>
              <th className="text-left px-4 py-3">Cost</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((asset) => (
              <AssetRow key={asset.id} asset={asset} />
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )

  return (
    <DashboardLayout>
      <div className="p-8 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold">Assets Management</h1>
              <p className="text-gray-600">
                Track and manage customer assets
              </p>
            </div>
            <Button className="bg-red-600 text-white">
              <Plus size={16} className="mr-2" />
              Register Asset
            </Button>
          </div>

          {/* 🔴 RED TABS */}
          <Tabs defaultValue="comprehensive">
            <TabsList className="bg-gray-100 border border-gray-200">
              <TabsTrigger
                value="comprehensive"
                className="hover:bg-red-50 data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Comprehensive
              </TabsTrigger>
              <TabsTrigger
                value="semi"
                className="hover:bg-red-50 data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Semi
              </TabsTrigger>
              <TabsTrigger
                value="non"
                className="hover:bg-red-50 data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Non
              </TabsTrigger>
              <TabsTrigger
                value="maintenance"
                className="hover:bg-red-50 data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Maintenance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="comprehensive">
              {renderTable(assetsData.comprehensive)}
            </TabsContent>

            <TabsContent value="semi">
              {renderTable(assetsData.semi)}
            </TabsContent>

            <TabsContent value="non">
              {renderTable(assetsData.non)}
            </TabsContent>

            <TabsContent value="maintenance">
              <Card>
                <CardHeader>
                  <CardTitle>Maintenance History</CardTitle>
                  <CardDescription>
                    Service & repair records
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {maintenanceHistory.map((m, i) => (
                    <div
                      key={i}
                      className="border rounded-lg p-4 bg-gray-50"
                    >
                      <div className="flex justify-between mb-2">
                        <div>
                          <p className="font-semibold">{m.type}</p>
                          <p className="text-sm text-gray-500">
                            {m.date}
                          </p>
                        </div>
                        <Badge>{m.type}</Badge>
                      </div>
                      <p className="text-sm text-gray-700">{m.notes}</p>
                      <div className="flex justify-between text-sm mt-2">
                        <span>Engineer: {m.engineer}</span>
                        <span className="text-green-600 font-semibold">
                          {m.cost}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  )
}
