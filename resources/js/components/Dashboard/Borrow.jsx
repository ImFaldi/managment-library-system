import { Link } from '@inertiajs/react';

function Borrow({ user }) {

    return (
        <div className="card bg-base-100 shadow-xl h-min w-full mr-5">
            <div className="card-body">
                <h2 className="card-title">Borrow Status</h2>
                <div className="divider"></div>
                <ul className="list-group">
                    <li className="list-group-item border-0 d-flex p-4 mb-2 rounded-xl bg-yellow-100/50">
                        <div className="d-flex flex-col">
                            <h6 className="mb-3 text-sm">Oliver Liam</h6>
                            <div className="flex flex">
                                <span className="mb-2 text-xs flex-initial w-1/3 text-satrtr">Book Name : <span className="text-gray-700 ms-2">The Great Gatsby</span></span>
                                <span className="mb-2 text-xs flex-initial w-1/3 text-center"><div className="badge badge-primary badge-outline">primary</div></span>
                                <span className="mb-2 text-xs flex-initial w-1/3 text-end">Return Date : <span className="text-gray-700 ms-2">12/12/2021</span></span>
                            </div>
                        </div>
                        <div className="ms-auto text-end">
                            <a className="btn btn-link text-danger text-gradient px-3 mb-0" ><i className="far fa-trash-alt me-2" aria-hidden="true"></i>Delete</a>
                            <a className="btn btn-link text-dark px-3 mb-0" ><i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
                        </div>
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item border-0 d-flex p-4 mb-2 rounded-xl bg-yellow-100/50">
                        <div className="d-flex flex-col">
                            <h6 className="mb-3 text-sm">Oliver Liam</h6>
                            <div className="flex flex">
                                <span className="mb-2 text-xs flex-initial w-1/3 text-satrtr">Book Name : <span className="text-gray-700 ms-2">The Great Gatsby</span></span>
                                <span className="mb-2 text-xs flex-initial w-1/3 text-center"><div className="badge badge-primary badge-outline">primary</div></span>
                                <span className="mb-2 text-xs flex-initial w-1/3 text-end">Return Date : <span className="text-gray-700 ms-2">12/12/2021</span></span>
                            </div>
                        </div>
                        <div className="ms-auto text-end">
                            <a className="btn btn-link text-danger text-gradient px-3 mb-0" ><i className="far fa-trash-alt me-2" aria-hidden="true"></i>Delete</a>
                            <a className="btn btn-link text-dark px-3 mb-0" ><i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    );
}

export default Borrow;  