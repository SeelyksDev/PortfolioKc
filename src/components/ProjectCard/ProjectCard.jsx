import "./ProjectCard.css";

const ProjectCard = ({ image, alt }) => {
    return (
        <div className="glass-container">
            <img className="project__img" src={image} alt={alt} />
        </div>
    );
};

export default ProjectCard;
