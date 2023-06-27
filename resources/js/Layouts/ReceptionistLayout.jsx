import Sidebar from '@/components/Dashboard/Sidebar';
import Navbar from '@/components/Dashboard/Navbar';
import Table from '@/components/Dashboard/Table';
import Stat from '@/components/Dashboard/Stat';

export default function Authenticated({ user}) {

    return (
        <div className="min-h-screen pt-3" style={{ background: 'linear-gradient(to bottom, rgba(0, 255, 0, 0.4) 30%, rgba(128, 128, 128, 0.1) 30%)' }}>
            <div class="flex flex-row">
                <Sidebar />
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid mt-2 pr-5"><Navbar user={user} /></div>
                    <div className="grid mt-2 pr-5"><Stat /></div>
                </div>
            </div>
        </div>
    );
}
