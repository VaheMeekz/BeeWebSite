import './App.css';
import Header from "./components/header/header";
import About from "./components/about/about";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Tecnologies from "./components/tecnologise/tecnologies";
import Team from "./components/team/team";
import Footer from "./components/footer/footer";
import Digital from './components/digital/Digital';
import React from "react";
import ScrollToTopBtn from "./components/scrollToTop/ScrollToTop";


function App() {

    // const mode = useSelector(state => state.modeReducer.mode)
    // const [darkMode, setDarkMode] = useState(mode)


    return (
        <div className="App">
            <Header/>

            <section id="digital" className="digitalSection">
                <Digital/>
            </section>
            <section id="about" className="aboutSection">
                <About/>
            </section>
            <section id="services" className="servicesSection">
                <Services/>
            </section>
                {/*<Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>*/}
            <section id="portfolio" className="portfolioSection">
                <Portfolio/>
            </section>
            <section id="tecnologies" className="tecnologiesSection">
                <Tecnologies/>
            </section>
            <section id="team" className="teamSection">
                <Team/>
            </section>
            <Footer/>
            <ScrollToTopBtn/>
        </div>
    );
}

export default App;
