import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <a className="logo" href="#home" onClick={closeMenu}>Shivam<span>Blogs</span></a>

            <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
                {menuOpen ? "Close" : "Menu"}
            </button>

            <nav className={menuOpen ? "nav-open" : ""}>
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#articles" onClick={closeMenu}>Articles</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#subscribe" onClick={closeMenu}>Subscribe</a>
            </nav>
        </header>
    );
}

export default Navbar;