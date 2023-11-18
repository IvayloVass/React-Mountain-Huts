
import { useState } from 'react'
import styles from './Register.module.css'
const Register = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [firstNameError, setFirtNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [passwordError, setPasswodError] = useState('');
    const [emailError, setEmailError] = useState('');

    function handleRegister(e) {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const firstNameValidator = () => {
        if (formData.firstName.trim().length < 2 || formData.firstName.trim().length > 64) {
            setFirtNameError('First Name must be between 2 and 65 characters!');
        } else {
            setFirtNameError('');
        }
    };

    const lastNameValidator = () => {
        if (formData.lastName.trim().length < 2 || formData.lastName.trim().length > 64) {
            setLastNameError('Last Name must be between 2 and 65 characters!');
        } else {
            setLastNameError('');
        }
    };

    const emailValidator = () => {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
        if (!formData.email.match(emailRegex) || formData.email.trim() === '') {
            setEmailError("Enter a valid Email address!")
        } else {
            setEmailError("");
        }
    }

    const passwordValidator = () => {
        let passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#+\-_.!,? *^]).{6,48}$/g;
        if (!formData.password.match(passwordRegex) || formData.password.trim() === '') {
            setPasswodError("The password must contain at least one special char, digit, and letter\r\n"
                + "and be between 6 and 48 characters long!")
        } else {
            setPasswodError('');
        }
    }

    return (
        <div className={styles.container}>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <label className={styles["form-label"]}>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        placeholder='First Name'
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={firstNameValidator}
                        className={styles["form-input"]}
                    />
                </label>
                {firstNameError &&
                    (<p className='name-error' style={{ color: 'red', fontSize: '14px', marginTop: '0px' }}>
                        {firstNameError}</p>)}
                <br />
                <label className={styles["form-label"]}>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        placeholder='Last Name'
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={lastNameValidator}
                        className={styles["form-input"]}
                    />
                    {lastNameError && (<p className='name-error'
                        style={{ color: 'red', fontSize: '14px', marginTop: '0px' }} >
                        {lastNameError}</p>)}
                </label>
                <br />
                <label className={styles["form-label"]}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={emailValidator}
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
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={passwordValidator}
                        className={styles["form-input"]}
                    />
                    {passwordError &&
                        (<p className='password-error' style={{ color: 'red', fontSize: '14px' }}>
                            {passwordError}</p>)}
                </label>
                <br />
                <button type="submit" className={styles["submit-button"]}>
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register;