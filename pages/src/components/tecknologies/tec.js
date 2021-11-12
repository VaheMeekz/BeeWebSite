import React from 'react';
import php from '../../assets/images/PHP.png'
import javascript from '../../assets/images/JavaScript.png'
import angular from '../../assets/images/Angular.png'
import pyton from '../../assets/images/Python.png'
import vue from '../../assets/images/Vue.png'

const Tec = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="row1">
                    <p className="text_row1">Tecnologise</p>
                </div>
                <div className="row2">
                    <p className="text_row2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna proin
                        tortor eu ut tortor turpis accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                        urna proin tortor eu ut tortor turpis accumsan. </p>
                </div>
                <div className="container_row3_row4">
                    <div className="row3">
                        <span className="row3_span"></span>
                        <div className="row3_div1">
                            <div className="row3_div_img">
                                <img src={php} alt={"img"}/>
                            </div>
                            <p className="row3_p">PHP</p>
                        </div>
                        <div className="row3_div2">
                            <div className="row3_div_img">
                                <img src={javascript} alt={"img"}/>
                            </div>
                            <p className="row3_p">JavaScript</p>
                        </div>
                        <div className="row3_div3">
                            <div className="row3_div_img">
                                <img src={angular} alt={"img"}/>
                            </div>
                            <p className="row3_p">Angular</p>
                        </div>
                        <div className="row3_div4">
                            <div className="row3_div_img">
                                <img src={vue} alt={"img"}/>
                            </div>
                            <p className="row3_p">Vue.js</p>
                        </div>
                        <div className="row3_div5">
                            <div className="row3_div_img">
                                <img src={pyton} alt={"img"}/>
                            </div>
                            <p className="row3_p">Python</p>
                        </div>
                        <div className="row3_div6">
                            <div className="row3_div_img">
                                <img src={angular} alt={"img"}/>
                            </div>
                            <p className="row3_p">Angular</p>
                        </div>
                    </div>
                    <div className="div_line_row3_row4">
                        <div className="line_row3_row4"></div>
                        <div className="line_row3_row4"></div>
                        <div className="line_row3_row4"></div>
                        <div className="line_row3_row4"></div>
                        <div className="line_row3_row4"></div>
                    </div>
                    <div className="row4">
                        <span className="row4_span"></span>
                        <div className="row4_div1">
                            <div className="row4_div_img">
                                <img src={php} alt={"img"}/>
                            </div>
                            <p className="row4_p">PHP</p>
                        </div>
                        <div className="row4_div2">
                            <div className="row4_div_img">
                                <img src={javascript} alt={"img"}/>
                            </div>
                            <p className="row4_p">JavaScript</p>
                        </div>
                        <div className="row4_div3">
                            <div className="row4_div_img">
                                <img src={angular} alt={"img"}/>
                            </div>
                            <p className="row4_p">Angular</p>
                        </div>
                        <div className="row4_div4">
                            <div className="row4_div_img">
                                <img src={vue} alt={"img"}/>
                            </div>
                            <p className="row4_p">Vue.js</p>
                        </div>
                        <div className="row4_div5">
                            <div className="row4_div_img">
                                <img src={pyton} alt={"img"}/>
                            </div>
                            <p className="row4_p">Python</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tec;