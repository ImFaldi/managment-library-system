import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className=" w-96 h-full" src="https://i.pinimg.com/564x/f7/a3/d1/f7a3d1a4fb4110c05fea6721c18843ff.jpg" alt="Album" /></figure>
                <div className="card-body w-96">
                {children}
                    
                </div>
            </div>
        </div>
    );
}
