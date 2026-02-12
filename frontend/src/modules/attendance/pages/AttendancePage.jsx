import React, { useState } from 'react'

const mockEvents = [
  { id: 1, name: 'Spring Hackathon' },
  { id: 2, name: 'Design Sprint' },
  { id: 3, name: 'Alumni Meetup' }
]

const initialAttendance = [
  { id: 1, studentName: 'Alice Johnson', email: 'alice@example.com', eventId: 1, eventName: 'Spring Hackathon', ticketId: 'TCK-1001', status: 'Present' },
  { id: 2, studentName: 'Bob Martin', email: 'bob@example.com', eventId: 1, eventName: 'Spring Hackathon', ticketId: 'TCK-1002', status: 'Absent' },
  { id: 3, studentName: 'Carmen Li', email: 'carmen@example.com', eventId: 2, eventName: 'Design Sprint', ticketId: 'TCK-2001', status: 'Present' },
  { id: 4, studentName: 'Daniel Kim', email: 'daniel@example.com', eventId: 3, eventName: 'Alumni Meetup', ticketId: 'TCK-3001', status: 'Absent' },
  { id: 5, studentName: 'Eve Torres', email: 'eve@example.com', eventId: 2, eventName: 'Design Sprint', ticketId: 'TCK-2002', status: 'Present' }
]

export default function AttendancePage() {
  const [selectedEvent, setSelectedEvent] = useState('all')
  const [attendance, setAttendance] = useState(initialAttendance)

  function handleMark(id, value) {
    setAttendance((a) => a.map((r) => (r.id === id ? { ...r, status: value } : r)))
  }

  const filtered = selectedEvent === 'all' ? attendance : attendance.filter((a) => String(a.eventId) === String(selectedEvent))

  return (
    <div className="space-y-6">
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Attendance Management</h1>
          <p className="text-sm text-gray-500">Monitor and manage event participation</p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All Events</option>
            {mockEvents.map((ev) => (
              <option key={ev.id} value={ev.id}>{ev.name}</option>
            ))}
          </select>

          <button onClick={() => exportCSV()} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Export
          </button>
        </div>
      </header>

      <section className="bg-white border border-gray-100 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-900">Attendance</h2>
          <div className="text-sm text-gray-500">{filtered.length} records</div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-100">
            <thead className="bg-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Student Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Event Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Ticket ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Mark Attendance</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {filtered.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-gray-800">{r.studentName}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{r.email}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{r.eventName}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{r.ticketId}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${r.status === 'Present' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <select
                      value={r.status}
                      onChange={(e) => handleMark(r.id, e.target.value)}
                      className="border border-gray-200 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                    </select>
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

  function exportCSV() {
    try {
      const raw = localStorage.getItem('attendance')
      // fallback to DOM read if no stored attendance; build from default initialAttendance
      const rows = raw ? JSON.parse(raw) : null
      const data = rows || []
      if (data.length === 0) {
        // If no stored, use the hardcoded initial list from file
        // Note: replicate the default array used in this module
        const defaultRows = [
          { id: 1, studentName: 'Alice Johnson', email: 'alice@example.com', eventName: 'Spring Hackathon', ticketId: 'TCK-1001', status: 'Present' },
          { id: 2, studentName: 'Bob Martin', email: 'bob@example.com', eventName: 'Spring Hackathon', ticketId: 'TCK-1002', status: 'Absent' },
          { id: 3, studentName: 'Carmen Li', email: 'carmen@example.com', eventName: 'Design Sprint', ticketId: 'TCK-2001', status: 'Present' }
        ]
        downloadCSV(defaultRows)
      } else {
        downloadCSV(data)
      }
    } catch (e) {
      // ignore
    }
  }

  function downloadCSV(rows) {
    if (!rows || rows.length === 0) return
    const headers = Object.keys(rows[0])
    const csv = [headers.join(',')]
    for (const r of rows) {
      csv.push(headers.map((h) => '"' + String(r[h] ?? '') + '"').join(','))
    }
    const blob = new Blob([csv.join('\n')], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'attendance.csv'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

