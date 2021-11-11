import React, {useEffect, useRef} from "react";
import {AnimatePresence} from "framer-motion";
import { useState } from "react";
import img from "../../assets/images/aboutUsImg.png"
import img1 from "../../assets/images/parallax1.png"
import img2 from "../../assets/images/parallax2.png"
import img3 from "../../assets/images/teamImg2.jpg"
import MotionBox from "./motionBox";
import useInterval from "../../assets/hooks/useInterval";
import css from './motion.module.scss'

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 100 : -100,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        };
    }
};

const TestComp = ({ bg,text }) => (
    <>
    <MotionBox
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        style={{
            background: bg,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
    />
        <p>{text}</p>
    </>
);

const MotionSlider = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const slides = [
        {id: 1, img: img2,text:"text1"},
        {id: 2, img: img1,text:"text2"},
        {id: 3, img: img2,text:"text3"},
        {id: 4, img: img1,text:"text4"},
    ]

    useInterval(() => {
        if(page < slides.length - 1){
            paginate(1)
        } else {
            paginate(-slides.length + 1)
        }
    }, 3000)

    return (
        <div className={css.page}>
            <div className={css.pageBlock}>
                <AnimatePresence initial={false} custom={direction}>
                    {
                        slides.map(({id, img,text}, index) => {
                            return page === index && <TestComp key={index} bg={`url(${img})`} text={text}/>
                        })
                    }
                </AnimatePresence>
            </div>
            {/*<Row>*/}
            {/*    <MotionButton className="prev" onClick={() => paginate(-1)}>*/}
            {/*        {"prev"}*/}
            {/*    </MotionButton>*/}
            {/*    <Text>{page}</Text>*/}
            {/*    <MotionButton className="next" onClick={() => paginate(1)}>*/}
            {/*        {"next"}*/}
            {/*    </MotionButton>*/}
            {/*</Row>*/}
        </div>
    );
};

export default MotionSlider;