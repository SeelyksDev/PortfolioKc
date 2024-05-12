import "./Menu.css";
import MePc from "../../assets/me/bitmoji pc.png";

const Menu = () => {
    return (
        <nav className="menu__nav" id="nav">
            <div className="menu__logo-header">
                <img className="menu__logo" src={MePc} alt="logo du site" />
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
                    <a className="link" href="#MySkill">
                        Skills
                    </a>
                </li>
                <a
                    href="../../assets/cv-kevin-cordier.pdf"
                    download="cv-kevin-cordier.pdf"
                >
                    <li className="menu__link--nomargin">
                        Download CV <i className="fa-solid fa-download"></i>
                    </li>
                </a>
            </ul>
        </nav>
    );
};

export default Menu;
