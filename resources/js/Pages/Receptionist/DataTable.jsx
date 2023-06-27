import React, { useEffect, useState } from 'react';
import Receptionist from '@/Layouts/ReceptionistTable';
import { Head } from '@inertiajs/react';

export default function DataTable({ auth }) {
    return (
        <Receptionist user={auth.user}>
        </Receptionist>
    );
}
