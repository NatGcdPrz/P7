import "@/components/footer/Footer.css";

import Logo from "@/assets/img/kaza-blanc.png";

const Footer = () => {

    return (
        <footer className="footer">
            <div>
                <img className="logo_footer" src={Logo} alt="Logo Kasa" />
            </div>
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;