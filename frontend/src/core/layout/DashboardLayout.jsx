import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    // collapse sidebar by default on small screens
    function setInitial() {
      setCollapsed(window.innerWidth < 768)
    }
    setInitial()
    window.addEventListener('resize', setInitial)
    return () => window.removeEventListener('resize', setInitial)
  }, [])

  const sidebarWidthClass = collapsed ? 'ml-20' : 'ml-64'

  return (
    <div className={`min-h-screen bg-[#F8FAFC] ${sidebarWidthClass} transition-all duration-200`}> 
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((s) => !s)} />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-screen-xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}

