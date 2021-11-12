import React from 'react';
import servicesIcon1 from '../../assets/images/servicesIcon1.png'
import servicesIcon2 from '../../assets/images/servicesIcon2.png'
import servicesIcon3 from '../../assets/images/servicesIcon3.png'
import servicesIcon4 from '../../assets/images/servicesIcon4.png'
import servicesIcon5 from '../../assets/images/servicesIcon5.png'
import servicesIcon6 from '../../assets/images/servicesIcon6.png'
import servicesIcon7 from '../../assets/images/servicesIcon7.png'
import servicesIcon8 from '../../assets/images/servicesIcon8.png'

const Softwear = () => {
    return (
        <div>
            <h3>Software Development Services</h3>

            <div className="servicesAll">
                <div className="servicesBox">
                    <img src={servicesIcon1}  alt="img"/>
                    <p>WEB APPLICATION</p>
                    <p>DEVELOPMENT</p>
                </div>
                <div className="servicesBox">
                    <img src={servicesIcon2}  alt="img"/>
                    <p>MOBILE APPLICATION</p>
                    <p>DEVELOPMENT</p>
                </div>
                <div className="servicesBox">
                    <img src={servicesIcon3} alt="img" />
                    <p>CUSTOM SOFTWARE</p>
                    <p>DEVELOPMENT</p>
                </div>
                <div className="servicesBox">
                    <img src={servicesIcon4}  alt="img"/>
                    <p>AI & ML</p>
                </div>
            </div>



            <div className="servicesAll">
                <div className="servicesBox">
                    <img src={servicesIcon5} alt="img" />
                    <p>SAAS</p>
                    <p>PLATFORMS</p>
                </div>
                <div className="servicesBox">
                    <img src={servicesIcon6} alt="img" />
                    <p>IT</p>
                    <p>CONSULTING</p>
                </div>
                <div className="servicesBox">
                    <img src={servicesIcon7} alt="img" />
                    <p>BIG DATA</p>
                    <p>MANAGEMENT</p>
                </div>
                <div className="servicesBox">
                    <img src={servicesIcon8} alt="img" />
                    <p>DEDICATED TEAM &</p>
                    <p>OUT-STAFFING</p>
                </div>
            </div>
        </div>
    );
};

export default Softwear;