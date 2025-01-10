import React from 'react'
import { Bell, Calendar, Home, LogOut, Users } from 'lucide-react'

const Button = ({ variant, size, children }) => (
  <button className={`btn ${variant} ${size}`}>{children}</button>
)

const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-6">{children}</div>
)

const CardHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
)

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
)

const CardContent = ({ children }) => (
  <div>{children}</div>
)

const Progress = ({ value }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${value}%` }}></div>
  </div>
)

const AccommodatorPortal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Accommodator Portal</h1>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Home className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button variant="ghost" size="sm">
              <Users className="w-4 h-4 mr-2" />
              Students
            </Button>
            <Button variant="ghost" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Rooms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">200</div>
              <Progress value={75} />
              <p className="text-xs text-gray-500 mt-2">75% occupied</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Visits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-gray-500 mt-2">For next 7 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
              <p className="text-xs text-gray-500 mt-2">5 new since last login</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>New student registration</span>
                  <span className="text-sm text-gray-500">2 mins ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Room assignment updated</span>
                  <span className="text-sm text-gray-500">1 hour ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Maintenance request resolved</span>
                  <span className="text-sm text-gray-500">3 hours ago</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schedule a Visit</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="visitorName" className="block text-sm font-medium text-gray-700">
                    Visitor Name
                  </label>
                  <input
                    type="text"
                    id="visitorName"
                    name="visitorName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700">
                    Visit Date
                  </label>
                  <input
                    type="date"
                    id="visitDate"
                    name="visitDate"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  Schedule Visit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default AccommodatorPortal

