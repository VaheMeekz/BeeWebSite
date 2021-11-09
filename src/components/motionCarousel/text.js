import React from 'react';
import css from './motion.module.scss'

const Text = ({children}) => {
    return (
        <div className={css.text}>
            {children}
        </div>
    );
};

export default Text;