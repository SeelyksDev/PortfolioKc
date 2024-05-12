import { useEffect, useRef } from "react";
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import "./ModalProject.css";

const ModalProject = ({ closeModal, projectData, stopScroll }) => {
    const modalRef = useRef(null);

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

    return (
        <section className="modal-blur-container">
            <div ref={modalRef} className="modal-container">
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
                    <li className="btn-close" onClick={handleModalClose}>
                        Fermer
                    </li>
                    <a href={projectData.link} target="_blank" rel="noreferrer">
                        <li onClick={handleModalClose}>Ouvrir sur GitHub</li>
                    </a>
                </ul>
            </div>
        </section>
    );
};

export default ModalProject;
