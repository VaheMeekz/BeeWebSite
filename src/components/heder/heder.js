import React from 'react';
import hederBag from '../../assets/images/bffcbb3c0a5f66158141ae3e6c89bf11 1.png';
import css from './heder.module.css'

const Heder = () => {
    return (
        <div className={css.hederBox}>
            <div><img src={hederBag} alt={'img'} className={css.hederBackgrownd}/></div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

        </div>
    );
};

export default Heder;