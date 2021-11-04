import './App.css';
import Header from "./components/header/header";
import About from "./components/about/about";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Tecnologies from "./components/tecnologise/tecnologies";
import Team from "./components/team/team";
import Footer from "./components/footer/footer";
import Digital from './components/digital/Digital';
import ScrollToTopBtn from "../src/components/scrollToTop/ScrollToTop";

function App() {
    return (

        // pwa


        <div className="App">
            <Header/>
            <section id="digital">
                <Digital/>
            </section>
            <section id="about">
                <About/>
            </section>
            <section id="services">
                <Services/>
            </section>
            <section id="portfolio">
                <Portfolio/>
            </section>
            <section id="tecnologies">
                <Tecnologies/>
            </section>
            <section id="team">
                <Team/>
            </section>
            <Footer/>
            <ScrollToTopBtn />
        </div>
    );
}

export default App;
