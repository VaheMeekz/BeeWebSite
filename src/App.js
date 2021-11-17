import './App.css';
import Header from "./components/header/header";
import About from "./components/about/about";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";
import Digital from './components/digital/Digital';
import React, {useEffect, useState} from "react";
import ScrollToTopBtn from "./components/scrollToTop/ScrollToTop";
import Portfolio from './components/portfolio/portfolio';
import ScrollableSection from 'react-update-url-on-scroll';
import Team from "./components/team/team";
import Contact from './components/contact/Contact';
import Loading from "./components/Loading/loading";

function App() {

    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>setLoading(false),1000)
    },[])

    return (
        <div className="App">
            {loading ? <Loading/> : (
                <>
                    <ScrollableSection name={'/'} affectHistory={true}>
                        <section>
                            <Header/>
                        </section>
                    </ScrollableSection>

                    <section id="digital" className="digitalSection">
                        <Digital/>
                    </section>

                    <ScrollableSection name={'About'} affectHistory={true}>
                        <section id="about" className="aboutSection">
                            <About/>
                        </section>
                    </ScrollableSection>
                    <ScrollableSection name={'Services'} affectHistory={true}>
                        <section id="services" className="servicesSection">
                            <Services/>
                        </section>
                    </ScrollableSection>

                    {/*<ScrollableSection name={'Achivement'} affectHistory={true}>*/}
                    {/*<section id={"achivement"}>*/}
                    {/*    <Achievement/>*/}
                    {/*</section>*/}
                    {/*</ScrollableSection>*/}

                    <ScrollableSection name={'Portfolio'} affectHistory={true}>
                        <section id="portfolio" className="portfolioSection">
                            <Portfolio/>
                        </section>
                    </ScrollableSection>

                    {/*<ScrollableSection name={'Tecnologies'} affectHistory={true}>*/}
                    {/*    <section id="tecnologies" className="tecnologiesSection">*/}
                    {/*        <Tecnologies/>*/}
                    {/*    </section>*/}
                    {/*</ScrollableSection>*/}

                    <ScrollableSection name={'Team'} affectHistory={true}>
                        <section id="team" className="teamSection">
                            <Team/>
                        </section>
                    </ScrollableSection>
                    <ScrollableSection name={'Contact'} affectHistory={true}>
                        <section id="contact">
                            <Contact/>
                        </section>
                    </ScrollableSection>
                    <Footer/>
                    <section className="toTop">
                        <ScrollToTopBtn/>
                    </section>
                </>)
            }
            {/*<ScrollableSection name={'/'} affectHistory={true}>*/}
            {/*<section>*/}
            {/*    <Header/>*/}
            {/*</section>*/}
            {/*</ScrollableSection>*/}

            {/*<section id="digital" className="digitalSection">*/}
            {/*    <Digital/>*/}
            {/*</section>*/}

            {/*<ScrollableSection name={'About'} affectHistory={true}>*/}
            {/*    <section id="about" className="aboutSection">*/}
            {/*        <About/>*/}
            {/*    </section>*/}
            {/*</ScrollableSection>*/}
            {/*<ScrollableSection name={'Services'} affectHistory={true}>*/}
            {/*    <section id="services" className="servicesSection">*/}
            {/*        <Services/>*/}
            {/*    </section>*/}
            {/*</ScrollableSection>*/}

            {/*/!*<ScrollableSection name={'Achivement'} affectHistory={true}>*!/*/}
            {/*/!*<section id={"achivement"}>*!/*/}
            {/*/!*    <Achievement/>*!/*/}
            {/*/!*</section>*!/*/}
            {/*/!*</ScrollableSection>*!/*/}

            {/*<ScrollableSection name={'Portfolio'} affectHistory={true}>*/}
            {/*    <section id="portfolio" className="portfolioSection">*/}
            {/*        <Portfolio/>*/}
            {/*    </section>*/}
            {/*</ScrollableSection>*/}

            {/*/!*<ScrollableSection name={'Tecnologies'} affectHistory={true}>*!/*/}
            {/*/!*    <section id="tecnologies" className="tecnologiesSection">*!/*/}
            {/*/!*        <Tecnologies/>*!/*/}
            {/*/!*    </section>*!/*/}
            {/*/!*</ScrollableSection>*!/*/}

            {/*<ScrollableSection name={'Team'} affectHistory={true}>*/}
            {/*    <section id="team" className="teamSection">*/}
            {/*        <Team/>*/}
            {/*    </section>*/}
            {/*</ScrollableSection>*/}
            {/*<ScrollableSection name={'Contact'} affectHistory={true}>*/}
            {/*    <section id="contact">*/}
            {/*        <Contact/>*/}
            {/*    </section>*/}
            {/*</ScrollableSection>*/}
            {/*<Footer/>*/}
            {/*<section className="toTop">*/}
            {/*    <ScrollToTopBtn/>*/}
            {/*</section>*/}
        </div>

    );
}

export default App;
