// Simple mock service for Events
// Exports: getAllEvents, getEventById, createEvent, updateEvent, deleteEvent
// Currently uses in-memory mock data and Promise.resolve() to simulate async responses.
// Swap implementations to call a real backend (fetch/axios) easily by replacing the internals.

const mockEvents = [
  { id: 1, name: 'Spring Hackathon', date: '2026-03-12', location: 'Main Hall', capacity: 300, status: 'Upcoming', description: 'A weekend-long hackathon.' },
  { id: 2, name: 'Design Sprint', date: '2026-02-10', location: 'Room 204', capacity: 50, status: 'Past', description: 'Intensive design challenge.' },
  { id: 3, name: 'Alumni Meetup', date: '2026-04-01', location: 'Auditorium', capacity: 200, status: 'Upcoming', description: 'Reconnect with alumni.' }
]

// Helper: clone to avoid accidental external mutation
function clone(v) {
  return JSON.parse(JSON.stringify(v))
}

export function getAllEvents() {
  // Return a copy of mockEvents to simulate fetching from backend
  return Promise.resolve(clone(mockEvents))
}

export function getEventById(id) {
  const found = mockEvents.find((e) => String(e.id) === String(id)) || null
  return Promise.resolve(found ? clone(found) : null)
}

export function createEvent(data) {
  const next = { id: Date.now(), ...data }
  // mutate in-memory list so subsequent calls reflect the change
  mockEvents.unshift(next)
  return Promise.resolve(clone(next))
}

export function updateEvent(id, data) {
  const idx = mockEvents.findIndex((e) => String(e.id) === String(id))
  if (idx === -1) return Promise.resolve(null)
  mockEvents[idx] = { ...mockEvents[idx], ...data }
  return Promise.resolve(clone(mockEvents[idx]))
}

export function deleteEvent(id) {
  const idx = mockEvents.findIndex((e) => String(e.id) === String(id))
  if (idx === -1) return Promise.resolve(false)
  mockEvents.splice(idx, 1)
  return Promise.resolve(true)
}

// NOTE: To switch to real backend calls, replace the internals of these functions
// with `fetch('/api/events')` or `axios` calls and return the resulting Promise.
export async function fetchEvents() { return [] }
