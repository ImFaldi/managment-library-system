import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Sidebar from '@/components/Dashboard/Sidebar';
export default function Dashboard({ auth }) {
    return (

        <Sidebar />
    );
}
