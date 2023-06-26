import { useState, useEffect } from 'react';
import Sidebar from '@/components/Dashboard/Sidebar';
import Navbar from '@/components/Dashboard/Navbar';
import Table from '@/components/Dashboard/Table';
import Stat from '@/components/Dashboard/Stat';
import Borrow from '@/components/Dashboard/Borrow';
import axios from 'axios';


export default function Authenticated({ user }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/User')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    console.log(data);
    return (
        <div className="min-h-screen pt-3" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 255, 0.4) 35%, rgba(128, 128, 128, 0.1) 35%)' }}>
            <div class="flex flex-row">
                <Sidebar />
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid mt-2 pr-5"><Navbar user={user} /></div>
                    <div className="grid mt-2 pr-5"><Stat /></div>
                    <div class="flex">
                        <div className="mt-5 pr-5 w-full">
                            <Table
                                title="User Table"
                                columns={[
                                    'Name',
                                    'Role',
                                    'Phone',
                                    'Action']}
                                rows={data.user ? data.user.map((user) => ({
                                    name : user.name,
                                    email : user.email,
                                    role : user.role,
                                    phone : user.phone,
                                    action : 'action'
                                })) : []}
                            />
                        </div>
                        <div className="mt-5 pr-5 w-full"><Borrow /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
