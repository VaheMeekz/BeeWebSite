import React from 'react'
import call from '../../assets/images/footerIcon1.svg'
import mail from '../../assets/images/footerIcon2.svg'
import location from '../../assets/images/footerIcon3.svg'
import Iframe from "react-iframe";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerUp">
                <div>
                    {/*<h2>{t('footerHelp')}</h2>*/}
                </div>
                <div className="footerInfoBox">
                    <div className="footerInfoBody">
                        <div className="footerInfo">
                            <img src={call} alt="img"/>
                            {/*<p>{t('call')}</p>*/}
                            <p>+374 (00) 00 00 00</p>
                        </div>
                        <div className="footerInfo">
                            <img src={mail} alt="img"/>
                            {/*<p>{t('mail')}</p>*/}
                            <p>BeeOnCode@gmail.com</p>
                        </div>
                        <div className="footerInfo">
                            <img src={location} alt="img"/>
                            {/*<p>{t('location')}</p>*/}
                            {/*<p>{t('hakoob')}</p>*/}
                        </div>
                        <div className="footerInfo map">
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.405406946073!2d44.488959315644045!3d40.20004407671282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd6bc6cf96ef%3A0x6932662afc4c86ff!2sBeeOnCode!5e0!3m2!1sen!2s!4v1636632487448!5m2!1sen!2s"
                                    width="300"
                                    height="250"
                                    id="myId"
                                    className="myClassname"
                                    display="initial"
                                    position="relative"/>
                        </div>
                    </div>
                    <div className="footerSearch">
                        {/*<p className="footerZrtPrt">{t('subscribe')}</p>*/}
                        <div>
                            {/*<input type={'text'} className="sendInp" placeholder={t('mail')}/>*/}
                            {/*<button className="sendBtn">{t('send')}</button>*/}
                        </div>
                        {/*<p className="footerZrt">{t('subscri')}</p>*/}
                    </div>
                </div>
            </div>
            <div className="footerDwn">
                <div className="footerIcons">
                    <div className="footerIcon">
                        <i className="fab fa-facebook-f fb"></i>
                    </div>
                    <div className="footerIcon">
                        <i className="fab fa-instagram inst"></i>
                    </div>
                    <div className="footerIcon">
                        <i className="fab fa-linkedin-in linke"></i>
                    </div>
                </div>
                <div className="footerText">
                    <div className="footerTextItem locat"><i className="fas fa-map-marker-alt location"></i></div>
                {/*    <div className="footerTextItem hasce">{t('hakobErkar')}</div>*/}
                </div>
                <div>© 2015-2021 BeeOnCode</div>
            </div>
        </div>
    );
};

export default Footer;