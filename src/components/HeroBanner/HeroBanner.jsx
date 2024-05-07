import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import portrait  from "../../assets/moi.jpg"
import "./HeroBanner.css"

const HeroBanner = () => {
    return (
        <section className="heroBanner">
            <section className="heroBanner__leftside">
                <p className="heroBanner__name">Je suis Kevin</p>
                <h1 className="heroBanner__job">Développeur <br /> Front-End Junior</h1>
                <p className="heroBanner__subtitle">Plongez dans mon portfolio pour découvrir mes projets,<br /> mes compétences en constante évolution</p>
                    <ul className="heroBanner__socialContainer">
                        <li className="heroBanner__cv">Download CV <MdOutlineFileDownload size={25} /></li>
                        <li className="heroBanner__social"><a href="https://www.linkedin.com/in/kevincordierdev/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
                        <li className="heroBanner__social"><a href="https://github.com/SeelyksDev" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                    </ul>
            </section>
            <section className="heroBanner__rightside">
        <img className="heroBanner__picture" src={portrait} alt="portrait representant kevin" />
            </section>
        </section>
    )
}

export default HeroBanner