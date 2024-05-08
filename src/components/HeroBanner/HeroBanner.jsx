import portrait from "../../assets/moi.jpg";
import "./HeroBanner.css";

const HeroBanner = () => {
    return (
        <section className="heroBanner">
            <section className="heroBanner__leftside">
                <p className="heroBanner__name">Je m'appelle Kevin,</p>
                <h1 className="heroBanner__job">
                    Développeur <br /> Front-End Junior
                </h1>
                <p className="heroBanner__subtitle">
                    Plongez dans mon portfolio pour découvrir mes projets,
                    <br /> mes compétences en constante évolution
                </p>
                <ul className="heroBanner__socialContainer">
                    <a
                        href="../../assets/cv-kevin-cordier.pdf"
                        download="cv-kevin-cordier.pdf"
                    >
                        <li className="heroBanner__cv">
                            Download CV <i className="fa-solid fa-download"></i>
                        </li>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kevincordierdev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <li className="heroBanner__social">
                            <i className="fa-brands fa-linkedin"></i>
                        </li>
                    </a>
                    <a
                        href="https://github.com/SeelyksDev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <li className="heroBanner__social">
                            <i className="fa-brands fa-github"></i>
                        </li>
                    </a>
                </ul>
            </section>
            <section className="heroBanner__rightside">
                <img
                    className="heroBanner__picture"
                    src={portrait}
                    alt="portrait representant kevin"
                />
            </section>
        </section>
    );
};

export default HeroBanner;
