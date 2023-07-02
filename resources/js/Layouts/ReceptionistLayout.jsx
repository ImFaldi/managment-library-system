import { useState, useEffect } from 'react';
import Sidebar from '@/components/Dashboard/Sidebar';
import Navbar from '@/components/Dashboard/Navbar';
import Table from '@/components/Tables/TablesUser';
import Stat from '@/components/Dashboard/Stat';
import Borrow from '@/components/Dashboard/HistoryBorrow';
import axios from 'axios';


export default function Authenticated({ user }) {
    const [data, setData] = useState([]);
    const [dataBorrow, setDataBorrow] = useState([]);
    const [dataBook, setDataBook] = useState([]);

    useEffect(() => {
        axios
            .get('/api/User')
            .then((res) => {
                const filteredUsers = res.data.user.filter((user) => user.role === 'member');
                setData(filteredUsers);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios.get('/api/Borrow')
            .then((res) => {
                setDataBorrow(res.data.borrows);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        axios.get('/api/Book')
            .then((res) => {
                setDataBook(res.data.books);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    return (
        <div className="min-h-screen pt-3" style={{ background: 'linear-gradient(to bottom, rgba(0, 254, 0, 0.4) 35%, rgba(128, 128, 128, 0.1) 35%)' }}>
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid mt-2 pr-5"><Navbar user={user} /></div>
                    <div className="grid mt-2 pr-5"><Stat /></div>
                    <div className="flex">
                        <div className="mt-5 pr-5 w-full">
                            <Table
                                title="Member Table"
                                columns={[
                                    'Name',
                                    'Role',
                                    'Phone'
                                ]}
                                rows={data.map((user) => ({
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                    role: user.role,
                                    phone: user.phone
                                }))}
                            />
                        </div>
                        <div className="mt-5 pr-5 w-full">
                            <Borrow 
                                rows={dataBorrow.filter((row) => row.status === "borrowed").map((borrow) => ({
                                    id: borrow.id,
                                    user_id: borrow.user_id,
                                    book_id: borrow.book_id,
                                    borrow_date: borrow.borrow_date,
                                    return_date: borrow.return_date,
                                    status: borrow.status,
                                    book: dataBook.map((book) => {
                                        if (book.id == borrow.book_id) {
                                            return book.title;
                                        }
                                    }),
                                    user: data.map((user) => {
                                        if (user.id == borrow.user_id) {
                                            return user.name;
                                        }
                                    })}))}
                                books={dataBook}
                                users={data}
                        /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
