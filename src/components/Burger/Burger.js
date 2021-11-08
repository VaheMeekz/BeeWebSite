import React from 'react';
import {Link} from "react-scroll";


const Burger = ({links}) => {
    return (
        <div>
            <ul>
                {
                    links.map(l => {
                        // return <div><Link smooth={true} duration={1000} to={l.to}
                        //                  key={l.id}>{l.name}</Link></div>
                    })
                }
            </ul>
        </div>
    );
};

export default Burger;