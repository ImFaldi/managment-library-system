import { Link } from '@inertiajs/react';

function Navbar({ user }) {

    return (
        <div className="container-fluid mx-auto w-full pb-3">
            <div className="card bg-base-100 shadow-md">
                <div className="navbar bg-base-100 rounded-box">
                    <div className="flex flex-wrap">
                        <div class="grid grid-cols-3 gap-4">
                            <div className="col-start-1 col-end-4">
                                <a className="btn btn-ghost normal-case text-xl">Library Managment</a>
                            </div>
                            <div className="col-start-1 col-end-4 mx-5" style={{ marginTop: '-10%' }}>
                                <div className="text-sm breadcrumbs">
                                    <ul>
                                        <li><a>Home</a></li>
                                        <li><a>Documents</a></li>
                                        <li>Add Document</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex-1 justify-end">
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