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
        {id: 1, to: "contact", name: "Contact", icon: "icon"},
        {id: 2, to: "about", name: "About", icon: "icon"},
        {id: 3, to: "services", name: "Services", icon: "icon"},
        {id: 4, to: "portfolio", name: "Portfolio", icon: "icon"},
        {id: 5, to: "tecnologies", name: "Tecnologise", icon: "icon"},
        {id: 6, to: "team", name: "Team", icon: "icon"},
    ];

    //languages
    const languages = [
        {id: 1, lang: 'en', img: <img src={uk} alt={"flag"} width={'25px'} height={'10px'}/>},
        {id: 2, lang: 'am', img: <img src={arm} alt={"flag"} width={'25px'} height={'10px'}/>},
        {id: 3, lang: 'ru', img: <img src={ru} alt={"flag"} width={'25px'} height={'10px'}/>}
    ]

    const currentLang = cookies.get('i18next')
    const [activeLang, setActiveLang] = useState(currentLang)

    const selectlanguages = (lang) => {
        i18next.changeLanguage(lang)
        setActiveLang(lang)
    }

    const query = useQuery();
    const history = useHistory()

    const postQuery = query.get('language')

    return (
        <div className="header">
            <div className={navbar ? "nav active" : "nav"}>
                <div className="logo"><NavLink to={'/'}><img src={logo} alt={"img"}/></NavLink></div>
                <ul>
                    {
                        links.map(l => {
                            return <Link smooth={true} duration={1000} className="links" to={l.to}
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
                        return <Button
                            key={id}
                            onClick={() => {
                                selectlanguages(lang, id);
                                history.push(`${'/'}?language=${lang}`)
                            }}
                            className={postQuery === lang ? 'activeLang' : undefined}
                                >
                            {img}
                        </Button>
                    })}
                </ul>
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
                    onClick={openModal} className="getStartBtn">get started</button>
                {/*<OrderModal showModal={showModal} setShowModal={setShowModal}/>*/}
            </div>
        </div>
    );
};

export default Header;