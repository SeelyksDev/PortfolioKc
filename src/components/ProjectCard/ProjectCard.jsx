import "./ProjectCard.css";

const ProjectCard = ({ image, alt, onClick }) => {
    return (
        <div className="glass-container" onClick={onClick}>
            <img className="project__img" src={image} alt={alt} />
        </div>
    );
};

export default ProjectCard;
