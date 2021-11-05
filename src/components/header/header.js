import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import i18next from "i18next";
import cookies from "js-cookie"
import {Link} from 'react-scroll'
import OrderModal from "./orderModal/OrderModal";
import css from "./header.module.css"
import Toggle from "../Toggle/Toggle";
import useDarkMode from "../Mode/useDarkMode";
<<<<<<< HEAD
import {useSelector} from "react-redux";
=======
import Example from "./carusel/springCarusel";
import uk from "../../assets/images/ukukpng.png"
import ru from "../../assets/images/ru.png"
import arm from "../../assets/images/arm.png"
>>>>>>> f7a4e23b76af9d10e30749ba1dcc424e21d1ec5b


const Header = () => {

    //mode
    const [darkMode, setDarkMode] = useDarkMode();
    const mode = useSelector(state => state.modeReducer.mode)
    console.log(mode)


    // modal
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    //languages
    const languages = [
        {id: 1, lang: 'en',img:<img src={uk} alt={"flag"} width={'50px'} height={'20px'}/>},
        {id: 2, lang: 'am',img:<img src={arm} alt={"flag"} width={'50px'} height={'20px'}  />},
        {id: 3, lang: 'ru',img:<img src={ru} alt={"flag"} width={'50px'} height={'20px'} /> }
    ]

    const currentLang = cookies.get('i18next')
    const [activeLang, setActiveLang] = useState(currentLang)

    const selectlanguages = (lang) => {
        i18next.changeLanguage(lang)
        setActiveLang(lang)
    }

    useEffect(() => {
        console.log(activeLang)
    }, [])


    return (
        <div className="header">
            <div className="nav">
                <div className="logo"><NavLink to={'/'}><img src={logo}/></NavLink></div>
                <ul>
                    <Link to="#" className={css.links}>Contact</Link>
                    <Link to="about" smooth={true} duration={1000} className={css.links}>About</Link>
                    <Link to="services" smooth={true} duration={1000} className={css.links}>Services</Link>
                    <Link to="portfolio" smooth={true} duration={1000} className={css.links}>Portfolio</Link>
                    <Link to="tecnologies" smooth={true} duration={1000} className={css.links}>Tecnologise</Link>
                    <Link to="team" smooth={true} duration={1000} className={css.links}>team</Link>
                </ul>
                <button className="contactButton"><a href='https://trainings.beeoncode.com/course/list'
                                                     className={css.aaa}>Trainigs</a></button>
                <div className="socLinks">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin-in"></i>
                </div>
                <ul className="languages">
                    {
<<<<<<< HEAD
                        languages.map(({id, lang}) => {
                            return <li
                                key={id}
                                onClick={() => selectlanguages(lang, id)}
                            >
                                {lang}
                            </li>
=======
                        languages.map(({id, lang,img}) => {
                            return <Button
                                key={id}
                                onClick={() => selectlanguages(lang, id)}
                            >
                                {img}
                            </Button>
>>>>>>> f7a4e23b76af9d10e30749ba1dcc424e21d1ec5b
                        })
                    }
                </ul>
                <div>
                    <Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
                </div>
            </div>

            <div className="headerContent">
                <div className="order">
                    <span>order your website </span>
                    <span>from us</span>
                    <p>Lorem ipsum dolor sit amet, </p>
                    <p>consectetur adipiscing elit. Id urna proin</p>
                    <p> tortor eu ut tortor turpis accumsan.</p>
                    <br/>
                </div>

                <div className="parallaxEffects">
                    <Example/>
                    {/*<div><img src={parallax1}/></div>*/}
                    {/*<div><img src={parallax2}/></div>*/}
                    {/*<motion.div*/}
                    {/*    initial={{*/}
                    {/*        x: -300,*/}
                    {/*        y: -300*/}
                    {/*    }}*/}
                    {/*    animate={{*/}
                    {/*        x: 0,*/}
                    {/*        y: 0*/}
                    {/*    }}*/}
                    {/*    transition={{ duration: 0.5 }}*/}
                    {/*>*/}
                    {/*    <img src={parallax1}/>*/}
                    {/*</motion.div>*/}
                    {/*<motion.div*/}
                    {/*    initial={{*/}
                    {/*        x: -300,*/}
                    {/*        y: -300*/}
                    {/*    }}*/}
                    {/*    animate={{*/}
                    {/*        x: 0,*/}
                    {/*        y: 0*/}
                    {/*    }}*/}
                    {/*    transition={{ duration: 0.5 }}*/}
                    {/*>*/}
                    {/*    <img src={parallax2}/>*/}
                    {/*</motion.div>*/}
                </div>

            </div>
            <div className="getStartBox">
                <button onClick={openModal} className="getStartBtn">get started</button>
                <OrderModal showModal={showModal} setShowModal={setShowModal}/>
            </div>

        </div>
    );
};

export default Header;