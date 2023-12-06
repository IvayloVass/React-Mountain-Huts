import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const ProtectedRoutes = () => {

    const { auth } = useAuth();

    if (!Object.keys(auth).length) {
        return <Navigate to='/login' />
    }

    return <Outlet />

}

export default ProtectedRoutes;