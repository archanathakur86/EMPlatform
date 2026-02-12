import React, { useState } from 'react'

const initialUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', createdAt: '2025-08-12' },
  { id: 2, name: 'Bob Martin', email: 'bob@example.com', role: 'Coordinator', status: 'Active', createdAt: '2025-09-03' },
  { id: 3, name: 'Carmen Li', email: 'carmen@example.com', role: 'User', status: 'Inactive', createdAt: '2025-10-20' },
  { id: 4, name: 'Daniel Kim', email: 'daniel@example.com', role: 'User', status: 'Active', createdAt: '2025-11-11' },
  { id: 5, name: 'Eve Torres', email: 'eve@example.com', role: 'Moderator', status: 'Active', createdAt: '2026-01-02' }
]

export default function UsersManagementPage() {
  const [users, setUsers] = useState(initialUsers)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Student', status: 'Active' })
  const [errors, setErrors] = useState({})

  function handleAddUser() {
    const e = {}
    if (!newUser.name || !newUser.name.trim()) e.name = 'Name is required'
    if (!newUser.email || !newUser.email.trim()) e.email = 'Email is required'
    setErrors(e)
    if (Object.keys(e).length > 0) return

    const user = {
      id: Date.now(),
      name: newUser.name.trim(),
      email: newUser.email.trim(),
      role: newUser.role,
      status: newUser.status,
      createdAt: new Date().toISOString()
    }

    setUsers((u) => [user, ...u])
    setIsModalOpen(false)
    setNewUser({ name: '', email: '', role: 'Student', status: 'Active' })
    setErrors({})
  }
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  function openDeleteModal(user) {
    setSelectedUser(user)
    setIsDeleteModalOpen(true)
  }

  function handleDeleteUser() {
    if (!selectedUser) return
    setUsers((u) => u.filter((x) => x.id !== selectedUser.id))
    setIsDeleteModalOpen(false)
    setSelectedUser(null)
  }

  function toggleStatus(id) {
    setUsers((u) => u.map((x) => (x.id === id ? { ...x, status: x.status === 'Active' ? 'Inactive' : 'Active' } : x)))
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Users Management</h1>
          <p className="text-sm text-gray-500">Manage platform users and roles</p>
        </div>

        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Add User
          </button>
        </div>
      </header>

      <section className="bg-white border border-gray-100 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-900">Users</h2>
          <div className="text-sm text-gray-500">{users.length} users</div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-100">
            <thead className="bg-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Role</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Created Date</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-gray-800">{u.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{u.email}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{u.role}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${u.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-700'}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{formatDate(u.createdAt)}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-right">
                    <div className="inline-flex items-center gap-2">
                      <button onClick={() => toggleStatus(u.id)} className="px-2 py-1 rounded-md text-sm border border-gray-200 text-gray-700 hover:bg-gray-50">
                        {u.status === 'Active' ? 'Disable' : 'Enable'}
                      </button>
                      <button className="p-2 rounded-md hover:bg-gray-100 text-gray-600" aria-label="Edit">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <path d="M15.232 5.232l3.536 3.536M4 20l4-1 9.293-9.293a1 1 0 00-1.414-1.414L6.586 17.586 5 20z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        onClick={() => openDeleteModal(u)}
                        className="p-2 rounded-md hover:bg-gray-100 text-red-600"
                        aria-label="Delete"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <path d="M3 6h18M8 6v12a2 2 0 002 2h4a2 2 0 002-2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Add User Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="bg-white rounded-lg shadow-sm w-full max-w-lg mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-5">
              <h3 className="text-lg font-semibold text-gray-900">Add New User</h3>
              <p className="text-sm text-gray-500 mt-2">Fill in user details</p>
            </div>

            <div className="px-6 pb-6">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Full Name</label>
                  <input
                    value={newUser.name}
                    onChange={(e) => setNewUser((s) => ({ ...s, name: e.target.value }))}
                    type="text"
                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Email</label>
                  <input
                    value={newUser.email}
                    onChange={(e) => setNewUser((s) => ({ ...s, email: e.target.value }))}
                    type="email"
                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Role</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser((s) => ({ ...s, role: e.target.value }))}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option>Super Admin</option>
                    <option>Coordinator</option>
                    <option>Administration</option>
                    <option>Student</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Status</label>
                  <select
                    value={newUser.status}
                    onChange={(e) => setNewUser((s) => ({ ...s, status: e.target.value }))}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>

                <div className="md:col-span-2 flex items-center justify-end gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false)
                      setNewUser({ name: '', email: '', role: 'Student', status: 'Active' })
                    }}
                    className="px-4 py-2 rounded-md text-sm border border-gray-200 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddUser()}
                    className="px-4 py-2 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete User Modal */}
      {isDeleteModalOpen && selectedUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => {
            setIsDeleteModalOpen(false)
            setSelectedUser(null)
          }}
        >
          <div className="bg-white rounded-lg shadow-sm w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-5">
              <h3 className="text-lg font-semibold text-gray-900">Delete User</h3>
              <p className="text-sm text-gray-500 mt-2">
                Are you sure you want to delete <span className="font-medium">'{selectedUser.name}'</span>? This action cannot be undone.
              </p>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setIsDeleteModalOpen(false)
                  setSelectedUser(null)
                }}
                className="px-4 py-2 rounded-md text-sm border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteUser()}
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

