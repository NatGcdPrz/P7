import "./Header.css"
import { Link } from "react-router-dom";
import Logo from "../../assets/img/kasa.png"
import { useLocation } from 'react-router-dom';

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