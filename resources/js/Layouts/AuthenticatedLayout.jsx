import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Sidebar from '@/components/Dashboard/Sidebar';
import Navbar from '@/components/Dashboard/Navbar';
import Table from '@/components/Dashboard/Table';
import Stat from '@/components/Dashboard/Stat';
import Footer from '@/components/Footer';

export default function Authenticated({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <div class="flex flex-row w-full">
                <Navbar user={user} />
            </div>

            <div class="flex flex-row">
                <Sidebar />
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid pl-5">
                        <div className="text-sm breadcrumbs">
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>Documents</a></li>
                                <li>Add Document</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid mt-2 pr-5"><Stat /></div>
                    <div className="grid mt-5 pr-5"><Table /></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
