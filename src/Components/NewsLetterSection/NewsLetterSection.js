import React from "react";
import styles from "./NewsLetterSection.module.css";

const NewsLetterSection = () => {
    return (
        <div>
            <div className={styles.section7}>
                <div className={styles.logIn}>
                    <p>Subscribe Our Newsletter</p>
                    <div className={styles.log}>
                        <input className={styles.input} type="text" placeholder="Name : " />
                        <input type="email" placeholder="Enter your Email" />
                        <button className={styles.send}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetterSection;
