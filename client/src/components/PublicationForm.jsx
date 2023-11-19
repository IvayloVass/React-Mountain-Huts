import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as hutsService from '../services/hutsService.js';
import styles from './PublicationForm.module.css';


const PublicationForm = () => {

    const [formData, setFormData] = useState({
        title: '',
        picture: '',
        description: '',
        content: ''
    });

    const [errorMsg, setErrorMsg] = useState({
        title: '',
        picture: '',
        description: '',
        content: ''
    });

    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        console.log(formData);

        if (submitValidation()) {
            hutsService.postHut(formData);
            setMessage('Post successfully created!');

            setTimeout(() => {
                navigate('/')
            }, 1500);
            
        } else {
            setMessage('Fill required fields!');
        }

        function submitValidation() {
            return formData.title.trim() !== '' && formData.description.trim() !== '' && formData.content.trim() !== '';
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleValidator(e) {
        const { name, value } = e.target;
        value.trim() === '' ? setErrorMsg({ ...errorMsg, [name]: 'This is a required field!' })
            : setErrorMsg({ ...errorMsg, [name]: '' });
    }

    return (
        <div className={styles["contact-container"]}>
            <h2>Create Publication</h2>
            {message &&
                (<p className='success' style={{
                    color: 'green', fontSize: '20px', marginTop: '10px',
                    border: '1px solid green',
                    borderRadius: '5px'
                }}>
                    {message}</p>)}
            <form onSubmit={submitHandler}>
                <label className={styles["form-label"]}>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        onBlur={handleValidator}
                        className={styles["form-input"]}
                    />
                    {errorMsg.title &&
                        (<p className='post-error' style={{ color: 'red', fontSize: '14px', marginTop: '0px' }}>
                            {errorMsg.title}</p>)}
                </label>
                <br />
                <label className={styles["form-label"]}>
                    Picture url:
                    <input
                        type="text"
                        name="picture"
                        value={formData.picture}
                        onChange={handleChange}
                        className={styles["form-input"]}
                    />
                </label>
                <br />
                <label className={styles["form-label"]}>
                    Description:
                    <textarea id='description'
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        onBlur={handleValidator}
                        className={styles["form-textarea"]}
                    ></textarea>
                </label>
                {errorMsg.description &&
                    (<p className='post-error' style={{ color: 'red', fontSize: '14px', marginTop: '0px' }}>
                        {errorMsg.description}</p>)}
                <br />
                <label className={styles["form-label"]}>
                    Content:
                    <textarea id='content'
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        onBlur={handleValidator}
                        className={styles["form-textarea-content"]}
                    ></textarea>
                </label>
                {errorMsg.content &&
                    (<p className='post-error' style={{ color: 'red', fontSize: '14px', marginTop: '0px' }}>
                        {errorMsg.content}</p>)}
                <br />
                <button type="submit" className={styles["submit-button"]}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PublicationForm;