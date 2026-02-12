import React from 'react'
import { useNavigate } from 'react-router-dom'

const stats = [
  { id: 1, label: 'Total Events', value: 128, icon: EventIcon },
  { id: 2, label: 'Total Users', value: 4520, icon: UsersIcon },
  { id: 3, label: 'Total Tickets', value: 8792, icon: TicketIcon },
  { id: 4, label: 'Total Revenue', value: '$124,320', icon: RevenueIcon }
]

const recentEvents = [
  { id: 1, title: 'Spring Hackathon', date: 'Feb 8, 2026', status: 'Published' },
  { id: 2, title: 'Design Sprint', date: 'Feb 6, 2026', status: 'Draft' },
  { id: 3, title: 'Alumni Meetup', date: 'Feb 3, 2026', status: 'Published' },
  { id: 4, title: 'Career Fair', date: 'Jan 28, 2026', status: 'Cancelled' },
  { id: 5, title: 'Music Night', date: 'Jan 20, 2026', status: 'Published' }
]

const recentUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active' },
  { id: 2, name: 'Bob Martin', email: 'bob@example.com', status: 'Invited' },
  { id: 3, name: 'Carmen Li', email: 'carmen@example.com', status: 'Active' },
  { id: 4, name: 'Daniel Kim', email: 'daniel@example.com', status: 'Suspended' },
  { id: 5, name: 'Eve Torres', email: 'eve@example.com', status: 'Active' }
]

export default function SuperAdminDashboard() {
  const navigate = useNavigate()
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.id}
              className="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-50 text-blue-600">
                <s.icon />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main content: Recent Activity + Quick Actions */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-100 rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Recent Events</h3>
              <div className="text-sm text-gray-500">Showing 5</div>
            </div>
            <ul className="space-y-3">
              {recentEvents.map((e) => (
                <li key={e.id} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-800">{e.title}</div>
                    <div className="text-xs text-gray-400">{e.date}</div>
                  </div>
                  <div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        e.status === 'Published'
                          ? 'bg-green-50 text-green-700'
                          : e.status === 'Draft'
                          ? 'bg-gray-50 text-gray-700'
                          : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {e.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Recent Users</h3>
              <div className="text-sm text-gray-500">Showing 5</div>
            </div>
            <ul className="space-y-3">
              {recentUsers.map((u) => (
                <li key={u.id} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-800">{u.name}</div>
                    <div className="text-xs text-gray-400">{u.email}</div>
                  </div>
                  <div>
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${statusClass(u.status)}`}>
                      {u.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-lg p-5">
            <h4 className="text-md font-medium text-gray-900 mb-3">Quick Actions</h4>
            <div className="flex flex-col space-y-3">
              <button onClick={() => navigate('/admin/events/create')} className="w-full text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Create Event</button>
              <button onClick={() => navigate('/admin/users')} className="w-full text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Add User</button>
              <button onClick={() => navigate('/admin/notifications')} className="w-full text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Send Notification</button>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-5">
            <h4 className="text-md font-medium text-gray-900 mb-2">Overview</h4>
            <p className="text-sm text-gray-500">All systems nominal. No critical alerts.</p>
          </div>
        </aside>
      </section>
    </div>
  )
}

function statusClass(status) {
  if (status === 'Active') return 'bg-green-50 text-green-700'
  if (status === 'Invited') return 'bg-yellow-50 text-yellow-700'
  if (status === 'Suspended') return 'bg-red-50 text-red-700'
  return 'bg-gray-50 text-gray-700'
}

function EventIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 11h10v6H7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function TicketIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M3 7h18v10H3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function RevenueIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
