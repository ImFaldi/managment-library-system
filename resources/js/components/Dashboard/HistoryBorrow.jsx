import { React, useState, useEffect } from "react";
import axios from "axios";

function Borrow({ rows, books, users }) {

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 4;
    const [totalPages, setTotalPages] = useState(Math.ceil(rows.length / perPage));

    useEffect(() => {
        setTotalPages(Math.ceil(rows.length / perPage));
    }, [rows]);

    const startInd = (currentPage - 1) * perPage;
    const endInd = currentPage * perPage;
    const currentRows = rows.slice(startInd, endInd);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const [formData, setFormData] = useState({
        user_id: '',
        book_id: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/Borrow', formData)
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const handleReturn = (e) => {
        e.preventDefault();
        axios.put('/api/Borrow', formData)
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        console.log(books),
        <div className="card bg-base-100 shadow-xl h-min w-full mr-5">
            <div className="card-body">
                <div className="flex">
                    <div className="flex w-full">
                        <h2 className="card-title text-center">Borrow Status</h2>
                    </div>
                    <div className="flex w-full justify-end">
                        <div className="text-end">
                            <button className="btn btn-success btn-sm text-white" onClick={() => window.my_modal_add_borrow.showModal()}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <ul className="list-group">
                    {currentRows.map((row, index) => (
                        <li key={index} className="list-group-item border-0 d-flex p-4 mb-2 rounded-xl bg-gray-100/50">
                            <div className="d-flex flex-col">
                                <h6 className="mb-3 text-sm font-bold">Name Borrow : {row.user}</h6>
                                <div className="flex flex">
                                    <span className="mb-2 text-xs flex-initial w-1/3 text-satrtr">Book Name : <span className="text-gray-700 ms-2">{row.book}</span></span>
                                    <span className="mb-2 text-xs flex-initial w-1/3 text-center">
                                        <div
                                            className={`badge badge-md text-white ${row.status === 'returned' ? 'badge-success' : 'badge-warning'}`}>
                                            {row.status}
                                        </div>
                                    </span>
                                    <span className="mb-2 text-xs flex-initial w-1/3 text-end">Return Date : <span className="text-gray-700 ms-2">{row.return_date}</span></span>
                                </div>
                            </div>
                            <div className="ms-auto text-end">
                                <button className="btn btn-info btn-sm text-white text-gradient px-3 mb-0" onClick={() => window.my_modal_return_borrow.showModal()}>Return</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="join w-full justify-end mt-1">
                    <button
                        className="join-item btn-outline btn btn-sm"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        «
                    </button>
                    <span className="join-item btn btn-outline btn-seccondary btn-sm">{currentPage}</span>
                    <button
                        className="join-item btn-outline btn btn-sm"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        »
                    </button>
                </div>
            </div>
            <dialog id="my_modal_add_borrow" className="modal">
                <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
                    <h3 className="font-bold text-lg">Create Borrow</h3>
                    <label className="label">User Name</label>
                    <select
                        className="select select-bordered w-full border-gray-400"
                        name="user_id"
                        onChange={handleChange}>
                        <option value="">Select User</option>
                        {users.map((user, index) => (
                            <option key={index} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                    <label className="label">Book Name</label>
                    <select 
                    className="select select-bordered w-full border-gray-400" 
                    name="book_id" 
                    onChange={handleChange}>
                        <option value="">Select Book</option>
                        {books.map((book, index) => (
                            <option key={index} value={book.id}>{book.title}</option>
                        ))}
                    </select>
                    <div className="modal-action">
                        <button className="btn btn-success btn-sm text-white" type="submit">Create</button>
                        <button className="btn btn-error text-white btn-sm" onClick={() => window.my_modal_add_borrow.close()}>Close</button>
                    </div>
                </form>
            </dialog>
        </div >
    );
}

export default Borrow;