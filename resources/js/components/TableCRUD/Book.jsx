import { Link } from '@inertiajs/react';
import SecondaryButton from '../SecondaryButton';
import DangerButton from '../DangerButton';

function Book() {

    return (
        <div className="card bg-base-100 shadow-xl h-min w-full mr-5">
            <div className="card-body">
                <h2 className="card-title">Book Table</h2>
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
                                <th>Title</th>
                                <th>Category</th>
                                <th>Book Author</th>
                                <th>Stock</th>
                                <th>Publish Year</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    Hart Hagerty
                                </td>
                                <td>
                                    hart@gmail.com
                                </td>
                                <td>08124567272</td>
                                <th>
                                    <SecondaryButton disabled={processing}>Edit</SecondaryButton>
                                    <DangerButton disabled={processing}>Delete</DangerButton>
                                </th>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div >
    );
}

export default Book;  