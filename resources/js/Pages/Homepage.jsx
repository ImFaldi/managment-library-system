import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Homepage(props) {
    console.log(props);
    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <Head title={props.title} />
            <div className="p-6 text-gray-900">{props.description}</div>
        </div>
    )
}