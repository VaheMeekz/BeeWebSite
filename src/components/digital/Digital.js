import React from 'react'
import digitalIcon1 from '../../assets/images/digitalIcon1.svg'
import digitalIcon2 from '../../assets/images/digitalIcon2.svg'
import digitalIcon3 from '../../assets/images/digitalIcon3.svg'
import digitalIcon4 from '../../assets/images/digitalIcon4.svg'
import digitalIcon5 from '../../assets/images/digitalIcon5.svg'
import digitalIcon6 from '../../assets/images/digitalIcon6.svg'
import digitalIcon7 from '../../assets/images/digitalIcon7.svg'
import arrowDigital from '../../assets/images/arrowDigital.svg'



function digital() {
    return (
        <div className="digital">

            <h3>digital inovation</h3>

            <div className="digitalContentsMain">
                <div className="digitalContent">
                    <img src={digitalIcon1} />
                    <p>Strategy</p>
                    <br />
                </div>
                <div className="arrow"><img src={arrowDigital} /></div>
                <div className="digitalContent">
                <img src={digitalIcon2} />
                    <p>requirements</p>
                    <p>gathering</p>
                </div>
                <div className="arrow"><img src={arrowDigital} /></div>
                <div className="digitalContent">
                <img src={digitalIcon3} />
                    <p>concept and</p>
                    <p>documentation</p>
                </div>
                <div className="arrow"><img src={arrowDigital} /></div>
                <div className="digitalContent">
                <img src={digitalIcon4} />
                    <p>planing</p>
                    <br />
                </div>
                <div className="arrow"><img src={arrowDigital} /></div>
                <div className="digitalContent">
                <img src={digitalIcon5} />
                    <p>aglle software</p>
                    <p>development</p>
                </div>
                <div className="arrow"><img src={arrowDigital} /></div>
                <div className="digitalContent">
                <img src={digitalIcon6} />
                    <p>release</p>
                    <br />
                </div>
                <div className="arrow"><img src={arrowDigital} /></div>
                <div className="digitalContent">
                <img src={digitalIcon7} />
                    <p>maintenance</p>
                    <br />
                </div>

            </div>


        </div>
    )
}

export default digital
