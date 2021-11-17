import React from 'react';
import logo from "../../assets/beeLogo.svg"
import css from "./loading.module.css"

const Loading = () => {
    return (
        <div className={"boxbox"}>
            <section className="container">
                <div className={"hexagon"}>
                    <div>
                        <span className="one h6"></span>
                        <span className="two h3"></span>
                    </div>
                </div>


                <div className={"hexagon"}>
                    <div>
                        <span className="one h1"></span>
                        <span className="two h4"></span>
                    </div>
                </div>


                <div className={"hexagon"}>
                    <div>
                        <span className="one h5"></span>
                        <span className="two h2"></span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Loading;