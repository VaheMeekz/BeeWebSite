import './App.css';
import Header from "./components/header/header";
import About from "./components/about/about";
import Services from "./components/services/services";
import Tecnologies from "./components/tecnologise/tecnologies";
import Footer from "./components/footer/footer";
import Digital from './components/digital/Digital';
import React from "react";
import ScrollToTopBtn from "./components/scrollToTop/ScrollToTop";
import Portfolio from './components/portfolio/portfolio';
import Team from "./components/team/team";


function App() {

    return (
        <div className="App">
            {/*<Header/>*/}
            {/*<section id="digital" className="digitalSection">*/}
            {/*    <Digital/>*/}
            {/*</section>*/}
            {/*<section id="about" className="aboutSection">*/}
            {/*    <About/>*/}
            {/*</section>*/}
            {/*<section id="services" className="servicesSection">*/}
            {/*    <Services/>*/}
            {/*</section>*/}
            {/*<div className="effect effect-1"></div>*/}
            {/*<section id="portfolio" className="portfolioSection">*/}
            {/*    <Portfolio/>*/}
            {/*</section>*/}
            {/*<section id="tecnologies" className="tecnologiesSection">*/}
            {/*    <Tecnologies/>*/}
            {/*</section>*/}
            <section id="team" className="teamSection">
               <Team/>
            </section>
            <section className="container">
                <div>
                    <div>
                        <span className="one h6"></span>
                        <span className="two h3"></span>
                    </div>
                </div>


                <div>
                    <div>
                        <span className="one h1"></span>
                        <span className="two h4"></span>
                    </div>
                </div>


                <div>
                    <div>
                        <span className="one h5"></span>
                        <span className="two h2"></span>
                    </div>
                </div>
            </section>
            <section id="contact">
                <Footer/>
            </section>
            <section className="toTop">
                <ScrollToTopBtn/>
            </section>
        </div>
    );
}

export default App;
