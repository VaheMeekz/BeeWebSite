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
import ScrollableSection, {ScrollableLink} from 'react-update-url-on-scroll';
import Team from "./components/team/team";
import Contact from './components/contact/Contact';
import Achievement from './components/Achievement/Achievement';


function App() {

    return (
        <div className="App">
            <Header/>
            {/*<ScrollableSection name={'Digital'} affectHistory={true}>*/}
                <section id="digital" className="digitalSection">
                    <Digital/>
                </section>
            {/*</ScrollableSection>*/}
            {/*<ScrollableSection name={'About'} affectHistory={true}>*/}
                <section id="about" className="aboutSection">
                    <About/>
                </section>
            {/*</ScrollableSection>*/}
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
            {/*<ScrollableSection name={'Services'} affectHistory={true}>*/}
                <section id="services" className="servicesSection">
                    <Services/>
                </section>
            {/*</ScrollableSection>*/}
            {/*<ScrollableSection name={'Achivement'} affectHistory={true}>*/}
            <section id={"achivement"}>
                <Achievement/>
            </section>
            {/*</ScrollableSection>*/}
            {/*<ScrollableSection name={'Portfolio'} affectHistory={true}>*/}
                <section id="portfolio" className="portfolioSection">
                    <Portfolio/>
                </section>
            {/*</ScrollableSection>*/}
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
            {/*<ScrollableSection name={'Tecnologies'} affectHistory={true}>*/}
            {/*    <section id="tecnologies" className="tecnologiesSection">*/}
            {/*        <Tecnologies/>*/}
            {/*    </section>*/}
            {/*</ScrollableSection>*/}
            {/*<ScrollableSection name={'Team'} affectHistory={true}>*/}
                <section id="team" className="teamSection">
                    <Team/>
                </section>
            {/*</ScrollableSection>*/}
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
            {/*<ScrollableSection name={'Contact'} affectHistory={true}>*/}
                <section id="contact">
                    <Contact/>
                </section>
            {/*</ScrollableSection>*/}
            <Footer/>
            <section className="toTop">
                <ScrollToTopBtn/>
            </section>
        </div>

    );
}

export default App;
