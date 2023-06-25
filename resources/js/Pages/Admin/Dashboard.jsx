import Admin from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
export default function Dashboard({ auth }) {
    return (
        
        <Admin user={auth.user}>
        </Admin>
    );
}
