import React from 'react';
import {useTranslation} from "react-i18next";
import {Carusel, Example} from "./carusel/carusel";

const Portfolio = () => {
    const {t} = useTranslation()
    return (
        <div className="portfolio">
            <div className="port">
                <h1>Portfolio</h1>
            </div>
            <div className="caruselBox">
              <Carusel/>
            </div>
            <div className="portText">
                <p>
                    {t('portfolio')}
                </p>
            </div>

        </div>
    );
};

export default Portfolio;