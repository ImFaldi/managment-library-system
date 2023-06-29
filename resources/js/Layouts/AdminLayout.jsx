import { useState, useEffect } from 'react';
import Sidebar from '@/components/Dashboard/Sidebar';
import Navbar from '@/components/Dashboard/Navbar';
import Table from '@/components/Dashboard/Table';
import Stat from '@/components/Dashboard/Stat';
import Borrow from '@/components/Dashboard/Borrow';
import axios from 'axios';


export default function Authenticated({ user }) {
    const [dataUser, setDataUser] = useState([]);
    const [dataBorrow, setDataBorrow] = useState([]);
    const [dataBook, setDataBook] = useState([]);


    useEffect(() => {
        axios.get('/api/User')
            .then((res) => {
                setDataUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, []);

    useEffect(() => {
        axios.get('/api/Borrow')
            .then((res) => {
                setDataBorrow(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        axios.get('/api/Book')
            .then((res) => {
                setDataBook(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    console.log(dataUser, dataBorrow, dataBook.book);
    return (
        <div className="min-h-screen pt-3" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 255, 0.4) 35%, rgba(128, 128, 128, 0.1) 35%)' }}>
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid mt-2 pr-5"><Navbar user={user} /></div>
                    <div className="grid mt-2 pr-5"><Stat /></div>
                    <div className="flex">
                        <div className="mt-5 pr-5 w-full">
                            <Table
                                title="User Table"
                                columns={[
                                    'Name',
                                    'Role',
                                    'Phone',
                                    'Action']}
                                rows={dataUser.user ? dataUser.user.map((user) => ({
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                    role: user.role,
                                    phone: user.phone,
                                    action: 'action'
                                })) : []}
                            />
                        </div>
                        <div className="mt-5 pr-5 w-full"><Borrow
                            rows={dataBorrow.borrows ? dataBorrow.borrows.map((borrow) => ({
                                id: borrow.id,
                                book: dataBook.books ? dataBook.books.map((book) => {
                                    if (book.id == borrow.book_id) {
                                        return book.title;
                                    }
                                }) : [],
                                user: dataUser.user ? dataUser.user.map((user) => {
                                    if (user.id == borrow.user_id) {
                                        return user.name;
                                    }
                                }) : [],
                                status: borrow.status,
                                return_date: borrow.return_date,
                                penalty: borrow.penalty,
                            })) : []}
                        /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
