import portrait from "../../assets/me/moi.jpg";
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
                    Plongez dans mon portfolio pour découvrir mes projets et
                    <br /> mes compétences en constante évolution
                </p>
                <ul className="heroBanner__socialContainer">
                    <a
                        href="https://www.linkedin.com/in/kevincordierdev/"
                        target="_blank"
                        rel="noreferrer"
                        className="heroBanner__social linkedin-margin"
                    >
                        <li>
                            <span className="linkedin">LinkedIn</span>
                            <i className="fa-brands fa-linkedin"></i>
                        </li>
                    </a>
                    <a
                        href="https://github.com/SeelyksDev"
                        target="_blank"
                        rel="noreferrer"
                        className="heroBanner__social"
                    >
                        <li>
                            <span className="github">Github</span>
                            <i className="fa-brands fa-github"></i>
                        </li>
                    </a>
                </ul>
            </section>
            <section className="heroBanner__rightside">
                <div className="heroBanner__glassPicture">
                    <img
                        className="heroBanner__picture"
                        src={portrait}
                        alt="portrait representant kevin"
                    />
                </div>
            </section>
        </section>
    );
};

export default HeroBanner;
