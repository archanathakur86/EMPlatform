import React, { useState } from 'react'

export default function EventForm({ initialValues = {}, isEditMode = false, onCancel = () => {}, onSubmit = () => {} }) {
  const [form, setForm] = useState({
    name: initialValues.name || '',
    description: initialValues.description || '',
    date: initialValues.date || '',
    location: initialValues.location || '',
    capacity: initialValues.capacity || '',
    status: initialValues.status || 'Active'
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <section className="bg-white border border-gray-100 rounded-lg p-6">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm text-gray-700">Event Name</label>
          <input name="name" value={form.name} onChange={handleChange} type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Enter event name" />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-700">Event Date</label>
          <input name="date" value={form.date} onChange={handleChange} type="date" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>

        <div className="space-y-2 lg:col-span-2">
          <label className="text-sm text-gray-700">Event Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="4" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Describe the event"></textarea>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-700">Location</label>
          <input name="location" value={form.location} onChange={handleChange} type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Venue or address" />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-700">Capacity</label>
          <input name="capacity" value={form.capacity} onChange={handleChange} type="number" min="0" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Max attendees" />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-700">Event Status</label>
          <select name="status" value={form.status} onChange={handleChange} className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>Active</option>
            <option>Upcoming</option>
            <option>Past</option>
          </select>
        </div>

        <div className="lg:col-span-2 flex items-center justify-end gap-3 mt-2">
          <button type="button" onClick={() => onCancel()} className="px-4 py-2 rounded-md text-sm border border-gray-200 text-gray-700 hover:bg-gray-50">Cancel</button>
          <button type="submit" className="px-4 py-2 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700">{isEditMode ? 'Update Event' : 'Create Event'}</button>
        </div>
      </form>
    </section>
  )
}
