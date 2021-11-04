import React from "react";
import teamImg from "../../assets/images/teamImg2.jpg";
import identify from "../../assets/images/identify.png"
import manage from "../../assets/images/manage.png"
import Implement  from "../../assets/images/implement.png"
import {useTranslation} from "react-i18next";

const Team = () => {
    const {t} = useTranslation()
  return (
    <div className="team">
      <h2>{t('team')}</h2>
      <div className="outTeamImg">
        <img src={teamImg} />
      </div>
      <h3>{t("help")}</h3>
      <p>
          {t('let')}
      </p>
      <p> {t('network')}</p>
      <div className="teamLogos">
      <div className="teamLogo">
      <img src={identify} />
      <span>{t('identify')}</span>
      </div>

      <div className="teamLogo">
      <img src={manage} />
      <span>{t('Implement')}</span>
      </div>

      <div className="teamLogo">
      <img src={Implement} />
      <span>{t('MANAGE')}</span>
      </div>
      </div>
    </div>
  );
};

export default Team;
