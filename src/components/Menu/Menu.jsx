import "./Menu.css"
import KevinLogo from "../../assets/bitmoji pc.png"

const Menu = () => {
return (
    <nav className="menu__nav" id="nav">
        <div className="menu__logo-mail">
            <img
                className="menu__logo"
                src={KevinLogo}
                alt="logo du site"
            />
            <a className="menu__mail" href="mailto:kevincordier.dev@gmail.com">kevincordier.dev@gmail.com</a>
            </div>
            <ul className="menu__links__container">
                <li className="menu__link">
                    <a href="#">Accueil</a>
                </li>
                <li className="menu__link">
                    <a href="">À propos de moi</a>
                </li>
                <li className="menu__link">
                    <a href="#">Projets</a>
                </li>
                <li className="menu__link">
                    <a href="#">Skills</a>
                </li>
                <li className="menu__link--nomargin">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
)
}

export default Menu