function Table({ title, columns, rows }) {
    const openModal = (index) => {
        window.selectedRowIndex = index;
        const modal = document.getElementById('my_modal');
        if (modal) {
            modal.showModal();
        }
    };
    return (

        <div className="card bg-base-100 shadow-xl h-min w-full mr-5">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
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
                                    <td>{/* You can open the modal using ID.showModal() method */}
                                        <button className="btn btn-info btn-sm text-white" onClick={() => openModal(index)}>Detail</button>
                                        <dialog id="my_modal" className="modal">
                                            <form method="dialog" className="modal-box">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                <h3 className="font-bold text-lg">Hello!</h3>
                                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                                <div className="modal-action">
                                                    <button className="btn btn-error btn-sm text-white">Delete</button>
                                                    <button className="btn btn-warning btn-sm text-white">Edit</button>
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
        </div >
    );
}

export default Table;  