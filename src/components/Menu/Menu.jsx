import "./Menu.css";
import KevinLogo from "../../assets/bitmoji pc.png";

const Menu = () => {
    return (
        <nav className="menu__nav" id="nav">
            <div className="menu__logo-mail">
                <img
                    className="menu__logo"
                    src={KevinLogo}
                    alt="logo du site"
                />
                <a
                    className="menu__mail"
                    href="mailto:kevincordier.dev@gmail.com"
                >
                    kevincordier.dev@gmail.com
                </a>
            </div>
            <ul className="menu__links__container">
                <li className="menu__link">
                    <a className="link" href="#">
                        Accueil
                    </a>
                </li>
                <li className="menu__link">
                    <a className="link" href="">
                        À propos de moi
                    </a>
                </li>
                <li className="menu__link">
                    <a className="link" href="#">
                        Projets
                    </a>
                </li>
                <li className="menu__link">
                    <a className="link" href="#">
                        Skills
                    </a>
                </li>
                <a href="#">
                    <li className="menu__link--nomargin">Contact</li>
                </a>
            </ul>
        </nav>
    );
};

export default Menu;
