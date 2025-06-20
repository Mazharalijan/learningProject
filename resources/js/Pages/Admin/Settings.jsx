import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage } from '@inertiajs/react';

export default function AdminSettings() {
    const { settings } = usePage().props;
    return (
        <AdminLayout settings={settings}>
            <Head title="Admin Settings" />

            <div className="space-y-6">
                {/* Page header */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Settings
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Manage your application settings here.
                    </p>
                </div>

                {/* Settings form */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <form>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="site-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Site Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="site-name"
                                        id="site-name"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm"
                                        defaultValue="My Awesome App"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="support-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Support Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="support-email"
                                        id="support-email"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm"
                                        defaultValue="support@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Save Settings
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
 