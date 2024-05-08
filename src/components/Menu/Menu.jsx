import "./Menu.css";
import MePc from "../../assets/me/bitmoji pc.png";

const Menu = () => {
    return (
        <nav className="menu__nav" id="nav">
            <div className="menu__logo-mail">
                <img className="menu__logo" src={MePc} alt="logo du site" />
                <a
                    className="menu__mail"
                    href="mailto:kevincordier.dev@gmail.com"
                >
                    kevincordier.dev@gmail.com
                </a>
            </div>
            <ul className="menu__links__container">
                <li className="menu__link">
                    <a className="link" href="#container">
                        Accueil
                    </a>
                </li>
                <li className="menu__link">
                    <a className="link" href="#a-propos">
                        À propos de moi
                    </a>
                </li>
                <li className="menu__link">
                    <a className="link" href="#projets">
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
