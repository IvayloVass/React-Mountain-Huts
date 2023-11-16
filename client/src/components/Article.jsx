import { Link } from 'react-router-dom';
import '../assets/css/screen.css';


export default function Article({
    id,
    picture,
    title,
    description,
    author,
    createdOn
}) {

    return (
        <div className="grid-item" >
            <article className="post" key={id}>
                <Link to={`/hut/details/${id}`}>
                    <img src={picture} alt={title} />
                </Link>
                <div className="wrapgriditem">
                    <header className="post-header">
                        <h2 className="post-title">
                            <a>{title}</a>
                        </h2>
                    </header>
                    <section className="post-excerpt">
                        <p>
                            {description}
                            <Link to={`/hut/details/${id}`} className="read-more" >
                                {"  "} »
                            </Link>
                        </p>
                    </section>
                    <footer className="post-meta">
                        <span>{author}</span>
                        <time className="post-date" dateTime="2023-04-10">
                            {createdOn}
                        </time>
                    </footer>
                </div>
            </article>
        </div>
    )
}