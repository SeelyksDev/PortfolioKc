import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import "./ModalProject.css";

const ModalProject = ({ closeModal, projectData }) => {
    return (
        <section className="modal-blur-container">
            <div className="modal-container">
                <div className="carousel">
                    <img
                        className="carousel__img"
                        src={projectData.cover}
                        alt="slider"
                    />
                    <div className="arrows">
                        <img
                            className="arrow left"
                            src={arrowLeft}
                            alt="arrow-left"
                        />
                        <img
                            className="arrow right"
                            src={arrowRight}
                            alt="arrow-right"
                        />
                    </div>
                </div>
                <div className="modal-description-header">
                    <h3 className="modal-description-title">
                        {projectData.title}
                    </h3>
                    <ul>
                        {projectData.technology.map((tech, index) => (
                            <img
                                key={index}
                                src={tech}
                                alt="tech-icon"
                                className="tech-icon"
                            />
                        ))}
                    </ul>
                </div>
                <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                    sunt repudiandae saepe illum, quod cupiditate accusantium
                    explicabo eveniet alias facilis at, eius excepturi dolorum
                    dolorem quo similique quae hic aut?
                </p>

                <ul className="buttons-container">
                    <li className="btn-close" onClick={closeModal}>
                        Fermer
                    </li>
                    <a href="#">
                        <li>Ouvrir sur GitHub</li>
                    </a>
                </ul>
            </div>
        </section>
    );
};

export default ModalProject;
