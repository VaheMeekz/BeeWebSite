import React, {useState} from 'react';
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import i18next from "i18next";
import cookies from "js-cookie"
import {Link} from 'react-scroll'
import {useHistory} from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import useDarkMode from "../Mode/useDarkMode";
import {useSelector} from "react-redux";
import uk from "../../assets/images/ukukpng.png"
import ru from "../../assets/images/ru.png"
import arm from "../../assets/images/arm.png"
import {Button} from "@material-ui/core";
import useQuery from "../../assets/hooks/useQuery";
import MotionSlider from "../motionCarousel/motionCarousel";
import ReactTooltip from "react-tooltip";


const Header = () => {

    // respones nav state
    const [isMobile,setIsMobile] = useState(false)

    //constants
    let query = useQuery();
    const history = useHistory()

    const sectionQuery = query.get('section')
    const languageQuery = query.get('language')


    //mode
    const [darkMode, setDarkMode] = useDarkMode();
    const mode = useSelector(state => state.modeReducer.mode)
    console.log(mode)

    // modal
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    //navbar

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changeBackground)

    // Links

    const links = [
        {id: 1, to: "about", name: "About", icon: "icon",cn:"About"},
        {id: 2, to: "services", name: "Services", icon: "icon",cn:"Services"},
        {id: 3, to: "portfolio", name: "Portfolio", icon: "icon",cn:"Portfolio"},
        {id: 4, to: "tecnologies", name: "Tecnologise", icon: "icon",cn:"Tecnologies"},
        {id: 5, to: "team", name: "Team", icon: "icon",cn:"Team"},
        {id: 6, to: "contact", name: "Contact", icon: "icon",cn:"Contact"}
    ];

    //languages
    const languages = [
        {
            id: 1,
            lang: 'en',
            img: uk
        },
        {
            id: 2,
            lang: 'am',
            img: arm
        },
        {
            id: 3,
            lang: 'ru',
            img: ru
        }
    ]

    const currentLang = cookies.get('i18next')
    const [activeLang, setActiveLang] = useState(currentLang)

    const selectlanguages = (lang) => {
        i18next.changeLanguage(lang)
        setActiveLang(lang)
    }

    //hover
    const mappleConfig = {
        direction: 'bottom',
        shadow: true,
        float: true,
        borderRadius: 5
    }


    return (
        <div className="header">

            <div className={navbar ? "nav active" : "nav"}>
                <div className="logo"><NavLink to={'/'}><img src={logo} alt={"img"}/></NavLink></div>
                <ul onClick={() => setIsMobile(false)} className={isMobile ? "nav-links-mobile" : "nav-links"}>
                    {
                        links.map(l => {
                            return <li><Link smooth={true} duration={1000}
                                            to={l.to}
                                         onClick={() => {
                                              history.push(`/${l.name}/${activeLang}`)
                                              history.push(`/?section=${l.name}&language=${languageQuery}`)
                                         }}
                                        className={sectionQuery === l.name ? `links activeLink ${l.name}` : `links ${l.name}` }
                                         key={l.id}>{l.name}</Link></li>
                        })}
                </ul>
                <div className={""}>
                </div>
                <button className="contactButton"><a href='https://trainings.beeoncode.com/course/list'
                                                     className="aaa">Trainigs</a></button>
                <div className="socLinks">
                    <i class="fab fa-facebook-f fb"></i>
                    <i class="fab fa-instagram inst"></i>
                    <i class="fab fa-linkedin-in linke"></i>
                </div>
                <ul className="languages">
                    {languages.map(({id, lang, img}) => {
                        return <>
                        <Button
                            key={id}
                            onClick={() => {
                                selectlanguages(lang, id);
                                // history.push(`/${sectionQuery}${activeLang}`)
                            }}
                            data-tip data-for={lang}
                        >
                                    <img src={img} alt={lang} className={languageQuery === lang ? "activeLang lang" : "lang"}/>
                        </Button>
                        </>
                    })}
                </ul>
                <ReactTooltip id={"en"} place="top" effect="solid">
                    {activeLang === "en" ? "English" : null}
                    {activeLang === "ru" ? "Английский" : null}
                    {activeLang === "am" ? "Անգլերեն" : null}
                </ReactTooltip>
                <ReactTooltip id={"am"} place="top" effect="solid">
                    {activeLang === "en" ? "Armenian" : null}
                    {activeLang === "ru" ? "Армянский" : null}
                    {activeLang === "am" ? "Հայերեն" : null}
                </ReactTooltip>
                <ReactTooltip id={"ru"} place="top" effect="solid">
                    {activeLang === "en" ? "Russian" : null}
                    {activeLang === "ru" ? "Русский" : null}
                    {activeLang === "am" ? "Ռուսերեն" : null}
                </ReactTooltip>
                <div>
                    <Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
                </div>
                <button
            onClick={() => setIsMobile(!isMobile)} className="mobile-menu-icon">
                    {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
            </div>
            <div className="headerContent">
                <div className="order">
                    <span>order your website </span><br/>
                    <span>from us</span>
                    <p>Lorem ipsum dolor sit amet, </p>
                    <p>consectetur adipiscing elit. Id urna proin</p>
                    <p> tortor eu ut tortor turpis accumsan.</p>
                    <br/>
                </div>
                <div className="parallaxEffects">
                    <MotionSlider/>
                </div>
            </div>
            <div className="getStartBox">
                <button
                    onClick={openModal} className="getStartBtn">get started
                </button>
                {/*<OrderModal showModal={showModal} setShowModal={setShowModal}/>*/}
            </div>
        </div>
    );
};

export default Header;