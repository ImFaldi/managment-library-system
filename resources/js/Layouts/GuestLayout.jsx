import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className=" w-80 h-full" src="https://i.seadn.io/gcs/files/1abdc91888c2c328f58fa623b56a7593.png?auto=format&dpr=1&w=1000" alt="Album" /></figure>
                <div className="card-body w-80">
                {children}
                    
                </div>
            </div>
        </div>
    );
}
