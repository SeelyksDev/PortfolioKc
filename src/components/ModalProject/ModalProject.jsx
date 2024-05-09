import "./ModalProject.css";

const ModalProject = ({ image, pictures, closeModal }) => {
    return (
        <section className="modal-blur-container">
            <div className="modal-container">
                <div className="carousel">
                    <img src={image} alt="slider" />
                    <div className="arrows">
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="modal-description-header">
                    <img className="logo-project" src="" alt="" />
                    {/*  {pictures.map((picture, index) => (
                        <img src={picture} alt="technologie" />
                    ))}
                */}
                </div>
                <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                    sunt repudiandae saepe illum, quod cupiditate accusantium
                    explicabo eveniet alias facilis at, eius excepturi dolorum
                    dolorem quo similique quae hic aut?
                </p>
                <div className="buttons-container">
                    <ul>
                        <li onClick={() => closeModal()}>Fermer</li>

                        <a href="#">
                            <li>Ouvrir sur GitHub</li>
                        </a>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ModalProject;
