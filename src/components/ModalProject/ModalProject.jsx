import { useEffect, useRef, useState } from "react";
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import "./ModalProject.scss";

const ModalProject = ({ closeModal, projectData, stopScroll }) => {
    const modalRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
                document.body.style.overflow = "auto"; // Réactiver le défilement
            }
        };

        stopScroll();
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [closeModal, stopScroll]);

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
        <div ref={modalRef} className="modal">
            <div className="modal__carousel">
                <img
                    className="modal__carousel__img"
                    src={currentImage}
                    alt="slider"
                />
                <div className="modal__caroussel__arrows">
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
            <div className="modal__description">
                <h3 className="modal__description__title">
                    {projectData.title}
                </h3>
                <ul>
                    {projectData.technology.map((tech, index) => (
                        <img
                            key={index}
                            src={tech}
                            alt="tech-icon"
                            className="modal__description__techIcon"
                        />
                    ))}
                </ul>
            </div>
            <p className="modal__description__text">
                {projectData.description}
            </p>

            <ul className="modal__description__buttonsContainer">
                <div
                    className="modal__description__closeContainer"
                    onClick={handleModalClose}
                >
                    <li>FERMER</li>
                </div>
                <a
                    className="modal__description__btnGithub"
                    href={projectData.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <li onClick={handleModalClose}>OUVRIR SUR GITHUB</li>
                </a>
            </ul>
        </div>
    );
};

export default ModalProject;
