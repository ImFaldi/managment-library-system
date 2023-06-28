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

    return (

        <div className="card bg-base-100 shadow-xl h-min w-full mr-5">
            <div className="card-body">
                <div className="flex">
                    <div className="flex w-full">
                        <h2 className="card-title text-center">{title}</h2>
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
                                        <button className="btn btn-info btn-sm text-white" onClick={() => window[`my_modal_${index}`].showModal()}>Detail</button>
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
                                                    <button className="btn btn-error text-white btn-sm" onClick={() => window[`my_modal_delete_${index}`].showModal()}>Delete</button>
                                                </div>
                                                <dialog id={`my_modal_delete_${index}`} className="modal">
                                                    <form method="dialog" className="modal-box">
                                                        <h3 className="font-bold text-lg text-center">Apakah anda yakin?</h3>
                                                        <p className="py-4">ingin menghapus data ini?</p>
                                                        <div className="modal-action">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn btn-success text-white btn-sm" onClick={() => window[`my_modal_${index}`].close()}>Delete</button>
                                                            <button className="btn btn-error text-white btn-sm" onClick={() => window[`my_modal_delete_${index}`].close()}>Cancel</button>
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
        </div >
    );
}

export default Table;  