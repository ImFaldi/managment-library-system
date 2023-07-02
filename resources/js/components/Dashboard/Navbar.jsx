import { Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

function Navbar({ user }) {
    const [breadcrumb, setBreadcrumb] = useState([]);

    useEffect(() => {
        const path = window.location.pathname;
        setBreadcrumb(path);
    }, []);

    return (
        <div className="container-fluid mx-auto w-full pb-3">
            <div className="card bg-base-100 shadow-md">
                <div className="navbar bg-base-100 rounded-box">
                    <div className="flex flex-wrap">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-start-1 col-end-4">
                                <a className="btn btn-ghost normal-case text-xl">Library Managment</a>
                            </div>
                            <div className="col-start-1 col-end-4 mx-5" style={{ marginTop: '-12%' }}>
                                <div className="text-sm breadcrumbs">
                                    <ul>
                                        <li><Link href={route('dashboard')}>Dashboard</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 justify-end">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <details>
                                    <summary>
                                        {user.name}
                                    </summary>
                                    <ul className="p-2 bg-base-100 z-50 rounded-box shadow-xl">
                                        <li><Link href={route('logout')} method="post" as="button">Logout</Link></li>
                                        <li><Link href={route('profile.edit')} method="get" as="button">Profile</Link></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;  