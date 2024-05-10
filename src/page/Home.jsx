import Menu from "../components/Menu/Menu";
import Herobanner from "../components/HeroBanner/HeroBanner";
import bitmojiHey from "../assets/me/me-hey.png";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectCardData from "../data/projectCardData.json";
import TechSkills from "../data/techSkills.json";
import "./Home.css";
import ModalProject from "../components/ModalProject/ModalProject";
import { useState } from "react";

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (data) => {
        setSelectedProject(data);
    };

    return (
        <section className="container" id="container">
            <header className="header">
                <Menu />
            </header>
            <main className="main-home">
                <section className="heroBanner__container">
                    <Herobanner />
                </section>
                <section className="a-propos" id="a-propos">
                    <div className="a-propos__header">
                        <h2 className="a-propos__title">À propos de moi ! </h2>
                        <img
                            className="a-propos__picture"
                            src={bitmojiHey}
                            alt="bitmoji-hey"
                        />
                    </div>
                    <p className="a-propos__content">
                        Je suis un créateur passionné et un codeur enthousiaste
                        qui cherche constamment à allier l'esthétique et la
                        fonctionnalité dans mes projets. Mon parcours dans le
                        développement web a été alimenté par une curiosité
                        insatiable et un désir de repousser les limites de ce
                        qui est possible. Chaque ligne de code que j'écris est
                        guidée par le souci du détail et le désir de créer des
                        expériences utilisateur exceptionnelles. Je suis prêt à
                        relever les défis les plus complexes et à transformer
                        les idées en réalité.
                    </p>
                </section>
                <section className="projets" id="projets">
                    <div className="projet-title-glass">
                        <h2 className="projets__title">Mes projets</h2>
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
                            />
                        )}
                    </div>
                </section>
                <section className="mySkills">
                    <div className="skills-title-glass">
                        <h2 className="skill-title">Mes Skills</h2>
                    </div>
                    <p className="skill-subtitle">
                        Les technologies & logiciels utilisés à travers ma jeune
                        expérience.
                    </p>
                    <section className="skills-cards">
                        {TechSkills.map((skill, index) => (
                            <div key={index} className="skill-card-description">
                                <div className="skill-card">
                                    <img
                                        className="skill-logo"
                                        src={skill.logo}
                                        alt="logo-skills"
                                    />
                                </div>
                                <p className="title-logo">{skill.title}</p>
                            </div>
                        ))}
                    </section>
                </section>
            </main>
        </section>
    );
};

export default Home;
