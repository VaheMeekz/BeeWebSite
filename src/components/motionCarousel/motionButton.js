import React from 'react';
import css from './motion.module.scss'
import classnames from "classnames"

const MotionButton = ({children, cn, onClick}) => {
    return (
        <button className={classnames(css.button, css[cn])} onClick={onClick}>
            {children}
        </button>
    );
};

export default MotionButton;