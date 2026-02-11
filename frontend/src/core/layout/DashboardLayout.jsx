import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function DashboardLayout({ children }) {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}
