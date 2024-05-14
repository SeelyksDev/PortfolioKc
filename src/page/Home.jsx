import Header from "../components/Header/Header";
import Herobanner from "../components/HeroBanner/HeroBanner";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";
import AboutMe from "../components/AboutMe/AboutMe";
import Education from "../components/Education/Education";
import Project from "../components/Projects/Project";
import "./Home.scss";
import Skills from "../components/Skills/Skills";

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
