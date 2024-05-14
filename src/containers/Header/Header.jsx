import "./Header.scss";
import MePc from "../../assets/me/bitmoji-pc.png";

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav" id="nav">
                <img className="header__logo" src={MePc} alt="logo du site" />
                <ul className="header__allLinks">
                    <li className="header__linkContainer">
                        <a className="header__link" href="#a-propos">
                            À propos de moi
                        </a>
                    </li>
                    <li className="header__linkContainer">
                        <a className="header__link" href="#projets">
                            Projets
                        </a>
                    </li>
                    <li className="header__linkContainer">
                        <a className="header__link" href="#MySkill">
                            Skills
                        </a>
                    </li>
                    <a
                        href="../../assets/cv-kevin-cordier.pdf"
                        download="cv-kevin-cordier.pdf"
                    >
                        <li className="header__linkContainer--nomargin">
                            Download CV <i className="fa-solid fa-download"></i>
                        </li>
                    </a>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
