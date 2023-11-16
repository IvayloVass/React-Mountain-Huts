export default function Header() {
    return (
        <header
            className="main-header "
            style={{ backgroundImage: "url(/src/assets/img/mazalat.jpg)" }}
        >
            <div className="vertical">
                <div className="main-header-content inner">
                    <h1 className="page-title">Mauntain Huts</h1>
                    <div className="entry-title-divider">
                        <span />
                        <span />
                        <span />
                    </div>
                    <h2 className="page-description">
                        Thoughts, reviews, and ideas since Aleko's first trip
                        <br></br>In 1894.
                    </h2>
                </div>
            </div>
            <a
                className="scroll-down icon-arrow-left"
                href="#content"
                data-offset={-45}
            >
                <span className="hidden">Scroll Down</span>
            </a>
        </header>
    )
}