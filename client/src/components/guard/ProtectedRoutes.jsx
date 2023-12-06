import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {

    if (!sessionStorage.getItem('accessToken')) {
        return <Navigate to='/login' />
    }

    return <Outlet />

}

export default ProtectedRoutes;