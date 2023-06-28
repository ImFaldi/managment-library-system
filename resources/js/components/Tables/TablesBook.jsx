import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Book({ title, columns, rows }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        author: '',
        stock: '',
        year: '',
    });

    useEffect(() => {
        // Fetch categories
        axios.get('/api/Category')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });

        // Fetch authors
        axios.get('/api/Author')
            .then(response => {
                setAuthors(response.data);
            })
            .catch(error => {
                console.error('Error fetching authors:', error);
            });
    }, []);


    const openModal = (index) => {
        window.selectedRowIndex = index;
        const modal = document.getElementById('my_modal');
        if (modal) {
            modal.showModal();
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/User', formData)
            .then((res) => {
                console.log(res);
                console.log(res.data);
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
                                        <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
                                            <form method="dialog" className="modal-box">
                                                <h3 className="font-bold text-lg">{title}</h3>
                                                <p className="py-4">Press ESC key or click the button below to close</p>
                                                <div className="modal-action">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn btn-success text-white btn-sm">Create</button>
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
            <dialog id="my_modal_book" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </form>
            </dialog>
        </div >
    );
}

export default Book;  