
import { useState } from 'react'
import styles from './Register.module.css'
const Register = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    function handleRegister(e) {
        e.preventDefault();
        let formData = Object.fromEntries(new FormData(e.currentTarget))
        console.log(formData);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className={styles.container}>
            <h2>Registration Form</h2>
            <form onSubmit={handleRegister}>
                <label className={styles["form-label"]}>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={styles["form-input"]}
                        required
                    />
                </label>
                <br />
                <label className={styles["form-label"]}>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={styles["form-input"]}
                        required
                    />
                </label>
                <br />
                <label className={styles["form-label"]}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles["form-input"]}
                        required
                    />
                </label>
                <br />
                <label className={styles["form-label"]}>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={styles["form-input"]}
                        required
                    />
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