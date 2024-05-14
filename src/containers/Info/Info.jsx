import "./Info.scss";

const Info = () => {
    return (
        <section className="info">
            <ul className="info__container">
                <li className="info__location info__bubble">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="info__location">Île-de-France</p>
                </li>
                <li className="info__project info__bubble">
                    <i className="fa-solid fa-check"></i>
                    <p>Nombre de projets : 12</p>
                </li>
                <li className="info__email info__bubble">
                    <i className="fa-solid fa-envelope"></i>
                    <a
                        className="info__mail"
                        href="mailto:kevincordier.dev@gmail.com"
                    >
                        kevincordier.dev@gmail.com
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Info;
