import React from 'react';
import styles from "./MainPart.module.css"
import front_woman from "./images/front_woman.png"
import back_woman from "./images/back_woman.png"
const MainPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.left_part}>
            <h1 className={styles.h1}>Discover,<br />nurture,bloom</h1>
            <p className={styles.p}>Product & Engineering Recruitment<br/>va va bloom, with a human touch and a dash of</p>
            </div>
            <div className={styles.right_part}>
                <img className={styles.front_woman}  src={front_woman}/>
                <img className={styles.back_woman}  src={back_woman}/>
            </div>
        </div>
    );
};

export default MainPage;