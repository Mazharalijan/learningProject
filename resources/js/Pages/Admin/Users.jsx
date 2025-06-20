import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function AdminUsers() {
    // Sample user data - in a real app, this would come from props
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', created_at: '2024-01-15' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', created_at: '2024-01-14' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive', created_at: '2024-01-13' },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Active', created_at: '2024-01-12' },
    ];

    return (
        <AdminLayout>
            <Head title="Admin Users" />

            <div className="space-y-6">
                {/* Page header */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Users Management
                            </h1>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Manage all users in your application.
                            </p>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                            Add User
                        </button>
                    </div>
                </div>

                {/* Users table */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">All Users</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Created
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                            {user.name.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                        {user.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                                        {user.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                user.status === 'Active' 
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                            }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {user.created_at}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2">
                                                <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                                                    Edit
                                                </button>
                                                <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
} 