import Header from "../containers/Header/Header";
import Herobanner from "../containers/HeroBanner/HeroBanner";
import Footer from "../containers/Footer/Footer";
import Info from "../containers/Info/Info";
import AboutMe from "../components/AboutMe/AboutMe";
import Education from "../components/Education/Education";
import Project from "../containers/Projects/Project";
import Skills from "../containers/Skills/Skills";
import "./Home.scss";

const Home = () => {
    return (
        <section className="container" id="container">
            <Header />
            <main className="main">
                <Herobanner />
                <Info />
                <section className="aboutMe-education" id="a-propos">
                    <AboutMe />
                    <Education />
                </section>
                <Project />
                <Skills />
            </main>
            <Footer />
        </section>
    );
};

export default Home;
