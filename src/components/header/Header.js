import "./Header.css"
import { Link } from "react-router-dom";
import Logo from "../../assets/img/kasa.png"
const Header = () => {

    return (
        <header className="header">
            <div>
                <img className="logo" src={Logo} alt="Logo Kasa" />
            </div>
            <nav className="nav">
                <ul className="menu">
                    <li className="menu_item">
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                    <li className="menu_item">
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