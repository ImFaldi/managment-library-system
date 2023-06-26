import Admin from '@/Layouts/AdminTable';
import { Head } from '@inertiajs/react';
export default function DataTable({ auth }) {
    return (
        <Admin user={auth.user}>
        </Admin>
    );
}
