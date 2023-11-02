import React from 'react';
import styles from "./line.module.css"
import bumple from "./images/bumble.png"
import deliveroo from "./images/deliveroo_logo.png"
import depop from "./images/depop.png"
import monzo from "./images/monzo_logo.png"
import moonpig from "./images/moonpig.png"
import zoopla from "./images/zoopla.png"
const Line = () => {
    return (
        <div className={styles.main}>
            <img src={monzo}/>
            <img src={deliveroo} alt="" />
            <img src={zoopla} alt="" />
            <img src={moonpig} alt="" />
            <img src={depop} alt="" />
            <img src={bumple} alt="" />
        </div>
    );
};
export default Line;