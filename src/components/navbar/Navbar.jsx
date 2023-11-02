import image from "./images/logo.png"
import styles from "./navbar.module.css"
export default function (){
    return (
        <div className={styles.navbar}>
            <div className="left_part_in_navbar">
                <img src={image} alt="logo"/></div>
            <div className={styles.right_part_of_navbar}>
                <ul>
                    <li>Grow your career</li>
                    <li>Build a team</li>
                    <li>Meet the founders</li>
                    <li>Mentorship</li>
                    <li>Say hello</li>
                </ul>
            </div>
        </div>
    )
}