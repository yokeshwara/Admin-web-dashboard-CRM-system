"use client"

import { cn } from "@/lib/utils"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreVertical, Laptop, Server, Smartphone, ShieldCheck } from "lucide-react"

const assets = [
  {
    id: "AST-001",
    name: "High-Speed Server",
    category: "Infrastructure",
    type: "Comprehensive",
    status: "Operational",
    lastService: "2024-12-10",
    icon: Server,
  },
  {
    id: "AST-002",
    name: "MacBook Pro M3",
    category: "Computing",
    type: "Non-Comprehensive",
    status: "Under Repair",
    lastService: "2025-01-05",
    icon: Laptop,
  },
  {
    id: "AST-003",
    name: "Industrial UPS",
    category: "Power",
    type: "Semi-Comprehensive",
    status: "Operational",
    lastService: "2024-11-20",
    icon: ShieldCheck,
  },
  {
    id: "AST-004",
    name: "Network Router",
    category: "Networking",
    type: "Comprehensive",
    status: "Operational",
    lastService: "2024-12-28",
    icon: Smartphone,
  },
]

export function AssetsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {assets.map((asset) => (
        <Card key={asset.id} className="border-none shadow-sm hover:shadow-md transition-shadow group">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-primary/10 transition-colors">
                <asset.icon className="w-5 h-5 text-slate-600 group-hover:text-primary" />
              </div>
              <div>
                <CardTitle className="text-sm font-bold text-slate-900">{asset.name}</CardTitle>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{asset.id}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge
                variant="secondary"
                className="bg-slate-100 text-slate-600 border-none font-bold text-[10px] uppercase"
              >
                {asset.category}
              </Badge>
              <Badge className="bg-primary/10 text-primary border-none font-bold text-[10px] uppercase">
                {asset.type}
              </Badge>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-4">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Last Service</p>
                <p className="text-xs font-semibold text-slate-700">{asset.lastService}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Status</p>
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase",
                    asset.status === "Operational" ? "text-green-600" : "text-amber-600",
                  )}
                >
                  {asset.status}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
