import Header from "../components/Header/Header";
import Herobanner from "../components/HeroBanner/HeroBanner";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectCardData from "../data/projectCardData.json";
import TechSkills from "../data/techSkills.json";
import "./Home.css";
import ModalProject from "../components/ModalProject/ModalProject";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleClick = () => {
        document.body.style.overflow = "hidden"
    };
 
    const handleCardClick = (data) => {
        setSelectedProject(data);
    };

    return (
        <section className="container" id="container">
            <header className="header">
                <Header />
            </header>
            <main className="main-home">
                <section className="heroBanner__container">
                    <Herobanner />
                </section>
                <ul className="info">
                    <li className="info__location info__bubble">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="location__text">Île-de-France</p>
                    </li>
                    <li className="info__project info__bubble">
                        <i class="fa-solid fa-check"></i>
                        <p>Nombre de projets : 12</p>
                    </li>
                    <li className="info__email info__bubble">
                        <i class="fa-solid fa-envelope"></i>
                        <a
                            className="menu__mail"
                            href="mailto:kevincordier.dev@gmail.com"
                        >
                            kevincordier.dev@gmail.com
                        </a>
                    </li>
                </ul>
                <section className="a-propos-formation-container" id="a-propos">
                    <section className="a-propos">
                        <div className="a-propos__header">
                            <h2 className="a-propos__title">À propos de moi</h2>
                        </div>
                        <p className="a-propos__content">
                            Je suis un jeune développeur enthousiaste de 23 ans
                            qui cherche constamment à allier l'esthétique et la
                            fonctionnalité dans mes projets. Je suis prêt à
                            relever les défis les plus complexes et à
                            transformer les idées en réalité.
                        </p>
                    </section>
                    <section className="myEducation">
                        <div className="myEducation__titleBackground">
                            <h2 className="myEducation__title">Ma Formation</h2>
                        </div>
                        <p className="myEducation__text">
                            La formation d'Intégrateur Web chez OpenClassrooms
                            m'a permis durant neuf mois enrichissants de plonger
                            au cœur des technologies fondamentales de
                            l'intégration web, acquérant les compétences
                            nécessaires pour concevoir et développer des sites
                            web modernes et fonctionnels. Cette formation m'a
                            permis de pratiquer les langages de balisage HTML et
                            CSS, ainsi que des outils avancés tels que Sass.
                            J'ai également exploré les possibilités infinies
                            offertes par JavaScript. Un aspect essentiel de
                            cette formation était la compréhension approfondie
                            du SEO. L'un des moments forts de cette formation a
                            été l'exploration de React et Redux, deux
                            technologies révolutionnaires.
                        </p>
                    </section>
                </section>
                <section className="projets" id="projets">
                    <div className="projet-title-glass">
                        <h2 className="projets__title">Mes Projets</h2>
                    </div>
                    <p className="projets__subtitle">
                        Je mets vos idées et donc vos souhaits sous la forme
                        d'un projet web unique qui vous inspire, vous et vos
                        clients.
                    </p>
                    <div className="projets__cardsContainer">
                        {ProjectCardData.map((data, index) => (
                            <ProjectCard
                                key={data.id}
                                image={data.cover}
                                alt={data.alt}
                                onClick={() => handleCardClick(data)}
                            />
                        ))}
                        {selectedProject && (
                            <ModalProject
                                projectData={selectedProject}
                                closeModal={() => setSelectedProject(null)}
                                stopScroll={handleClick}
                            />
                        )}
                    </div>
                </section>
                <section className="mySkills" id="MySkill">
                    <div className="skills-title-glass">
                        <h2 className="skill-title">Mes Skills</h2>
                    </div>
                    <p className="skill-subtitle">
                        Les technologies & logiciels utilisés à travers mon
                        expérience.
                    </p>
                    <section className="skills-cards">
                        {TechSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="skill-container-background"
                            >
                                <div className="skill-card-description">
                                    <div className="skill-card">
                                        <img
                                            className="skill-logo"
                                            src={skill.logo}
                                            alt="logo-skills"
                                        />
                                    </div>
                                    <p className="title-logo">{skill.title}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                </section>
                <footer className='footer'>
                    <Footer />
                </footer>
            </main>
        </section>
    );
};

export default Home;
