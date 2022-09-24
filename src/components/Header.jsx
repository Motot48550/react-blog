import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { createRef } from 'react';



function Header() {
    const overlay = createRef();
    function toggleMenu() {
        document.body.classList.toggle('mobile-menu-active');
        overlay.current.style.display = 'block';
    }
    function hideMenu() {
        if (document.body.classList.contains('mobile-menu-active')) {
            document.body.classList.remove('mobile-menu-active')
            overlay.current.style.display = 'none'
        }
    }
    return (
        <header id="masthead" className="site-header" role="banner">
            <div className="site-branding">
                <div id="logo" className="text-logo">
                    <Link to="/">
                        <img src={logo} alt="" className="blog-logo" /></Link>
                </div>

                <a href="#" id="pull" className="toggle-mobile-menu" onClick={toggleMenu}>Menu</a>
                <div className="primary-navigation">
                    <nav id="navigation" className="mobile-menu-wrapper" role="navigation">
                        <ul className="menu clearfix toggle-menu">
                            <li className="cat-item cat-item-1"><Link to="/category/cars" onClick={hideMenu}>CARS</Link>
                            </li>
                            <li className="cat-item cat-item-3"><Link to="/category/tech" onClick={hideMenu}>TECH</Link>
                            </li>
                            <li className="cat-item cat-item-4"><Link to="/category/world" onClick={hideMenu}>WORLD</Link>
                            </li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-overlay" ref={overlay} onClick={hideMenu}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;