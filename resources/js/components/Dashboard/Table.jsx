import { Link } from '@inertiajs/react';

function Table({ title, columns, rows }) {

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
                                    <td><button className="btn btn-info btn-sm text-white">Detail</button></td>
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