import React, { useMemo, useState } from 'react'

const mockLogs = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Admin',
    loginTime: '2026-02-12T08:34:00.000Z',
    logoutTime: '2026-02-12T12:00:00.000Z',
    location: 'New York, USA',
    status: 'Offline'
  },
  {
    id: 2,
    name: 'Bob Martin',
    email: 'bob@example.com',
    role: 'Coordinator',
    loginTime: '2026-02-12T09:10:00.000Z',
    logoutTime: null,
    location: 'London, UK',
    status: 'Online'
  },
  {
    id: 3,
    name: 'Carmen Li',
    email: 'carmen@example.com',
    role: 'User',
    loginTime: '2026-02-11T14:20:00.000Z',
    logoutTime: '2026-02-11T16:30:00.000Z',
    location: 'Mumbai, India',
    status: 'Offline'
  },
  {
    id: 4,
    name: 'Daniel Kim',
    email: 'daniel@example.com',
    role: 'User',
    loginTime: '2026-02-10T07:45:00.000Z',
    logoutTime: '2026-02-10T09:00:00.000Z',
    location: 'Seoul, South Korea',
    status: 'Offline'
  },
  {
    id: 5,
    name: 'Eve Torres',
    email: 'eve@example.com',
    role: 'Moderator',
    loginTime: '2026-02-12T10:05:00.000Z',
    logoutTime: null,
    location: 'Toronto, Canada',
    status: 'Online'
  }
]

export default function LoginLogsPage() {
  const [logs] = useState(mockLogs)
  const [roleFilter, setRoleFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState('')

  const roles = useMemo(() => {
    const set = new Set(logs.map((l) => l.role))
    return ['all', ...Array.from(set)]
  }, [logs])

  function resetFilters() {
    setRoleFilter('all')
    setDateFilter('')
  }

  const filtered = useMemo(() => {
    return logs.filter((l) => {
      if (roleFilter !== 'all' && l.role !== roleFilter) return false
      if (dateFilter) {
        const ld = new Date(l.loginTime)
        const target = new Date(dateFilter)
        if (ld.getFullYear() !== target.getFullYear() || ld.getMonth() !== target.getMonth() || ld.getDate() !== target.getDate()) return false
      }
      return true
    })
  }, [logs, roleFilter, dateFilter])

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Login Logs</h1>
          <p className="text-sm text-gray-500">Track user login and logout activity</p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {roles.map((r) => (
              <option key={r} value={r}>{r === 'all' ? 'All Roles' : r}</option>
            ))}
          </select>

          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <button onClick={resetFilters} className="px-3 py-2 text-sm border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50">Clear Filters</button>
        </div>
      </header>

      <section className="bg-white border border-gray-100 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-900">Logs</h2>
          <div className="text-sm text-gray-500">{filtered.length} records</div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-100">
            <thead className="bg-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">User Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Role</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Login Time</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Logout Time</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Location</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {filtered.map((l) => (
                <tr key={l.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-gray-800">{l.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{l.email}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{l.role}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{new Date(l.loginTime).toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{l.logoutTime ? new Date(l.logoutTime).toLocaleString() : '—'}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{l.location}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${l.status === 'Online' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-700'}`}>
                      {l.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
