import { Link } from '@inertiajs/react';

function Navbar({ user }) {

    return (
        <div className="container-fluid mx-auto p-5 w-full">
            <div className="card bg-base-100 shadow-xl">
                <div className="navbar bg-base-100 rounded-box">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">Library Managment</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Link</a></li>
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