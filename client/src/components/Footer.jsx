const Footer = () => {

    let date = new Date().getFullYear();

    return (
        <footer className="site-footer clearfix">
            <a href="#top" id="back-to-top" className="back-top" />
            <div className="text-center">
                <a href="#">Mountain huts</a> © {date}
                <br />
                <p>All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;