import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EventForm from '../components/EventForm'

export default function EditEventPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [initial, setInitial] = useState(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('events')
      const arr = raw ? JSON.parse(raw) : []
      const found = arr.find((e) => String(e.id) === String(id))
      if (found) setInitial(found)
      else setInitial(null)
    } catch (e) {
      setInitial(null)
    }
  }, [id])

  function handleUpdate(vals) {
    try {
      const raw = localStorage.getItem('events')
      const arr = raw ? JSON.parse(raw) : []
      const updated = arr.map((e) => (String(e.id) === String(id) ? { ...e, ...vals } : e))
      localStorage.setItem('events', JSON.stringify(updated))
    } catch (e) {
      // ignore
    }
    navigate('/admin/events')
  }

  if (!initial) {
    return (
      <div className="p-6">
        <div className="text-sm text-gray-500">Event not found.</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Edit Event</h1>
        <p className="text-sm text-gray-500">Update event details below</p>
      </header>

      <EventForm initialValues={initial} isEditMode={true} onCancel={() => navigate('/admin/events')} onSubmit={handleUpdate} />
    </div>
  )
}
