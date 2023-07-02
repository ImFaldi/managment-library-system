import { useState, useEffect } from 'react';
import Sidebar from '@/components/Dashboard/Sidebar';
import Navbar from '@/components/Dashboard/Navbar';
import Table from '@/components/Tables/TablesUser';
import Stat from '@/components/Dashboard/Stat';
import Borrow from '@/components/Dashboard/HistoryBorrow';
import axios from 'axios';


export default function Authenticated({ user }) {
    const [dataUser, setDataUser] = useState([]);
    const [dataBorrow, setDataBorrow] = useState([]);
    const [dataBook, setDataBook] = useState([]);


    useEffect(() => {
        axios.get('/api/User')
            .then((res) => {
                setDataUser(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            })

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
                                    'Phone'
                                ]}
                                rows={dataUser.map((user) => ({
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
                                rows={dataBorrow.filter((row) => row.status === "borrowed").map((borrow) => {
                                    const book = dataBook.find((book) => book.id === borrow.book_id);
                                    const user = dataUser.find((user) => user.id === borrow.user_id);
                                    const returnDate = new Date(borrow.return_date);
                                    const currentDate = new Date();
                                    const timeDiff = returnDate.getTime() - currentDate.getTime();
                                    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
                                    const formatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })
                                    const penalty = daysDiff < 0 ? formatter.format(Math.abs(daysDiff) * 10000) : formatter.format(0);
                                    console.log(penalty);
                                    return {
                                        id: borrow.id,
                                        user_id: borrow.user_id,
                                        book_id: borrow.book_id,
                                        borrow_date: borrow.borrow_date,
                                        return_date: borrow.return_date,
                                        status: borrow.status,
                                        book: book ? book.title : "",
                                        user: user ? user.name : "",
                                        penalty: penalty,
                                    };
                                })}
                                books={dataBook}
                                users={dataUser}
                            /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
