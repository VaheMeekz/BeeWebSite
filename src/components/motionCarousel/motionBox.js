import React from 'react';
import css from './motion.module.scss'
import { motion } from "framer-motion";

const MotionBox = ({variants, initial, exit, style, animate}) => {

    return (
        <motion.div
            className={css.motionBox}
            variants={variants}
            initial={initial}
            exit={exit}
            style={style}
            animate={animate}
        />
    );
};

export default MotionBox;