import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigation = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('accessToken') !== null) {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);

    return (
        <nav className="main-nav overlay clearfix">
            <a className="blog-logo" href="/">
                <img src="/src/assets/img/logo-m.png" alt="Mauntaint Huts" />
            </a>
            <ul id="menu">
                <li className="nav-home nav-current" role="presentation">
                    <Link to="/">Home</Link>
                </li>
                {isLoggedIn ?
                    (
                        <>
                            <li className="nav-article-example" role="presentation">
                                <Link to="/create/publication">Create Publication</Link>
                            </li>
                            <li className="nav-about-us" role="presentation">
                                <Link to="#">Logout</Link>
                            </li>
                        </>
                    )
                    :
                    (
                        <>
                            <li className="nav-about-us" role="presentation">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="nav-about-us" role="presentation">
                                <Link to="/register">Register</Link>
                            </li>
                        </>
                    )
                }
                <li className="nav-author-page" role="presentation">
                    <Link to="#">About Us</Link>
                </li>
                <span className="socialheader">
                    <a href="#">
                        <span className="symbol">circletwitterbird</span>
                    </a>
                    <a href="#">
                        <span className="symbol">circlefacebook</span>
                    </a>
                    <a href="#">
                        <span className="symbol">circlegoogleplus</span>
                    </a>
                    <a href="mailto:ivaylovasileff@gmail.com">
                        <span className="symbol">circleemail</span>
                    </a>
                </span>
            </ul>
        </nav>
    )
}

export default Navigation;