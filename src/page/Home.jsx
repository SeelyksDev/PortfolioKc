import Menu from "../components/Menu/Menu";
import Herobanner from "../components/HeroBanner/HeroBanner";
import bitmojiHey from "../assets/me-hey.png";
import "./Home.css";

function Home() {
    return (
        <section className="container">
            <header className="header">
                <Menu />
            </header>
            <main className="main-home">
                <Herobanner />
                <section className="a-propos">
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
            </main>
        </section>
    );
}

export default Home;
