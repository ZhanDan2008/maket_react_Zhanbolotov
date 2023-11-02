import React from 'react';
import styles from "./Footer.module.css"
import logo from "./images/G_logo.png"
import stars from "./images/stars.png"
const Footer = () => {
    return (
        <div className={styles.main}>
            <ul className={styles.second}>
                <li>Grow your career</li>
                <li>Build a team</li>
            </ul>
            <ul className={styles.third}>
                <li>Meet the founders</li>
                <li>Mentorship</li>
                <li>Sah hello</li>
            </ul>
        </div>

    );
};

export default Footer;