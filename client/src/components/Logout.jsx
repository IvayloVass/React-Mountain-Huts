import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

import { logout } from '../services/authService';

const Logout = () => {

    const [accessToken, setAccessToken] = useState(sessionStorage.getItem("accessToken"));
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        logout(accessToken);
        setAuth({});
        sessionStorage.removeItem("accessToken");
        navigate('/');
    }, [])

}

export default Logout;