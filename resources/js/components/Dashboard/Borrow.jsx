import { React, useState, useEffect } from "react";
function Borrow({ rows }) {
    console.log(rows);

    return (
        <div className="card bg-base-100 shadow-xl h-min w-full mr-5">
            <div className="card-body">
                <h2 className="card-title">Borrow Status</h2>
                <div className="divider"></div>
                <ul className="list-group">
                    {rows.map((row, index) => (
                        <li key={index} className="list-group-item border-0 d-flex p-4 mb-2 rounded-xl bg-gray-100/50">
                            <div className="d-flex flex-col">
                                <h6 className="mb-3 text-sm font-bold">Name : {row.user}</h6>
                                <div className="flex flex">
                                    <span className="mb-2 text-xs flex-initial w-1/3 text-satrtr">Book Name : <span className="text-gray-700 ms-2">{row.book}</span></span>
                                    <span className="mb-2 text-xs flex-initial w-1/3 text-center"><div className="badge badge-info badge-outline badge-lg">{row.status}</div></span>
                                    <span className="mb-2 text-xs flex-initial w-1/3 text-end">Return Date : <span className="text-gray-700 ms-2">{row.return_date}</span></span>
                                </div>
                            </div>
                            <div className="ms-auto text-end">
                                <button className="btn btn-info btn-sm text-white text-gradient px-3 mb-0" >Return</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
}

export default Borrow;  