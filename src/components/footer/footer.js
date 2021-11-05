import React from 'react';
import {useTranslation} from "react-i18next";
import call from '../../assets/images/footerIcon1.svg'
import mail from '../../assets/images/footerIcon2.svg'
import location from '../../assets/images/footerIcon3.svg'
import fb from "../../assets/images/fb.png"
import insta from "../../assets/images/insta.png"
import linkedin from "../../assets/images/linkedin.png"
import local from "../../assets/images/local.png"

const Footer = ({darkMode, setDarkMode}) => {
    const {t} = useTranslation()
    return (
        <div className='footer'>
            <div className="footerUp">
                <div>
                    <h2>{t('footerHelp')}</h2>
                </div>
                <div className="footerInfoBox">
                    <div className="footerInfoBody">
                        <div className="footerInfo">
                            <img src={call} alt="img"/>
                            <p>{t('call')}</p>
                            <p>+374 (00) 00 00 00</p>
                        </div>
                        <div className="footerInfo">
                            <img src={mail} alt="img"/>
                            <p>{t('mail')}</p>
                            <p>BeeOnCode@gmail.com</p>
                        </div>
                        <div className="footerInfo">
                            <img src={location} alt="img"/>
                            <p>{t('location')}</p>
                            <p>{t('hakoob')}</p>
                        </div>
                    </div>
                    <div className="footerSearch">
                        <p className="footerZrtPrt">{t('subscribe')}</p>
                        <div>
                            <input type={'text'} className="sendInp"  placeholder={t('mail')}/>
                            <button className="sendBtn">{t('send')}</button>
                        </div>
                        <p className="footerZrt">{t('subscri')}</p>
                    </div>
                </div>
            </div>
            <div className="footerDwn">
                <div className="footerIcons">
                   <div className="footerIcon"><a href="https://www.facebook.com/beeoncode"><img src={fb} alt={'socialIcons'}/></a></div>
                    <div className="footerIcon"><a href="https://www.instagram.com/_beeoncode_/"><img src={insta} alt={'socialIcons'}/></a></div>
                    <div className="footerIcon"><a href="https://am.linkedin.com/company/beeoncode-llc"><img src={linkedin} alt={'socialIcons'}/></a></div>
                </div>
                <div className="footerText">
                    <div className="footerTextItem"><img src={local} alt={'img'}/></div>
                    <div className="footerTextItem">{t('hakobErkar')}</div>
                </div>
                <div>© 2015-2021 BeeOnCode</div>
            </div>
        </div>
    )
};

export default Footer;