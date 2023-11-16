import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as hutsService from '../services/hutsService.js';
import '../assets/css/screen.css'

const HutDetails = () => {

    const [hutDetails, setHutDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        hutsService.getChoosenHut(id)
            .then(result => setHutDetails(result));
    }, []);

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
                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}

export default HutDetails;


