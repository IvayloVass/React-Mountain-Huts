import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as hutsService from '../services/hutsService.js';
import styles from './PublicationForm.module.css';


const EditPublication = () => {

    const [formData, setFormData] = useState({
        title: '',
        picture: '',
        description: '',
        content: ''
    });
    const { id } = useParams();

    useEffect(() => {
        hutsService.getChoosenHut(id)
            .then(result => setFormData(result));
    }, [id]);

    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    async function editHandler(e) {
        e.preventDefault();
        console.log(formData);
        const result = await hutsService.editeHut("PUT", id, formData, sessionStorage.getItem('accessToken'));
        if (result) {
            setMessage('The post was edited successfully!');
            setTimeout(() => {
                navigate('/');
            }, 1500);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className={styles["contact-container"]}>
            <h2>Edit Publication</h2>
            {message &&
                (<p className='success' style={{
                    color: 'green', fontSize: '20px', marginTop: '10px',
                    border: '1px solid green',
                    borderRadius: '5px'
                }}>
                    {message}</p>)}
            <form onSubmit={editHandler}>
                <label className={styles["form-label"]}>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={styles["form-input"]}
                    />
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
                        className={styles["form-textarea"]}
                    ></textarea>
                </label>
                <br />
                <label className={styles["form-label"]}>
                    Content:
                    <textarea id='content'
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className={styles["form-textarea-content"]}
                    ></textarea>
                </label>
                <br />
                <button type="submit" className={styles["submit-button"]}>
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditPublication;