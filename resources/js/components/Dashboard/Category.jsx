import React, { useState } from 'react';
import axios from 'axios';
function Category({ title, columns, rows }) {
    const [notification, setNotification] = useState(null);

    const [formData, setFormData] = useState({
        title: '',
    });

    const [formDataUpdate, setFormDataUpdate] = useState({
        title: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleChangeUpdate = (e) => {
        setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
    }

    const handleSubmitAdd = (e) => {
        e.preventDefault();
        axios.post('/api/Category', formData)
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
        axios.delete(`/api/Category/${index}`)
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

        axios.put(`/api/Category/${index}`, formDataUpdate)
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
                            <button className="btn btn-success btn-sm text-white" onClick={() => window.my_modal_category.showModal()}>Add</button>
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
                            {rows.map((row, index) => (
                                <tr key={index}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{row.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn btn-info btn-sm text-white" onClick={() => window[`my_modal_update_${index}`].showModal()}>Detail</button>
                                        <dialog id={`my_modal_update_${index}`} className="modal">
                                            <form method="dialog" className="modal-box w-11/12 max-w-2xl" onSubmit={(e) => handleUpdate(row.id, e)}>
                                                <h3 className="font-bold text-lg">{title} Update</h3>
                                                <label className="label">Title</label>
                                                <input
                                                    type="text"
                                                    placeholder={row.title}
                                                    className="input w-full input-bordered border-gray-400"
                                                    value={formDataUpdate.title}
                                                    onChange={handleChangeUpdate}
                                                    name="title"
                                                />

                                                <div className="modal-action">
                                                    <button className="btn btn-success text-white btn-sm">Update</button>
                                                    <button className="btn btn-error text-white btn-sm" onClick={() => window[`my_modal_del_${row.id}`].showModal()}>Delete</button>
                                                </div>
                                                <dialog id={`my_modal_del_${row.id}`} className="modal modal-bottom sm:modal-middle">
                                                    <form method="dialog" className="modal-box">
                                                        <h3 className="font-bold text-lg text-center">Apakah anda yakin ingin menghapus data ini?</h3>
                                                        <div className="divider"></div>
                                                        <p className="text-center">Data yang sudah dihapus tidak dapat dikembalikan</p>
                                                        <p className="text-center">Tekan tombol <b>Close</b> untuk membatalkan</p>
                                                        <br />
                                                        <h3 className="font-bold text-lg text-center">Data yang akan dihapus</h3>
                                                        <p className="text-left mt-2">Title: {row.title}</p>

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
                </div>
            </div>
            <dialog id="my_modal_category" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box" onSubmit={handleSubmitAdd}>
                    <h3 className="font-bold text-lg">{title} Create Category</h3>
                    <label className="label"> Title </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input w-full input-bordered border-gray-400"
                        value={formData.title}
                        onChange={handleChange}
                        name="title"
                    />
                    <div className="modal-action">
                        <button className="btn btn-success text-white btn-sm">Create</button>
                    </div>
                </form>
            </dialog>
        </div >
    );
}

export default Category;  