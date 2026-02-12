import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useLocation, Link } from 'react-router-dom'

export default function Navbar() {
  const { user, setUser } = useAuth()
  const [open, setOpen] = useState(false)
  const menuRef = useRef()
  const location = useLocation()

  useEffect(() => {
    function onDoc(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  function handleLogout() {
    if (setUser) setUser(null)
  }

  const title = mapPathToTitle(location.pathname)

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-800">{title}</div>

        <div className="flex items-center gap-4">
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setOpen((s) => !s)}
              className="flex items-center gap-2 p-1 rounded hover:bg-gray-50"
              aria-expanded={open}
            >
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                {user?.name ? user.name[0].toUpperCase() : 'A'}
              </div>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-md shadow-sm py-1">
                <Link to="/profile" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Profile
                </Link>
                <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

function mapPathToTitle(path) {
  if (path.startsWith('/events')) return 'Events'
  if (path.startsWith('/users')) return 'Users'
  if (path.startsWith('/attendance')) return 'Attendance'
  if (path.startsWith('/notifications')) return 'Notifications'
  if (path.startsWith('/logs')) return 'Login Logs'
  if (path.startsWith('/admin')) return 'Dashboard'
  return 'EventHub'
}
