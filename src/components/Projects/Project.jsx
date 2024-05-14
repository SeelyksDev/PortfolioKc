import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectCardData from "../../data/projectCardData.json";
import ModalProject from "../ModalProject/ModalProject";
import { useState } from "react";
import './Project.scss'

const Project = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const handleClick = () => {
        document.body.style.overflow = "hidden"
    };

    const handleCardClick = (data) => {
        setSelectedProject(data);
    };

    return (
        <section className="projets" id="projets">
        <div className="projets__titleGlass">
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
    )
}

export default Project