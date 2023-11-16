import { useNavigate } from 'react-router-dom';
import * as hutsService from '../services/hutsService.js';
import styles from './PublicationForm.module.css';


const PublicationForm = () => {

    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        console.log(formData);
        hutsService.postHut(formData);
        setTimeout(() => {
            navigate("/");
        }, 1500);
    }

    return (
        <div className={styles["contact-container"]}>
            <h2>Create Publication</h2>
            <form onSubmit={submitHandler}>
                <label className={styles["form-label"]}>
                    Title:
                    <input
                        type="text"
                        name="title"

                        className={styles["form-input"]}
                        required
                    />
                </label>
                <br />
                <label className={styles["form-label"]}>
                    Picture url:
                    <input
                        type="text"
                        name="picture"
                        className={styles["form-input"]}
                    />
                </label>
                <br />
                <label className={styles["form-label"]}>
                    Description:
                    <textarea id='description'
                        name="description"
                        className={styles["form-textarea"]}
                        required
                    ></textarea>
                </label>
                <br />
                <label className={styles["form-label"]}>
                    Content:
                    <textarea id='content'
                        name="content"
                        className={styles["form-textarea-content"]}
                        required
                    ></textarea>
                </label>
                <br />
                <button type="submit" className={styles["submit-button"]}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PublicationForm;