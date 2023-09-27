import React from "react";
import Success from "../../assets/SuccessRate.svg";
import styles from "./SuccessRate.module.css";

const SuccessRate = () => {
    return (
        <div>
            <div className={styles.section3}>
                <p>Why Choose us?</p>
                <div className={styles.mainHolderCard}>
                    <div className={styles.card}>
                        <img src={Success} alt="" />
                        <p>98% Success Rate</p>
                        <span>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.
                        </span>
                        <form action="">
                            <button>Read More</button>
                        </form>
                    </div>
                    <div className={styles.card}>
                        <img src={Success} alt="" />
                        <p>98% Success Rate</p>
                        <span>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.
                        </span>
                        <form action="">
                            <button>Read More</button>
                        </form>
                    </div>
                    <div className={styles.card}>
                        <img src={Success} alt="" />
                        <p>98% Success Rate</p>
                        <span>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.
                        </span>
                        <form action="">
                            <button>Read More</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessRate;
