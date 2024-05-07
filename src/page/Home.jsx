
import Menu from "../components/Menu/Menu"
import Herobanner from "../components/HeroBanner/HeroBanner"
import './Home.css';


function Home() {
  return (
      <section className="container">
    <header className="header">
      < Menu/>
    </header>
    <main className="main-home">
      < Herobanner/>
    </main>
    </section>

  );
}

export default Home;
