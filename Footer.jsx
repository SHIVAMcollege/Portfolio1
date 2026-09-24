function Footer() {
    return (
        <footer className="footer">
            <p>
                © {new Date().getFullYear()} ShivamBlogs.
                All Rights Reserved.
            </p>

            <p>
                Built using React.
            </p>
        </footer>
    );
}

export default Footer;