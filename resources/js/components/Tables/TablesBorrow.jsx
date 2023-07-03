import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Borrows({ title, columns, rows, user, book }) {
    const [notification, setNotification] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;
    const [totalPages, setTotalPages] = useState(Math.ceil(rows.length / perPage));
    useEffect(() => {
        setTotalPages(Math.ceil(rows.length / perPage));
    }, [rows]);

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = currentPage * perPage;
    const currentRows = rows.slice(startIndex, endIndex);

    const goToPage = (page) => {
        setCurrentPage(page);
    }

    const [formDataUpdate, setFormDataUpdate] = useState({
        user_id: '',
        book_id: '',
        status: '',
        penalty: '',
        borrow_date: '',
        return_date: ''
    });

    const handleChangeUpdate = (e) => {
        setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
    }

    const handleDelete = (index) => {
        axios.delete(`/api/Borrow/${index}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);

                setNotification('Data berhasil dihapus');
                setTimeout(() => {
                    setNotification(null);
                    window.location.reload();
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleUpdate = (index, e) => {
        e.preventDefault();

        axios.put(`/api/Borrow/${index}`, formDataUpdate)
            .then((res) => {
                console.log(res);
                console.log(res.data);

                setNotification('Data berhasil diupdate');
                setTimeout(() => {
                    setNotification(null);
                    window.location.reload();
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            }
            );
    }

    return (
        <div className="card bg-base-100 shadow-xl h-min w-full mr-5 mb-5">
            <div className="card-body">
                <div className="flex">
                    <div className="flex w-full">
                        <h2 className="card-title text-center">{title}</h2>
                    </div>
                    <div className="flex w-full justify-end">
                        <div className="text-end">
                            <button className="btn btn-success btn-sm text-white" onClick={() => window.my_modal_borrow.showModal()}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                {columns.map((column, index) => (
                                    <th key={index}>{column}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.map((row, index) => (
                                <tr key={index}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{row.user}</div>
                                                <div className="text-sm opacity-50">{row.book}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-sm">
                                        <span
                                            className={`badge badge${row.status === 'returned' ? '-success' : '-warning'} text-white`} >
                                            {row.status}
                                        </span>
                                    </td>
                                    <td>{row.borrow}</td>
                                    <td>{row.return}</td>
                                    <td className="text-sm">
                                        Rp. {row.penalty}
                                    </td>
                                    <td>
                                        <button className="btn btn-info btn-sm text-white" onClick={() => window[`my_modal_borrow_${index}`].showModal()}>Detail</button>
                                        <dialog id={`my_modal_borrow_${index}`} className="modal">
                                            <form method="dialog" className="modal-box w-11/12 max-w-2xl" onSubmit={(e) => handleUpdate(row.id, e)}>
                                                <h3 className="font-bold text-lg">{title} Update</h3>
                                                <label className="label"> User</label>
                                                <select
                                                    className="select select-bordered w-full border-gray-400"
                                                    name="user_id"
                                                    value={formDataUpdate.user_id}
                                                    onChange={handleChangeUpdate}>
                                                    <option value="">Select User</option>
                                                    {user ? user.map((user) => (
                                                        <option key={user.id} value={user.id}>{user.name}</option>
                                                    )) : []}
                                                </select>
                                                <label className="label">Book Name</label>
                                                <select
                                                    className="select select-bordered w-full border-gray-400"
                                                    name="book_id"
                                                    value={formDataUpdate.book_id}
                                                    onChange={handleChangeUpdate}>
                                                    <option value="">Select Book</option>
                                                    {book.books ? book.books.map((book) => (
                                                        <option key={book.id} value={book.id}>{book.title}</option>
                                                    )) : []}
                                                </select>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <input type="checkbox" className="checkbox checkbox" name="status" value={row.status} onChange={handleChangeUpdate} />
                                                        <span className="label-text w-full ml-3">Status</span>
                                                    </label>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <input type="checkbox" className="checkbox checkbox" name="penalty" value={row.penalty} onChange={handleChangeUpdate} />
                                                        <span className="label-text w-full ml-3">Penalty</span>
                                                    </label>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <input type="checkbox" className="checkbox checkbox" name="borrow_date" value={row.borrow_date} onChange={handleChangeUpdate} />
                                                        <span className="label-text w-full ml-3">Borrow Date</span>
                                                    </label>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <input type="checkbox" className="checkbox checkbox" name="return_date" value={row.return_date} onChange={handleChangeUpdate} />
                                                        <span className="label-text w-full ml-3">return Date</span>
                                                    </label>
                                                </div>
                                                <div className="modal-action">
                                                    <button className="btn btn-success text-white btn-sm">Update</button>
                                                    <button className="btn btn-error text-white btn-sm" onClick={() => window[`my_modal_delborrow_${row.id}`].showModal()}>Delete</button>
                                                </div>
                                                <dialog id={`my_modal_delborrow_${row.id}`} className="modal modal-bottom sm:modal-middle">
                                                    <form method="dialog" className="modal-box">
                                                        <h3 className="font-bold text-lg text-center">Apakah anda yakin ingin menghapus data ini?</h3>
                                                        <div className="divider"></div>
                                                        <p className="text-center">Data yang sudah dihapus tidak dapat dikembalikan</p>
                                                        <p className="text-center">Tekan tombol <b>Close</b> untuk membatalkan</p>
                                                        <br />
                                                        <h3 className="font-bold text-lg text-center">Data yang akan dihapus</h3>
                                                        <p className="text-left mt-2">Member: {row.user}</p>
                                                        <p className="text-left mt-2">Book: {row.book}</p>

                                                        <div className="divider"></div>
                                                        <div className="modal-action">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn btn-sm">Close</button>
                                                            <button className="btn btn-error btn-sm text-white" onClick={() => handleDelete(row.id)}>Delete</button>
                                                        </div>
                                                    </form>
                                                </dialog>
                                            </form>
                                        </dialog>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="join w-full justify-end mt-5">
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
            </div>
            <dialog id="my_modal_borrow" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close Add</p>
                </form>
            </dialog>
        </div >
    );
}

export default Borrows;  