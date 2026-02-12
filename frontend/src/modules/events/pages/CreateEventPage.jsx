import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EventForm from '../components/EventForm'
import { createEvent } from '../../../services/eventService'

export default function CreateEventPage() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)

  async function handleCreate(vals) {
    if (submitting) return
    setSubmitting(true)
    try {
      await createEvent(vals)
      navigate('/admin/events')
    } catch (e) {
      // Keep simple: swallow error for now (could set an error state)
      // console.error(e)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Create New Event</h1>
        <p className="text-sm text-gray-500">Fill in event details below</p>
      </header>

      <div className={submitting ? 'opacity-60 pointer-events-none' : ''} aria-busy={submitting}>
        <EventForm
          initialValues={{}}
          isEditMode={false}
          onCancel={() => navigate('/admin/events')}
          onSubmit={handleCreate}
        />
      </div>
    </div>
  )
}

