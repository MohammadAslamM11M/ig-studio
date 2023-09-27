import React from "react";
import styles from "./FAQSection.module.css";

const FAQSection = () => {
    return (
        <div>
            <div className={styles.section7}>
                <p>FAQ</p>
                <div className={styles.box}>
                    <div className={styles.left}></div>
                    <div className={styles.right}>
                        <p>Do I need a personal injury report?</p>
                        <span>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua
                            dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                        </span>
                        <div className={styles.p}>
                            <p>How much is my case worth?</p>
                            <div className={styles.plus}>
                                <p>+</p>
                            </div>
                        </div>
                        <div className={styles.p}>
                            <p>What should I do right after car accidect</p>
                            <div className={styles.plus}>
                                <p>+</p>
                            </div>
                        </div>
                        <div className={styles.p}>
                            <p>How much is my case worth?</p>
                            <div className={styles.plus}>
                                <p>+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
