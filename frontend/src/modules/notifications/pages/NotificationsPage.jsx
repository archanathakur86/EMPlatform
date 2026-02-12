import React, { useState } from 'react'

const initialNotifications = [
  { id: 1, subject: 'Event Reminder: Spring Hackathon', body: 'Don\'t forget to register!', sentAt: '2026-02-01T10:00:00.000Z', sentBy: 'Admin User' },
  { id: 2, subject: 'Venue Change: Design Sprint', body: 'Venue updated to Room 204', sentAt: '2026-01-20T14:30:00.000Z', sentBy: 'Coordinator' }
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form, setForm] = useState({ subject: '', body: '' })

  function resetForm() {
    setForm({ subject: '', body: '' })
  }

  function handleSend() {
    if (!form.subject.trim() || !form.body.trim()) return
    const n = {
      id: Date.now(),
      subject: form.subject.trim(),
      body: form.body.trim(),
      sentAt: new Date().toISOString(),
      sentBy: 'Admin User'
    }
    setNotifications((s) => [n, ...s])
    setIsModalOpen(false)
    resetForm()
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
          <p className="text-sm text-gray-500">Send updates to registered attendees</p>
        </div>

        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Compose Notification
          </button>
        </div>
      </header>

      {/* Compose Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => { setIsModalOpen(false); resetForm() }}>
          <div className="bg-white rounded-lg shadow-sm w-full max-w-2xl mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-5">
              <h3 className="text-lg font-semibold text-gray-900">Compose Notification</h3>
              <p className="text-sm text-gray-500 mt-2">Create a message to send to attendees</p>
            </div>

            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Subject</label>
                  <input
                    value={form.subject}
                    onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Notification subject"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Message Body</label>
                  <textarea
                    value={form.body}
                    onChange={(e) => setForm((s) => ({ ...s, body: e.target.value }))}
                    rows={6}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Write your message here"
                  />
                </div>

                <div className="flex items-center justify-end gap-3">
                  <button
                    onClick={() => { setIsModalOpen(false); resetForm() }}
                    className="px-4 py-2 rounded-md text-sm border border-gray-200 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSend}
                    className="px-4 py-2 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Send Notification
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="bg-white border border-gray-100 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-900">Notification History</h2>
          <div className="text-sm text-gray-500">{notifications.length} entries</div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-100">
            <thead className="bg-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Subject</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Sent Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Sent By</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {notifications.map((n) => (
                <tr key={n.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-gray-800">{n.subject}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{new Date(n.sentAt).toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{n.sentBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

