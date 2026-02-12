import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllEvents } from '../../../services/eventService'

export default function EventsListPage() {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await getAllEvents()
        if (mounted) setEvents(Array.isArray(data) ? data : [])
      } catch (e) {
        if (mounted) setError('Failed to load events')
      } finally {
        if (mounted) setLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Events Management</h1>
          <p className="text-sm text-gray-500">Manage and monitor all platform events</p>
        </div>

        <div>
          <button
            onClick={() => navigate('/admin/events/create')}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Create Event
          </button>
        </div>
      </header>

      {loading ? (
        <div className="p-6">Loading events...</div>
      ) : error ? (
        <div className="p-6 text-red-600">Error: {error}</div>
      ) : (
        <section className="bg-white border border-gray-100 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-900">Events</h2>
          <div className="text-sm text-gray-500">5 items</div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-100">
            <thead className="bg-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Event Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Location</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Capacity</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Created By</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {events.map((ev) => (
                <tr key={ev.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-gray-800">{ev.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{formatDate(ev.date)}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{ev.location}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{ev.capacity}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{ev.createdBy}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${statusBadge(ev.status)}`}>
                      {ev.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/admin/events/${ev.id}/edit`)}
                        className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
                        aria-label="Edit"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <path d="M15.232 5.232l3.536 3.536M4 20l4-1 9.293-9.293a1 1 0 00-1.414-1.414L6.586 17.586 5 20z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          setSelectedEvent(ev)
                          setIsModalOpen(true)
                        }}
                        className="p-2 rounded-md hover:bg-gray-100 text-red-600"
                        aria-label="Delete"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <path d="M3 6h18M8 6v12a2 2 0 002 2h4a2 2 0 002-2V6M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </section>
      )}

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => {
            setIsModalOpen(false)
            setSelectedEvent(null)
          }}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-lg shadow-sm w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-5">
              <h3 id="modal-title" className="text-lg font-semibold text-gray-900">Delete Event</h3>
              <p className="text-sm text-gray-500 mt-2">
                Are you sure you want to delete {selectedEvent && <span className="font-medium">'{selectedEvent.name}'</span>}? This action cannot be undone.
              </p>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setIsModalOpen(false)
                  setSelectedEvent(null)
                }}
                className="px-4 py-2 rounded-md text-sm border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (selectedEvent) {
                    setEvents((es) => {
                      const updated = es.filter((x) => x.id !== selectedEvent.id)
                      localStorage.setItem('events', JSON.stringify(updated))
                      return updated
                    })
                  }
                  setIsModalOpen(false)
                  setSelectedEvent(null)
                }}
                className="px-4 py-2 rounded-md text-sm bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function formatDate(d) {
  try {
    const dt = new Date(d)
    return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  } catch (e) {
    return d
  }
}

function statusBadge(status) {
  if (status === 'Active') return 'bg-green-50 text-green-700'
  if (status === 'Upcoming') return 'bg-blue-50 text-blue-700'
  if (status === 'Past') return 'bg-gray-50 text-gray-700'
  return 'bg-gray-50 text-gray-700'
}

