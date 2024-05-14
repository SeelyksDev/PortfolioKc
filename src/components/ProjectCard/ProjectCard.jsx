import "./ProjectCard.scss";

const ProjectCard = ({ image, alt, onClick }) => {
    return (
        <a href="#projets" className="glass-container" onClick={onClick}>
            <img className="project__img" src={image} alt={alt} />
        </a>
    );
};

export default ProjectCard;
