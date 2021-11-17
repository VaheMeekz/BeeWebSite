import React from 'react';
import {useTranslation} from "react-i18next";
import call from '../../assets/images/footerIcon1.svg'
import mail from '../../assets/images/footerIcon2.svg'
import location from '../../assets/images/footerIcon3.svg'
import Iframe from "react-iframe";

const Footer = () => {
    const {t} = useTranslation()
    const date = new Date().getFullYear()
    return (
        // <div classNameName='footer'>
        //     <div classNameName="footerUp">
        //         <div>
        //             {/*<h2>{t('footerHelp')}</h2>*/}
        //         </div>
        //         <div classNameName="footerInfoBox">
        //             <div classNameName="footerInfoBody">
        //                 <div classNameName="footerInfo">
        //                     <img src={call} alt="img"/>
        //                     <p>{t('call')}</p>
        //                     <p>+374 (00) 00 00 00</p>
        //                 </div>
        //                 <div classNameName="footerInfo">
        //                     <img src={mail} alt="img"/>
        //                     <p>{t('mail')}</p>
        //                     <p>BeeOnCode@gmail.com</p>
        //                 </div>
        //                 <div classNameName="footerInfo">
        //                     <img src={location} alt="img"/>
        //                     <p>{t('location')}</p>
        //                     <p>{t('hakoob')}</p>
        //                 </div>
        //                 <div classNameName="footerInfo map">
        //                     <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.405406946073!2d44.488959315644045!3d40.20004407671282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd6bc6cf96ef%3A0x6932662afc4c86ff!2sBeeOnCode!5e0!3m2!1sen!2s!4v1636632487448!5m2!1sen!2s"
        //                             width="300"
        //                             height="250"
        //                             id="myId"
        //                             classNameName="myclassNamename"
        //                             display="initial"
        //                             position="relative"/>
        //                 </div>
        //             </div>
        //             <div classNameName="footerSearch">
        //                 <p classNameName="footerZrtPrt">{t('subscribe')}</p>
        //                 <div>
        //                     <input type={'text'} classNameName="sendInp" placeholder={t('mail')}/>
        //                     <button classNameName="sendBtn">{t('send')}</button>
        //                 </div>
        //                 <p classNameName="footerZrt">{t('subscri')}</p>
        //             </div>
        //         </div>
        //     </div>
        // <div classNameName="footerDwn">
        //     <div classNameName="footerIcons">
        //         <div classNameName="footerIcon">
        //             <i classNameName="fab fa-facebook-f fb"></i>
        //         </div>
        //         <div classNameName="footerIcon">
        //             <i classNameName="fab fa-instagram inst"></i>
        //        </div>
        //         <div classNameName="footerIcon">
        //             <i classNameName="fab fa-linkedin-in linke"></i>
        //       </div>
        //     </div>
        //     <div classNameName="footerText">
        //         <div classNameName="footerTextItem locat"><i classNameName="fas fa-map-marker-alt location"></i></div>
        //         <div classNameName="footerTextItem hasce">{t('hakobErkar')}</div>
        //     </div>
        //     <div>© 2015 - {date} BeeOnCode</div>
        // </div>
        // </div>

        // new footer

        <footer class="footer">
            <div class="container">
                <div class="row">
                    {/*<div class="footer-item footer-about">*/}
                    {/*    <h2>about us</h2>*/}
                    {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio omnis, iste nam error cum totam voluptates.*/}
                    {/*        Libero ipsa suscipit amet?</p>*/}
                    {/*    <div class="social-links">*/}
                    {/*        <a href="#"><i className="fab fa-facebook-f fa"></i></a>*/}
                    {/*        <a href="#"><i className="fab fa-instagram inst"></i></a>*/}
                    {/*        <a href="#"><i className="fab fa-linkedin-in linked"></i></a>*/}
                    {/*        <a href="#"><i className="fab fa-youtube you"></i></a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/* <div class="footer-item footer-quick-links">
              <h2>quick links</h2>
              <ul>
                <li><a href="#">courses</a></li>
                <li><a href="#">stories</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">log in</a></li>
                <li><a href="#">sign up</a></li>
              </ul>
            </div> */}

                    {/*<div classNameName="footerInfo map">*/}
                    {/*    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.405406946073!2d44.488959315644045!3d40.20004407671282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd6bc6cf96ef%3A0x6932662afc4c86ff!2sBeeOnCode!5e0!3m2!1sen!2s!4v1636632487448!5m2!1sen!2s"*/}
                    {/*            width="250"*/}
                    {/*            height="250"*/}
                    {/*            id="myId"*/}
                    {/*            classNameName="myclassNamename"*/}
                    {/*            display="initial"*/}
                    {/*            position="relative"/>*/}
                    {/*</div>*/}
                    <div class="footer-item footer-contact footerInfoBox ">
                        <h2>contact us</h2>
                        <div>
                            <p><i className="fas fa-map-marker-alt"></i>{t('hakobErkar')}</p>
                        </div>
                        <div>
                            <p><i className="fas fa-phone"></i> +374 00000000</p>
                        </div>
                        <div>
                            <p><i className="fas fa-envelope"></i>BeeOnCode@gmail.com</p>
                        </div>



                    </div>
                    {/*<div class="footer-item footer-newsletter">*/}
                    {/*    <h2>newsletter</h2>*/}
                    {/*    <form>*/}
                    {/*        <div class="input-group">*/}
                    {/*            <input type="text" placeholder="Your Email" class="form-control" />*/}
                    {/*        </div>*/}
                    {/*        <button type="button" class="btn btn-1">subscribe</button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="footerDwn">
                <div>© 2015 - {date} BeeOnCode</div>
            </div>
        </footer>

    )
};

export default Footer;