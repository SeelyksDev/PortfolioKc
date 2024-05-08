import Menu from "../components/Menu/Menu";
import Herobanner from "../components/HeroBanner/HeroBanner";
import bitmojiHey from "../assets/me/me-hey.png";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectCardData from "../data/projectCardData.json";
import "./Home.css";

function Home() {
    return (
        <section className="container" id="container">
            <header className="header">
                <Menu />
            </header>
            <main className="main-home">
                <section className="heroBanner__container">
                    <Herobanner />
                </section>
                <section className="a-propos" id="a-propos">
                    <div className="a-propos__header">
                        <h2 className="a-propos__title">À propos de moi ! </h2>
                        <img
                            className="a-propos__picture"
                            src={bitmojiHey}
                            alt="bitmoji-hey"
                        />
                    </div>
                    <p className="a-propos__content">
                        Je suis un créateur passionné et un codeur enthousiaste
                        qui cherche constamment à allier l'esthétique et la
                        fonctionnalité dans mes projets. Mon parcours dans le
                        développement web a été alimenté par une curiosité
                        insatiable et un désir de repousser les limites de ce
                        qui est possible. Chaque ligne de code que j'écris est
                        guidée par le souci du détail et le désir de créer des
                        expériences utilisateur exceptionnelles. Je suis prêt à
                        relever les défis les plus complexes et à transformer
                        les idées en réalité.
                    </p>
                </section>
                <section className="projets" id="projets">
                    <div className="projet-title-glass">
                        <h2 className="projets__title">Mes projets</h2>
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
                            />
                        ))}
                    </div>
                </section>
            </main>
        </section>
    );
}

export default Home;
