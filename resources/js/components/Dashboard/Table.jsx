import React, { useState } from 'react';
import axios from 'axios';
function Table({ title, columns, rows }) {
    const [notification, setNotification] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 4;
    const [totalPages, setTotalPages] = useState(Math.ceil(rows.length / perPage));

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = currentPage * perPage;
    const currentRows = rows.slice(startIndex, endIndex);

    const goToPage = (page) => {
        setCurrentPage(page);
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        phone: '',
    });

    const [formDataUpdate, setFormDataUpdate] = useState({
        name: '',
        email: '',
        role: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleChangeUpdate = (e) => {
        setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
    }

    const handleSubmitAdd = (e) => {
        e.preventDefault();
        axios.post('/api/User', formData)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setNotification('Data berhasil dihapus');
                setTimeout(() => {
                    setNotification(null);
                    window.location.reload();
                }, 2000);
            });
    }

    const handleDelete = (index) => {
        axios.delete(`/api/User/${index}`)
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

        axios.put(`/api/User/${index}`, formDataUpdate)
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

        <div className="card bg-base-100 shadow-xl h-min w-full mr-5">
            <div className="card-body">
                <div className="flex">
                    <div className="flex w-full">
                        <h2 className="card-title text-center">{title}</h2>
                    </div>
                    <div className="flex w-full justify-end">
                        <div className="text-end">
                            <button className="btn btn-success btn-sm text-white" onClick={() => window.my_modal_add.showModal()}>Add</button>

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
                                                <div className="font-bold">{row.name}</div>
                                                <div className="text-sm opacity-50">{row.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-sm">
                                        <span className="badge badge-success badge-md text-white">{row.role}</span>
                                    </td>
                                    <td>{row.phone}</td>
                                    <td>
                                        <button className="btn btn-info btn-sm text-white" onClick={() => window[`my_modal_${index}`].showModal()}>Detail</button>
                                        <dialog id={`my_modal_${index}`} className="modal">
                                            <form method="dialog" className="modal-box w-11/12 max-w-2xl" onSubmit={(e) => handleUpdate(row.id, e)}>
                                                <h3 className="font-bold text-lg">{title} Update</h3>
                                                <label className="label"> Name</label>
                                                <input
                                                    type="text"
                                                    placeholder={row.name}
                                                    className="input w-full input-bordered border-gray-400"
                                                    value={formDataUpdate.name}
                                                    onChange={handleChangeUpdate}
                                                    name="name"
                                                />

                                                <label className="label"> Email</label>
                                                <input
                                                    type="text"
                                                    placeholder={row.email}
                                                    className="input w-full input-bordered border-gray-400"
                                                    value={formDataUpdate.email}
                                                    onChange={handleChangeUpdate}
                                                    name="email"
                                                />

                                                <label className="label"> Role</label>
                                                <select
                                                    className="select select-bordered w-full border-gray-400"
                                                    value={formDataUpdate.role}
                                                    onChange={handleChangeUpdate}
                                                    name="role">
                                                    <option value="">-- {row.role} --</option>
                                                    <option value="admin">Admin</option>
                                                    <option value="receptionist">Receptionist</option>
                                                    <option value="member">Member</option>
                                                </select>

                                                <label className="label"> Phone</label>
                                                <input
                                                    type="text"
                                                    placeholder={row.phone}
                                                    className="input w-full input-bordered border-gray-400"
                                                    value={formDataUpdate.phone}
                                                    onChange={handleChangeUpdate}
                                                    name="phone"
                                                />

                                                <div className="modal-action">
                                                    <button className="btn btn-success text-white btn-sm">Update</button>
                                                    <button className="btn btn-error text-white btn-sm" onClick={() => window[`my_modal_delete_${row.id}`].showModal()}>Delete</button>
                                                </div>
                                                <dialog id={`my_modal_delete_${row.id}`} className="modal modal-bottom sm:modal-middle">
                                                    <div method="dialog" className="modal-box">
                                                        <h3 className="font-bold text-lg text-center">Apakah anda yakin ingin menghapus data ini?</h3>
                                                        <div className="divider"></div>
                                                        <p className="text-center">Data yang sudah dihapus tidak dapat dikembalikan</p>
                                                        <p className="text-center">Tekan tombol <b>Close</b> untuk membatalkan</p>
                                                        <br />
                                                        <h3 className="font-bold text-lg text-center">Data yang akan dihapus</h3>
                                                        <p className="text-left mt-2">Nama: {row.name}</p>
                                                        <p className="text-left mt-1">Email: {row.email}</p>
                                                        <p className="text-left mt-1">Role: {row.role}</p>
                                                        <p className="text-left mt-1">Phone: {row.phone}</p>

                                                        <div className="divider"></div>
                                                        <div className="modal-action">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn btn-sm" onClick={() => window[`my_modal_delete_${row.id}`].close()}>Close</button>
                                                            <button className="btn btn-error btn-sm text-white" onClick={() => handleDelete(row.id)}>Delete</button>
                                                        </div>
                                                    </div>
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
                            className="join-item btn btn-sm"
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            «
                        </button>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                className={`join-item btn btn-sm ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => goToPage(index + 1)}
                            >
                                Page {index + 1}
                            </button>
                        ))}
                        <button
                            className="join-item btn btn-sm"
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            »
                        </button>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_add" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box" onSubmit={handleSubmitAdd}>
                    <h3 className="font-bold text-lg">{title} Create</h3>
                    <label className="label"> Name</label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input w-full input-bordered border-gray-400"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                    />

                    <label className="label"> Email</label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input w-full input-bordered border-gray-400"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                    />

                    <label className="label"> Password</label>
                    <input
                        type="password"
                        placeholder="Type here"
                        className="input w-full input-bordered border-gray-400"
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                    />

                    <label className="label"> Role</label>
                    <select
                        className="select select-bordered w-full border-gray-400"
                        value={formData.role}
                        onChange={handleChange}
                        name="role">
                        <option value="">-- Select Role --</option>
                        <option value="admin">Admin</option>
                        <option value="receptionist">Receptionist</option>
                        <option value="member">Member</option>
                    </select>

                    <label className="label"> Phone</label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input w-full input-bordered border-gray-400"
                        value={formData.phone}
                        onChange={handleChange}
                        name="phone"
                    />
                    <div className="modal-action">
                        <button className="btn btn-success text-white btn-sm">Create</button>
                    </div>
                </form>
            </dialog>
        </div >
    );
}

export default Table;  