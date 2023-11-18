import { useState, useEffect } from 'react';
import styles from './Login.module.css';
const Login = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    function handleLogin(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    return (
        <div className={styles["login-container"]}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label className={styles["form-label"]}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={loginData.email}
                        onChange={handleChange}
                        className={styles["form-input"]}
                    />
                </label>
                <br />
                <label className={styles["form-label"]}>
                    Password:
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={loginData.password}
                        onChange={handleChange}
                        className={styles["form-input"]}
                    />
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