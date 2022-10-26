import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

import "@/components/header/Header.css";

import Logo from "@/assets/img/kasa.png";

const Header = () => {
    const location = useLocation();

    return (
        <header className="header">
            <div>
                <img className="logo" src={Logo} alt="Logo Kasa" />
            </div>
            <nav className="nav">
                <ul className="menu">
                    <li className={`menu_item ${location.pathname === "/" && 'active'}`}>
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                    <li className={`menu_item ${location.pathname === "/about" && 'active'}`}>
                        <Link to="/about">
                            A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;