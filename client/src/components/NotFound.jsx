import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {

    return (
        <div className={styles['not-found-container']}>
            <h1>404 - Not Found</h1>
            <p>Oops! The page you are looking for is currently unavailable!</p>
            <Link to="/">
                <button className={styles['back-to-home-button']}>Back to Home</button>
            </Link>
        </div>
    );

}

export default NotFound;