import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import img1 from "../../../assets/portfolioImages/1.png"
import img2 from "../../../assets/portfolioImages/2.png"
import img3 from "../../../assets/portfolioImages/3.png"
import img4 from "../../../assets/portfolioImages/4.png"
import img5 from "../../../assets/portfolioImages/5.png"

export const Carusel = () => {
    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.gentle
    });

    let slides = [
        {
            key: uuidv4(),
            content: <img src={img1} alt="img" />
        },
        {
            key: uuidv4(),
            content: <img src={img2} alt="img" />
        },
        {
            key: uuidv4(),
            content: <img src={img3} alt="img" />
        },
        {
            key: uuidv4(),
            content: <img src={img4} alt="img" />
        },
        {
            key: uuidv4(),
            content: <img src={img5} alt="img" />
        },
    ].map((slide, index) => {
        return { ...slide, onClick: () => setState({ goToSlide: index }) };
    });

    const onChangeInput = (e) => {
        setState({
            [e.target.name]: parseInt(e.target.value, 10) || 0
        });
    };

    let xDown = null;
    let yDown = null;

    const getTouches = (evt) => {
        return (
            evt.touches || evt.originalEvent.touches // browser API
        ); // jQuery
    };

    const handleTouchStart = (evt) => {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    const handleTouchMove = (evt) => {
        if (!xDown || !yDown) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
                /* left swipe */
                setState({ goToSlide: state.goToSlide + 1 });
            } else {
                /* right swipe */
                setState({ goToSlide: state.goToSlide - 1 });
            }
        } else {
            if (yDiff > 0) {
                /* up swipe */
            } else {
                /* down swipe */
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };

    return (
        <div
            style={{ width: "80%", height: "300px", margin: "0 auto" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <Carousel
                slides={slides}
                goToSlide={state.goToSlide}
                offsetRadius={state.offsetRadius}
                showNavigation={state.showNavigation}
                animationConfig={state.config}
            />
            <div
                style={{
                    margin: "0 auto",
                    marginTop: "2rem",
                    width: "50%",
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                <div>
                    <input
                        type="checkbox"
                        checked={state.showNavigation}
                        name="showNavigation"
                        onChange={(e) => {
                            setState({ showNavigation: e.target.checked });
                        }}
                        className="caruselCheckBox"
                    />
                </div>
                <div>
                    <button
                        onClick={() => {
                            this.setState({ config: config.gentle });
                        }}
                        disabled={state.config === config.gentle}
                        className="caruselButtons"
                    >
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            this.setState({ config: config.slow });
                        }}
                        disabled={state.config === config.slow}
                        className="caruselButtons"
                    >
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            this.setState({ config: config.wobbly });
                        }}
                        disabled={state.config === config.wobbly}
                        className="caruselButtons"
                    >
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            this.setState({ config: config.stiff });
                        }}
                        disabled={state.config === config.stiff}
                        className="caruselButtons"
                    >

                    </button>
                </div>
            </div>
        </div>
    );
};
