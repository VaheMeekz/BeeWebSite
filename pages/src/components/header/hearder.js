import React from 'react';
import {Link, useHistory} from "react-router-dom";
import useQuery from "../../utils/hooks/useQuery";

const Hearder = () => {

    // let query = useQuery();
    const history = useHistory()

    // const sectionQuery = query.get('section')
    // const languageQuery = query.get('language')

    const links = [
        {id: 1, to: "about", name: "About", icon: "icon"},
        {id: 2, to: "services", name: "Services", icon: "icon"},
        {id: 3, to: "portfolio", name: "Portfolio", icon: "icon"},
        {id: 4, to: "tecnologies", name: "Tecnologise", icon: "icon"},
        {id: 5, to: "team", name: "Team", icon: "icon"},
        {id: 6, to: "contact", name: "Contact", icon: "icon"}
    ];

    return (

        <div className="header">
            <div className="nav">

                <button className="contactButton"><a href='https://trainings.beeoncode.com/course/list'>Trainigs</a>
                </button>
                <div className="socLinks">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin-in"></i>
                </div>
                <ul>
                    {
                        links.map(l => {
                            return <Link smooth={true} duration={1000} className="links" to={l.to}
                            //  onClick={() => {
                                             // history.push(`/${l.name}/${activeLang}`)
                                             //  history.push(`/?section=${l.name}&language=${languageQuery}`)
                                //   }}
                                         // className={sectionQuery === l.name ? "activeLink" : "links"}
                                         key={l.id}>{l.name}</Link>
                        })}
                </ul>
                <div>
                    {/*<Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>*/}
                    {/*<ButtonGroup variant="outlined" aria-label="outlined button group">*/}
                    {/*    <Button>Dark</Button>*/}
                    {/*    <Button>Light</Button>*/}
                    {/*</ButtonGroup>*/}
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

                </div>

            </div>
            {/*<div className="getStartBox">*/}
            {/*    <button onClick={openModal} className="getStartBtn">get started</button>*/}
            {/*    <OrderModal showModal={showModal} setShowModal={setShowModal}/>*/}
            {/*</div>*/}

        </div>
    );
};

export default Hearder;