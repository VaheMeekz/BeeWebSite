import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/logo.png'
import {NavLink, useLocation} from "react-router-dom";
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
import OrderModal from "./orderModal/OrderModal";
import css from '../../styles/header.module.css'




const Header = () => {

    //constants
    let query = useQuery();
    const history = useHistory()
    const {pathname} = useLocation()
    console.log(pathname, 'lklkl')

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
        {id: 1, to: "about", name: "About", icon: "icon"},
        {id: 2, to: "services", name: "Services", icon: "icon"},
        {id: 3, to: "portfolio", name: "Portfolio", icon: "icon"},
        {id: 4, to: "tecnologies", name: "Tecnologise", icon: "icon"},
        {id: 5, to: "team", name: "Team", icon: "icon"},
        {id: 6, to: "contact", name: "Contact", icon: "icon"}
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



    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        history.push('/')
    };


    const [avt, setAvt] = useState('')
    useEffect(() => {
        if(pathname){
            setAvt('avt')
        }
    }, [pathname])


    return (
        <div className="header">

            <div className={navbar ? "nav active" : "nav"}>
                <div className="logo" onClick={scrollToTop}><NavLink to={'/'}><img src={logo} alt={"img"}/></NavLink></div>
                <ul>
                    {
                        links.map(l => {
                            console.log(pathname, l.name, ">>>>>>>>>>>>>>>>>>>>")
                            return <Link smooth={true} duration={1000} to={l.to}
                             onClick={() => {history.push(`/${l.name}`)}}
                                         className={pathname === `/${l.name}` ? css[avt] : "links"}
                                         key={l.id}>{l.name}</Link>
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
                                history.push(`/${sectionQuery}`)
                            }}
                            data-tip data-for={lang}
                            style={{border: lang === currentLang ? "1px solid white" : null }}
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
                <OrderModal showModal={showModal} setShowModal={setShowModal}/>
            </div>
        </div>
    );
};

export default Header;