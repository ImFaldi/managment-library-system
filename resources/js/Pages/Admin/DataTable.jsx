import AdminTable from '@/Layouts/AdminTable';
import { Head } from '@inertiajs/react';
export default function DataTable({ auth }) {
    return (
        
        <AdminTable user={auth.user}>
        </AdminTable>
    );
}
