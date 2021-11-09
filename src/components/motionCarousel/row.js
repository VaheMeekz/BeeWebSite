import React from 'react';
import css from './motion.module.scss'

const Row = ({children}) => {
    return (
        <div className={css.row}>
            {children}
        </div>
    );
};

export default Row;