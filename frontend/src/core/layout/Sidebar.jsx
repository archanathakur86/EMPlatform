import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { key: 'dashboard', label: 'Dashboard', to: '/admin', icon: HomeIcon },
  { key: 'events', label: 'Events', to: '/admin/events', icon: CalendarIcon },
  { key: 'users', label: 'Users', to: '/admin/users', icon: UsersIcon },
  { key: 'attendance', label: 'Attendance', to: '/admin/attendance', icon: CheckIcon },
  { key: 'notifications', label: 'Notifications', to: '/admin/notifications', icon: BellIcon },
  { key: 'logs', label: 'Login Logs', to: '/admin/logs', icon: LogIcon }
]

export default function Sidebar({ collapsed, onToggle, isMobileOpen }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-30 bg-white border-r border-gray-200 transition-all duration-200 ease-in-out ${
        collapsed ? 'w-20' : 'w-64'
      }`}
      aria-expanded={!collapsed}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className={`font-semibold tracking-wider text-lg ${collapsed ? 'hidden md:inline' : ''}`}>
              EVENTHUB
            </span>
            <svg
              className={`h-6 w-6 text-blue-600 ${collapsed ? '' : 'hidden md:inline'}`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <button
            onClick={onToggle}
            className="inline-flex items-center justify-center p-1 rounded hover:bg-gray-100"
            aria-label="Toggle sidebar"
          >
            <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="px-2 space-y-1">
            {navItems.map((item) => (
              <li key={item.key}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors ${
                      isActive ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-500' : ''
                    }`
                  }
                >
                  <span className="flex items-center justify-center w-6 h-6 text-gray-500">
                    <item.icon />
                  </span>
                  <span className={`${collapsed ? 'hidden' : 'inline'}`}>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-3 py-3 border-t border-gray-100">
          <button
            onClick={onToggle}
            className="w-full flex items-center gap-2 justify-center py-2 rounded-md text-sm bg-gray-50 hover:bg-gray-100"
          >
            <svg className="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={`${collapsed ? 'hidden' : ''}`}>Collapse</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

function HomeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 21V10h14v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

function CheckIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LogIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
