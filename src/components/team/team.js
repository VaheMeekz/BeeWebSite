import React from "react";
import teamImg from "../../assets/images/teamImg2.jpg";
import identify from "../../assets/images/identify.svg"
import manage from "../../assets/images/manage.svg"
import Implement from "../../assets/images/implement.svg"
import {useTranslation} from "react-i18next";
import Tilt from "react-parallax-tilt";

const Team = () => {
    const {t} = useTranslation()

    return (
        <div className="team">
            <h2>{t('team')}</h2>
            <div className="outTeamImg">
                <img src={teamImg} alt="img"/>
            </div>
            <h3>{t("help")}</h3>
            <p>
                {t('let')}
            </p>
            <p> {t('network')}</p>
            <div className="teamLogos">
                <Tilt
                    className="parallax"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                >
                    <div className="inner-element">
                        <div className="teamLogo">
                            <img src={identify} alt="img"/>
                            <span>{t('identify')}</span>
                        </div>
                    </div>
                </Tilt>

                <Tilt
                    className="parallax"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                >
                    <div className="inner-element">
                        <div className="teamLogo">
                            <img src={manage} alt="img"/>
                            <span>{t('Implement')}</span>
                        </div>
                    </div>
                </Tilt>
                <Tilt
                    className="parallax"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                >
                    <div className="inner-element">
                        <div className="teamLogo">
                            <img src={Implement} alt="img"/>
                            <span>{t('MANAGE')}</span>
                        </div>
                    </div>
                </Tilt>

            </div>
        </div>
    );
};

export default Team;
