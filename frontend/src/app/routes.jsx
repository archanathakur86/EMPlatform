import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../modules/public/pages/HomePage'
import DashboardLayout from '../core/layout/DashboardLayout'

import SuperAdminDashboard from '../modules/admin/pages/SuperAdminDashboard'
import EventsListPage from '../modules/events/pages/EventsListPage'
import CreateEventPage from '../modules/events/pages/CreateEventPage'
import EditEventPage from '../modules/events/pages/EditEventPage'
import UsersManagementPage from '../modules/users/pages/UsersManagementPage'
import AttendancePage from '../modules/attendance/pages/AttendancePage'
import NotificationsPage from '../modules/notifications/pages/NotificationsPage'
import LoginLogsPage from '../modules/logs/pages/LoginLogsPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Admin routes grouped under /admin. Each admin route is wrapped with DashboardLayout
          (we keep DashboardLayout unchanged and pass page components as children). */}
      <Route path="/admin">
        <Route
          index
          element={
            <DashboardLayout>
              <SuperAdminDashboard />
            </DashboardLayout>
          }
        />

        <Route
          path="events"
          element={
            <DashboardLayout>
              <EventsListPage />
            </DashboardLayout>
          }
        />

        <Route
          path="events/create"
          element={
            <DashboardLayout>
              <CreateEventPage />
            </DashboardLayout>
          }
        />

        <Route
          path="events/:id/edit"
          element={
            <DashboardLayout>
              <EditEventPage />
            </DashboardLayout>
          }
        />

        <Route
          path="users"
          element={
            <DashboardLayout>
              <UsersManagementPage />
            </DashboardLayout>
          }
        />

        <Route
          path="attendance"
          element={
            <DashboardLayout>
              <AttendancePage />
            </DashboardLayout>
          }
        />

        <Route
          path="notifications"
          element={
            <DashboardLayout>
              <NotificationsPage />
            </DashboardLayout>
          }
        />

        <Route
          path="logs"
          element={
            <DashboardLayout>
              <LoginLogsPage />
            </DashboardLayout>
          }
        />
      </Route>
    </Routes>
  )
}
