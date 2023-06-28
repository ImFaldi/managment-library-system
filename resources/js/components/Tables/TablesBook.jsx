import React, { useState} from 'react';
import axios from 'axios';
function Book({ title, columns, rows , category, author}) {

    const [formData, setFormData] = useState({
        title: '',
        category_id: '',
        author_id: '',
        stock: '',
        year: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/Book', formData)
            .then((res) => {
                console.log(res);
                console.log(res.data);

                window.location.reload();
            });
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
                            <button className="btn btn-success btn-sm text-white" onClick={() => window.my_modal_book.showModal()}>Add</button>
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
                                                <div className="text-sm opacity-50">{row.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-sm">
                                        <span className="badge badge-success badge-md text-white">{row.author}</span>
                                    </td>
                                    <td>{row.stock}</td>
                                    <td>{row.year}</td>
                                    <td>
                                        <button className="btn btn-info btn-sm text-white" onClick={() => openModal(index)}>Detail</button>
                                        {/* <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
                                            <form method="dialog" className="modal-box">
                                                <h3 className="font-bold text-lg">{title}</h3> */}
                                                {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                                                {/* <div className="modal-action"> */}
                                                    {/* if there is a button in form, it will close the modal */}
                                                    {/* <button className="btn btn-success text-white btn-sm">Create</button> */}
                                                {/* </div> */}
                                            {/* </form> */}
                                        {/* </dialog> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <dialog id="my_modal_book" className="modal">
                <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
                    <h3 className="font-bold text-lg">{title} Create</h3>
                    <label className="label"> Title </label>
                    <input
                        type="text"
                        placeholder="Title"
                        className="input w-full input-bordered border-gray-400"
                        name="title"
                        onChange={handleChange} />

                    <label className="label"> Category </label>
                    <select
                        className="select select-bordered w-full border-gray-400"
                        name="category_id"
                        onChange={handleChange}>
                        <option value="">Select Category</option>
                        {category.categories ? category.categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.title}</option>
                        )) : []}
                    </select>

                    <label className="label"> Author </label>
                    <select
                        className="select select-bordered w-full border-gray-400"
                        name="author_id"
                        onChange={handleChange}>
                        <option value="">Select Author</option>
                        {author.authors ? author.authors.map((author) => (
                            <option key={author.id} value={author.id}>{author.name}</option>
                        )) : []}
                    </select>

                    <label className="label"> Stock </label>
                    <input
                        type="number"
                        placeholder="Stock"
                        className="input w-full input-bordered border-gray-400"
                        name="stock"
                        onChange={handleChange} />

                    <label className="label"> Year </label>
                    <input
                        type="number"
                        placeholder="Year"
                        className="input w-full input-bordered border-gray-400"
                        name="year"
                        onChange={handleChange} />

                    <div className="modal-action">
                        <button className="btn btn-success text-white btn-sm">Create</button>
                        <button className="btn btn-error text-white btn-sm" onClick={() => window.my_modal_book.close()}>Cancel</button>
                    </div>
                </form>
            </dialog>
        </div >
    );
}

export default Book;  