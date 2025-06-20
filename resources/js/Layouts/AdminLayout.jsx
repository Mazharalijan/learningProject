import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function AdminLayout({ children, settings = {} }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Initialize dark mode from localStorage
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        if (savedDarkMode) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    // Dark mode toggle
    const toggleDarkMode = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex h-full flex-col bg-white shadow-lg dark:bg-gray-800">
                    {/* Logo */}
                    <div className="flex h-16 shrink-0 items-center justify-center border-b border-gray-200 dark:border-gray-700">
                        <Link href="/admin" className="flex items-center space-x-2">
                            {settings.admin_panel_logo ? (
                                <img src={settings.admin_panel_logo} alt="Logo" className="h-8 w-8 rounded" />
                            ) : (
                                <ApplicationLogo className="h-8 w-8 text-gray-800 dark:text-white" />
                            )}
                            <span className="text-xl font-bold text-gray-800 dark:text-white">
                                {settings.admin_panel_name || 'Admin Panel'}
                            </span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-4">
                        <Link
                            href={route('admin.dashboard')}
                            className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                                route().current('admin.dashboard')
                                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                            }`}
                        >
                            <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                            </svg>
                            Dashboard
                        </Link>

                        <Link
                            href={route('admin.users')}
                            className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                                route().current('admin.users')
                                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                            }`}
                        >
                            <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                            </svg>
                            Users
                        </Link>

                        <Link
                            href={route('admin.settings')}
                            className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                                route().current('admin.settings')
                                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                            }`}
                        >
                            <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Settings
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col lg:pl-64">
                {/* Header */}
                <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:gap-x-6 sm:px-6 lg:px-8">
                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-300 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>

                    {/* Search bar */}
                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <div className="relative flex flex-1">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block h-full w-full border-0 bg-transparent py-0 pl-10 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 dark:text-white sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Right side controls */}
                    <div className="flex items-center gap-x-4 lg:gap-x-6">
                        {/* Dark mode toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                        >
                            <span className="sr-only">Toggle dark mode</span>
                            <svg className="hidden h-5 w-5 dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <svg className="block h-5 w-5 dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </button>

                        {/* User dropdown */}
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent bg-transparent px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:text-gray-300 dark:hover:text-white"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600">
                                                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                            <span>{user.name}</span>
                                            <svg
                                                className="-me-0.5 ms-2 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </header>

                {/* Mobile sidebar overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                    </div>
                )}

                {/* Main content area */}
                <main className="flex-1 py-6">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
 