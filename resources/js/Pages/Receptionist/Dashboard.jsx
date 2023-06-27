import Receptionist from '@/Layouts/ReceptionistLayout';
export default function Dashboard({ auth }) {

    return (
        
        <Receptionist
            user={auth.user}
        >
        </Receptionist>
    );
}
