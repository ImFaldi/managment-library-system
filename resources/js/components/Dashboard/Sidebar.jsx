import { forwardRef, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';

export default forwardRef(function Sidebar({ className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link href={route('dashboard')} active={route().current('dashboard')}>Dashboard</Link></li>
                    <li><a>Table</a></li>
                    <li><a>Profile</a></li>
                </ul>

            </div>
        </div>
    );
})