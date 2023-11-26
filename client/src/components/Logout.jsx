import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '../services/authService';

const Logout = () => {

    const [accessToken, setAccessToken] = useState(sessionStorage.getItem("accessToken"));
    const navigate = useNavigate();

    useEffect(() => {
        logout(accessToken);
        sessionStorage.clear();
         navigate('/');
    }, [])

}

export default Logout;