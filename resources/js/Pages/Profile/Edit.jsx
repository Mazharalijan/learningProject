import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    const { settings } = usePage().props;
    return (
        <AdminLayout settings={settings}>
            <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 p-4 shadow sm:rounded-lg sm:p-8">
                        <section className="dark:text-white">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                        </section>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 shadow sm:rounded-lg sm:p-8">
                        <section className="dark:text-white">
                        <UpdatePasswordForm className="max-w-xl" />
                        </section>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 shadow sm:rounded-lg sm:p-8">
                        <section className="dark:text-white">
                        <DeleteUserForm className="max-w-xl" />
                        </section>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
