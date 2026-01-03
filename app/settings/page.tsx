"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toggle } from "@/components/ui/toggle"
import { Badge } from "@/components/ui/badge"
import { Bell, Settings, Users, AlertCircle, Mail, Phone, Clock, CheckIcon } from "lucide-react"
import { CheckboxItem } from "@radix-ui/react-context-menu"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Checkbox } from "@/components/ui/checkbox"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    contractExpiry: true,
    pendingQuotes: true,
    spareRequests: true,
    engineerAlerts: true,
    emailNotifications: true,
    smsNotifications: false,
  })

  const [slaSettings, setSlaSettings] = useState({
    responseTime: "4",
    resolutionTime: "24",
    availability: "99.5",
  })

  return (
     <DashboardLayout>
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black">Settings</h1>
          <p className="text-gray-600 mt-2">Manage system configuration, notifications, and user permissions</p>
        </div>

        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="bg-white border border-gray-200 grid w-full grid-cols-4">
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-black"
            >
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="sla"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-black"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              SLA Management
            </TabsTrigger>
            <TabsTrigger
              value="roles"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-black"
            >
              <Users className="w-4 h-4 mr-2" />
              Roles & Permissions
            </TabsTrigger>
            <TabsTrigger
              value="system"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-black"
            >
              <Settings className="w-4 h-4 mr-2" />
              System Settings
            </TabsTrigger>
          </TabsList>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Notification Preferences</CardTitle>
                <CardDescription className="text-gray-600">Customize alerts for important events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Email Notifications */}
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black flex items-center gap-2">
                      <Mail className="w-5 h-5 text-red-500" />
                      Email Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-black text-sm font-semibold">Contract Expiry</p>
                        <p className="text-gray-600 text-xs">AMC contracts ending soon</p>
                      </div>
                      <Toggle
                        pressed={notifications.contractExpiry}
                        onPressedChange={(v) => setNotifications({ ...notifications, contractExpiry: v })}
                        className="data-[state=on]:bg-red-600"
                      >
                        {notifications.contractExpiry ? "✓" : ""}
                      </Toggle>
                    </div>
                    <div className="border-t border-gray-200"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-black text-sm font-semibold">Pending Quotes</p>
                        <p className="text-gray-600 text-xs">New quote requests and updates</p>
                      </div>
                      <Toggle
                        pressed={notifications.pendingQuotes}
                        onPressedChange={(v) => setNotifications({ ...notifications, pendingQuotes: v })}
                        className="data-[state=on]:bg-red-600"
                      >
                        {notifications.pendingQuotes ? "✓" : ""}
                      </Toggle>
                    </div>
                    <div className="border-t border-gray-200"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-black text-sm font-semibold">Spare Requests</p>
                        <p className="text-gray-600 text-xs">New spare part requests</p>
                      </div>
                      <Toggle
                        pressed={notifications.spareRequests}
                        onPressedChange={(v) => setNotifications({ ...notifications, spareRequests: v })}
                        className="data-[state=on]:bg-red-600"
                      >
                        {notifications.spareRequests ? "✓" : ""}
                      </Toggle>
                    </div>
                  </CardContent>
                </Card>

                {/* SMS Notifications */}
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black flex items-center gap-2">
                      <Phone className="w-5 h-5 text-red-500" />
                      SMS Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-black text-sm font-semibold">Engineer Alerts</p>
                        <p className="text-gray-600 text-xs">Engineer assignment & status</p>
                      </div>
                      <Toggle
                        pressed={notifications.engineerAlerts}
                        onPressedChange={(v) => setNotifications({ ...notifications, engineerAlerts: v })}
                        className="data-[state=on]:bg-red-600"
                      >
                        {notifications.engineerAlerts ? "✓" : ""}
                      </Toggle>
                    </div>
                    <div className="border-t border-gray-200"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-black text-sm font-semibold">Critical Issues</p>
                        <p className="text-gray-600 text-xs">High priority incidents only</p>
                      </div>
                      <Toggle className="data-[state=on]:bg-red-600">✓</Toggle>
                    </div>
                    <div className="border-t border-gray-200"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-black text-sm font-semibold">Threshold Alerts</p>
                        <p className="text-gray-600 text-xs">SLA compliance alerts</p>
                      </div>
                      <Toggle className="data-[state=on]:bg-red-600">✓</Toggle>
                    </div>
                  </CardContent>
                </Card>

                {/* Notification Channels */}
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black">Channel Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-black text-sm font-semibold">Email Notifications</p>
                      <Toggle
                        pressed={notifications.emailNotifications}
                        onPressedChange={(v) => setNotifications({ ...notifications, emailNotifications: v })}
                        className="data-[state=on]:bg-red-600"
                      >
                        {notifications.emailNotifications ? "✓" : ""}
                      </Toggle>
                    </div>
                    <div className="border-t border-gray-200"></div>
                    <div className="flex items-center justify-between">
                      <p className="text-black text-sm font-semibold">SMS Notifications</p>
                      <Toggle
                        pressed={notifications.smsNotifications}
                        onPressedChange={(v) => setNotifications({ ...notifications, smsNotifications: v })}
                        className="data-[state=on]:bg-red-600"
                      >
                        {notifications.smsNotifications ? "✓" : ""}
                      </Toggle>
                    </div>
                    <div className="border-t border-gray-200"></div>
                    <div className="flex items-center justify-between">
                      <p className="text-black text-sm font-semibold">In-App Notifications</p>
                      <Toggle className="data-[state=on]:bg-red-600">✓</Toggle>
                    </div>
                    <Button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white">Save Preferences</Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SLA Management Tab */}
          <TabsContent value="sla">
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black">SLA Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-black text-sm font-semibold mb-2">
                      <Clock className="w-4 h-4 inline mr-2 text-red-600" />
                      Response Time Target (hours)
                    </label>
                    <Input
                      type="number"
                      value={slaSettings.responseTime}
                      onChange={(e) => setSlaSettings({ ...slaSettings, responseTime: e.target.value })}
                      className="bg-gray-50 border-gray-200 text-black"
                    />
                    <p className="text-gray-600 text-xs mt-1">Maximum hours to respond to requests</p>
                  </div>

                  <div>
                    <label className="block text-black text-sm font-semibold mb-2">
                      <AlertCircle className="w-4 h-4 inline mr-2 text-yellow-500" />
                      Resolution Time Target (hours)
                    </label>
                    <Input
                      type="number"
                      value={slaSettings.resolutionTime}
                      onChange={(e) => setSlaSettings({ ...slaSettings, resolutionTime: e.target.value })}
                      className="bg-gray-50 border-gray-200 text-black"
                    />
                    <p className="text-gray-600 text-xs mt-1">Maximum hours to resolve issues</p>
                  </div>

                  <div>
                    <label className="block text-black text-sm font-semibold mb-2">
                      <AlertCircle className="w-4 h-4 inline mr-2 text-green-600" />
                      System Availability Target (%)
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={slaSettings.availability}
                      onChange={(e) => setSlaSettings({ ...slaSettings, availability: e.target.value })}
                      className="bg-gray-50 border-gray-200 text-black"
                    />
                    <p className="text-gray-600 text-xs mt-1">Minimum system uptime percentage</p>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Update SLA Settings</Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black">Current Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700 text-sm mb-2">Average Response Time</p>
                    <p className="text-2xl font-bold text-green-600">2.4 hours</p>
                    <p className="text-xs text-gray-600 mt-1">Target: {slaSettings.responseTime} hours ✓</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700 text-sm mb-2">Average Resolution Time</p>
                    <p className="text-2xl font-bold text-green-600">18.5 hours</p>
                    <p className="text-xs text-gray-600 mt-1">Target: {slaSettings.resolutionTime} hours ✓</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700 text-sm mb-2">System Availability</p>
                    <p className="text-2xl font-bold text-green-600">99.8%</p>
                    <p className="text-xs text-gray-600 mt-1">Target: {slaSettings.availability}% ✓</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700 text-sm mb-2">Support Tickets</p>
                    <p className="text-2xl font-bold text-blue-600">1,234</p>
                    <p className="text-xs text-gray-600 mt-1">Total resolved this month</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Roles & Permissions Tab */}
          <TabsContent value="roles">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Role-Based Access Control</CardTitle>
                <CardDescription className="text-gray-600">Manage user roles and their permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {["Admin", "Sub-Admin", "Engineer", "Customer"].map((role) => (
                    <div key={role} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-black font-semibold">{role}</h3>
                        <Badge className="bg-red-600">{role === "Admin" ? "0 Users" : "5 Users"}</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {["View", "Create", "Edit", "Delete", "Approve", "Export"].map((perm) => (
                       
                        <label key={perm} className="flex items-center gap-2 cursor-pointer">
  <Checkbox defaultChecked={role !== "Customer"} />
  <span className="text-sm text-gray-700">{perm}</span>
</label>
                            
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Settings Tab */}
          <TabsContent value="system">
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black">Company Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-black text-sm font-semibold mb-2">Company Name</label>
                    <Input defaultValue="AMC PRO Enterprise" className="bg-white border-gray-200 text-black" />
                  </div>
                  <div>
                    <label className="block text-black text-sm font-semibold mb-2">Support Email</label>
                    <Input defaultValue="support@amcpro.com" className="bg-white border-gray-200 text-black" />
                  </div>
                  <div>
                    <label className="block text-black text-sm font-semibold mb-2">Support Phone</label>
                    <Input defaultValue="+91 9876543210" className="bg-white border-gray-200 text-black" />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Save Changes</Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black">Custom Fields Management</CardTitle>
                  <CardDescription className="text-gray-600">Add custom fields for your workflows</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded border border-gray-200 flex justify-between items-center">
                    <span className="text-gray-800 text-sm">Service Type</span>
                    <Badge className="bg-green-600/30 text-green-700">Active</Badge>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200 flex justify-between items-center">
                    <span className="text-gray-800 text-sm">Priority Level</span>
                    <Badge className="bg-green-600/30 text-green-700">Active</Badge>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200 flex justify-between items-center">
                    <span className="text-gray-800 text-sm">Equipment Category</span>
                    <Badge className="bg-green-600/30 text-green-700">Active</Badge>
                  </div>
                  <Button variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 bg-white">
                    + Add Custom Field
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-black">Approval Workflows</CardTitle>
                  <CardDescription className="text-gray-600">
                    Configure automatic and manual approval processes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-black font-semibold">Quote Approval Workflow</p>
                        <Toggle defaultPressed className="data-[state=on]:bg-red-600">
                          ✓
                        </Toggle>
                      </div>
                      <p className="text-gray-600 text-sm">Admin → Finance → Client Approval</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-black font-semibold">Spare Request Workflow</p>
                        <Toggle defaultPressed className="data-[state=on]:bg-red-600">
                          ✓
                        </Toggle>
                      </div>
                      <p className="text-gray-600 text-sm">Admin → Warehouse → Dispatch</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-black font-semibold">Service Report Approval</p>
                        <Toggle className="data-[state=on]:bg-red-600">✓</Toggle>
                      </div>
                      <p className="text-gray-600 text-sm">Engineer → Admin → Client</p>
                    </div>
                  </div>
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
