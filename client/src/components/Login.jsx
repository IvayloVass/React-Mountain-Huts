import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../services/authService';

import styles from './Login.module.css';


const Login = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [passwordError, setPasswodError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [auth, setAuth] = useState({});
    const [loginMsg, setLoginMsg] = useState('');

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        if (emailError || passwordError) {
            setLoginMsg("Invalid email or password!");
            setAuth({});

        } else {
            let respAuth = await login(loginData);

            if (typeof respAuth === 'undefined') {
                setLoginMsg("Invalid email or password!");
                return;
            }
            setAuth(respAuth);
            navigate('/');
        }

    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const emailValidator = () => {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
        if (!loginData.email.match(emailRegex) || loginData.email.trim() === '') {
            setEmailError("Enter a valid Email address!");
        } else {
            setEmailError('');
        }
    }

    const passwordValidator = () => {
        // let passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#+\-_.!,? *^]).{6,48}$/g;
        let passwordRegex = '[a-zZ-z0-9]{5,}';
        if (!loginData.password.match(passwordRegex) || loginData.password.trim() === '') {
            setPasswodError("The password must contain at least one special char, digit, and letter\r\n"
                + "and be between 6 and 48 characters long!");
        } else {
            setPasswodError('');
        }
    }

    return (
        <div className={styles["login-container"]}>
            <h2>Login</h2>
            {loginMsg &&
                (<p className='success' style={{
                    color: 'green', fontSize: '20px', marginTop: '10px',
                    border: '1px solid green',
                    borderRadius: '5px'
                }}>
                    {loginMsg}</p>)}
            <form onSubmit={handleLogin}>
                <label className={styles["form-label"]}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={loginData.email}
                        onBlur={emailValidator}
                        onChange={handleChange}
                        className={styles["form-input"]}
                    />
                    {emailError &&
                        (<p className='email-error' style={{ color: 'red', fontSize: '14px' }}>
                            {emailError}</p>)}
                </label>
                <br />
                <label className={styles["form-label"]}>
                    Password:
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={loginData.password}
                        onBlur={passwordValidator}
                        onChange={handleChange}
                        className={styles["form-input"]}
                    />
                    {passwordError &&
                        (<p className='password-error' style={{ color: 'red', fontSize: '14px' }}>
                            {passwordError}</p>)}
                </label>
                <br />
                <button type="submit" className={styles["submit-button"]}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;