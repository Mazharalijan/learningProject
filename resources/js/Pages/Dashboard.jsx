import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AdminLayout>
            <Head title="Dashboard" />

            <div className="space-y-6">
                {/* Page header */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Dashboard
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Welcome to your dashboard.
                    </p>
                        </div>

                 <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <p className="text-gray-900 dark:text-white">You're logged in!</p>
                </div>
            </div>
        </AdminLayout>
    );
}
