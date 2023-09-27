import React from "react";
import styles from "./IntroSection.module.css";

const IntroSection = () => {
    return (
        <div>
            <div className={styles.section2}>
                <div className={styles.lets}>
                    <p>Let’s Introduce Ourself</p>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.lets}>
                    <p>Criminal Lawyer</p>
                    <span>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do 0 amet sint. Velit officia
                        consequatduis enim velit mollit Exercitation.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
