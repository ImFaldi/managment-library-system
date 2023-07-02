import { React, useState, useEffect } from "react";
function Borrow({ rows }) {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;
    const [totalPages, setTotalPages] = useState(Math.ceil(rows.length / perPage));

    useEffect(() => {
        setTotalPages(Math.ceil(rows.length / perPage));
    }, [rows]);

    const startInd = (currentPage - 1) * perPage;
    const endInd = currentPage * perPage;
    const currentRows = rows.slice(startInd, endInd);

    const goToPage = (page) => {
        setCurrentPage(page);
    };


    return (
        <div className="card bg-base-100 shadow-xl h-min w-full mr-5">
            <div className="card-body">
                <h2 className="card-title">Borrow Status</h2>
                <div className="divider"></div>
                <ul className="list-group">
                    {currentRows.map((row, index) => (
                        <li key={index} className="list-group-item border-0 d-flex p-4 mb-2 rounded-xl bg-gray-100/50">
                            <div className="d-flex flex-col">
                                <h6 className="mb-3 text-sm font-bold">Name : {row.user}</h6>
                                <div className="flex flex">
                                    <span className="mb-2 text-xs flex-initial w-1/3 text-satrtr">Book Name : <span className="text-gray-700 ms-2">{row.book}</span></span>
                                    <span className="mb-2 text-xs flex-initial w-1/3 text-center">
                                        <div
                                            className={`badge badge-md text-white ${ row.status === 'returned' ? 'badge-success' : 'badge-warning' }`}>
                                                {row.status}
                                        </div>
                                    </span>
                                    <span className="mb-2 text-xs flex-initial w-1/3 text-end">Return Date : <span className="text-gray-700 ms-2">{row.return_date}</span></span>
                                </div>
                            </div>
                            <div className="ms-auto text-end">
                                <button className="btn btn-info btn-sm text-white text-gradient px-3 mb-0" >Return</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="join w-full justify-end mt-1">
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
        </div >
    );
}

export default Borrow;  