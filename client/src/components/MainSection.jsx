import Article from "./Article";
import '../assets/css/screen.css';

export default function Main(props) {
    console.log(props);
    let huts = props.hutsData.map((hut) => {
        return (
            <div key={hut.id.toString()} className="grid">
                <Article huts={hut} />
            </div>

        )
    })

    return (
        <main id="content" className="content" role="main">
            <div className="wraps">
                {huts}
            </div>
        </main>
    )

}