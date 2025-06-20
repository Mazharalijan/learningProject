import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage } from '@inertiajs/react';

export default function AdminDashboard() {
    const { settings } = usePage().props;
    return (
        <AdminLayout settings={settings}>
            <Head title="Admin Dashboard" />

            <div className="space-y-6">
                {/* Page header */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Admin Dashboard
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Welcome to your admin panel. Here you can manage your application.
                    </p>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Users</p>
                                <p className="text-2xl font-semibold text-gray-900 dark:text-white">1,234</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Users</p>
                                <p className="text-2xl font-semibold text-gray-900 dark:text-white">987</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</p>
                                <p className="text-2xl font-semibold text-gray-900 dark:text-white">$12,345</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending</p>
                                <p className="text-2xl font-semibold text-gray-900 dark:text-white">23</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent activity */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recent Activity</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900 dark:text-white">New user registered</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900 dark:text-white">Payment received</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">5 minutes ago</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900 dark:text-white">System update completed</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900 dark:text-white">Failed login attempt</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
} 