import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import * as hutsService from '../services/hutsService.js';
import '../assets/css/screen.css'

const HutDetails = () => {

    const [hutDetails, setHutDetails] = useState({});
    const [showDeletedBtn, setShowDeletedBtn] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        hutsService.getChoosenHut(id)
            .then(result => {
                setHutDetails(result);
                if (result._ownerId === sessionStorage.getItem('userId')) {
                    setShowDeletedBtn(true);
                }
            })
    }, [id]);

    async function onDeleteHandler() {
        if (confirm("Are you sure you want to delete this post!")) {
            const respStatus = await hutsService.deleteHut("DELETE", id, sessionStorage.getItem("accessToken"));
            if (respStatus === 200) {
                setMessage('The post is successfully deleted!');
                setTimeout(() => {
                    navigate('/')
                }, 1500);

            } else {
                setMessage('Something went wrong, Please try again!');
            }
        }
    }

    return (
        <>
            <header
                className="main-header post-head"
                style={{ backgroundImage: `url(${hutDetails.picture})` }}>
                <div className="vertical">
                    <div className="main-header-content inner">
                        <h1 className="post-title">{hutDetails.title}</h1>
                        <div className="entry-title-divider">
                            <span />
                            <span />
                            <span />
                        </div>
                        <section className="post-meta">
                            <time className="post-date" dateTime="2015-12-13">
                                {hutDetails.createdOn}
                            </time>
                        </section>
                    </div>
                </div>
            </header>
            <main id="content" className="content" role="main">
                {message &&
                    (<p className='delete-msg' style={{
                        color: 'green', fontSize: '20px', marginTop: '10px',
                        border: '1px solid green',
                        borderRadius: '5px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        {message}</p>)}
                <div className="wraps">
                    <article className="post featured">
                        <section className="post-content">
                            <p>
                                <em>
                                    {hutDetails.content}
                                </em>
                            </p>
                        </section>
                        <footer className="post-footer">
                            <figure className="author-image">
                                <span
                                    className="img"
                                    style={{ backgroundImage: "url(/src/assets/img/logo-m.png)" }}
                                >
                                </span>
                            </figure>
                        </footer>
                        <div className="close-details-container">
                            <Link className="close-details" to="/">Close Details</Link>
                            {
                                showDeletedBtn &&
                                (<div className='amend-post'>
                                    <Link className="delete-post" onClick={onDeleteHandler}>Delete Post</Link>
                                    <Link className="edit-post" to={`/edit/publication/${id}`}>Edit Post</Link>
                                </div>)
                            }
                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}

export default HutDetails;
