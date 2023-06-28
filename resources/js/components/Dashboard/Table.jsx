import React, { useState } from 'react';
import axios from 'axios';
function Table({ title, columns, rows }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/User', formData)
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });
    }

    const openModal = (index) => {
        window[`my_modal_${index}`].showModal();
    };

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
                                        <button className="btn btn-info btn-sm text-white" onClick={() => openModal(index)}>Detail</button>
                                        <dialog id={`my_modal_${index}`} className="modal modal-bottom sm:modal-middle">
                                            <form method="dialog" className="modal-box">
                                                <h3 className="font-bold text-lg">{title} Detail</h3>
                                                <label className="label"> Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="input w-full input-bordered border-gray-400"
                                                    value={row.name}
                                                    readOnly

                                                />
                                                <label className="label"> Email</label>
                                                <input
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="input w-full input-bordered border-gray-400"
                                                    value={row.email}
                                                    readOnly
                                                />

                                                <label className="label"> Role</label>
                                                <select className="select select-bordered w-full border-gray-400" value={row.role} readOnly>
                                                    <option value="admin">Admin</option>
                                                    <option value="receptionist">Receptionist</option>
                                                    <option value="member">Member</option>
                                                </select>

                                                <label className="label"> Phone</label>
                                                <input
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="input w-full input-bordered border-gray-400"
                                                    value={row.phone}
                                                    readOnly
                                                />
                                                <div className="modal-action">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn btn-success text-white btn-sm">Update</button>
                                                    <button className="btn btn-error text-white btn-sm" onClick={() => window[`my_modal_${index}`].close()}>Delete</button>
                                                </div>
                                            </form>
                                        </dialog>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <dialog id="my_modal_add" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
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