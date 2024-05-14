import Header from "../components/Header/Header";
import Herobanner from "../components/HeroBanner/HeroBanner";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectCardData from "../data/projectCardData.json";
import TechSkills from "../data/techSkills.json";
import ModalProject from "../components/ModalProject/ModalProject";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";
import AboutMe from "../components/AboutMe/AboutMe";
import Education from "../components/Education/Education";
import "./Home.scss";

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
                <Header />
            <main className="main">        
                    <Herobanner />         
                    <Info />
                    <section className="aboutMe-education" id="a-propos">
                        <AboutMe />
                        <Education />
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
