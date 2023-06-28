import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

function Sidebar() {
    const [active, setActive] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLinkClick = () => {
        setIsLoaded(true);
    }

    useEffect(() => {
        const currentPath = window.location.pathname;
        setActive(currentPath);
    }, []);

    const isActive = (path) => {
        return path === active ? 'tooltip tooltip-right active' : 'tooltip tooltip-right';
    }

    const showLoadingIndicator = () => {
        if (isLoaded) {
            return <span className="loading loading-ring loading-lg z-50 fixed top-1/2 left-1/2"></span>;
        }
        return null;
    };

    return (
        <div className="container-fluid px-5">
            <div className="card w-min bg-base-100 shadow-xl h-screen sticky top-5 mb-5 z-50">
                <ul className="menu bg-base-100 rounded-box pt-3">
                    <li>
                        <Link
                            // className="tooltip tooltip-right active" 
                            //active ketika di klik
                            className={isActive('/dashboard')}
                            data-tip="Home"
                            href={route('dashboard')}
                            onClick={handleLinkClick}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"><path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={isActive('/datatable')}
                            data-tip="Table"
                            href={route('datatable')}
                            onClick={handleLinkClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </Link>
                    </li>
                </ul>
            </div>
            {showLoadingIndicator()}
        </div>

    );
}

export default Sidebar;