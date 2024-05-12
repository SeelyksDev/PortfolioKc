import { useEffect, useRef, useState } from "react";
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import "./ModalProject.css";

const ModalProject = ({ closeModal, projectData, stopScroll }) => {
    const modalRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        stopScroll();
        // Ajoute un écouteur d'événements pour gérer les clics à l'extérieur de la modal
        document.addEventListener("mousedown", handleOutsideClick);
        // Retourne une fonction de nettoyage pour supprimer l'écouteur d'événements
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (event) => {
        // Si l'événement de clic se produit à l'extérieur de la modal, fermez la modal
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
            document.body.style.overflow = "auto"; // Réactiver le défilement
        }
    };

    const handleModalClose = () => {
        closeModal();
        document.body.style.overflow = "auto"; // Réactiver le défilement
    };

    const leftClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectData.pictures.length - 1 : prevIndex - 1
        );
    };

    const rightClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projectData.pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentImage = projectData.pictures[currentIndex];

    return (
        <section className="modal-blur-container">
            <div ref={modalRef} className="modal-container">
                <div className="carousel">
                    <img
                        className="carousel__img"
                        src={currentImage}
                        alt="slider"
                    />
                    <div className="arrows">
                        <img
                            className="arrow left"
                            src={arrowLeft}
                            alt="arrow-left"
                            onClick={leftClick}
                        />
                        <img
                            className="arrow right"
                            src={arrowRight}
                            alt="arrow-right"
                            onClick={rightClick}
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
                <p className="description">{projectData.description}</p>

                <ul className="buttons-container">
                    <div className="close-btn-glass" onClick={handleModalClose}>
                        <li className="btn-close">FERMER</li>
                    </div>
                    <a
                        className="btn-open-github"
                        href={projectData.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <li onClick={handleModalClose}>OUVRIR SUR GITHUB</li>
                    </a>
                </ul>
            </div>
        </section>
    );
};

export default ModalProject;
