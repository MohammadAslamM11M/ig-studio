import React from "react";
import Ellipse17 from "../../assets/Ellipse 17.svg";
import Ellipse18 from "../../assets/Ellipse 18.svg";
import Ellipse19 from "../../assets/Ellipse 19.svg";
import Ellipse20 from "../../assets/Ellipse 20.svg";
import Ellipse21 from "../../assets/Ellipse 21.svg";
import Ellipse22 from "../../assets/Ellipse 22.svg";
import styles from "./TeamSection.module.css";

const TeamSection = () => {
    return (
        <div>
            <div className={styles.section6}>
                <p>Our Team</p>
                <div className={styles.danielCard}>
                    <div className={styles.cardFirst}>
                        <div className={styles.cardD}>
                            <img src={Ellipse22} alt="" />
                            <div className={styles.pDflex}>
                                <p>Danial Def</p>
                                <span>301 Cases</span>
                            </div>
                        </div>
                        <div className={styles.cardD}>
                            <img src={Ellipse17} alt="" />
                            <div className={styles.pDflex}>
                                <p>Sanfole</p>
                                <span>301 Cases</span>
                            </div>
                        </div>
                        <div className={styles.cardD}>
                            <img src={Ellipse19} alt="" />
                            <div className={styles.pDflex}>
                                <p>Cesforila</p>
                                <span>301 Cases</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardFirst}>
                        <div className={styles.cardD}>
                            <img src={Ellipse20} alt="" />
                            <div className={styles.pDflex}>
                                <p>Haldone</p>
                                <span>301 Cases</span>
                            </div>
                        </div>
                        <div className={styles.cardD}>
                            <img src={Ellipse21} alt="" />
                            <div className={styles.pDflex}>
                                <p>Colleen</p>
                                <span>301 Cases</span>
                            </div>
                        </div>
                        <div className={styles.cardD}>
                            <img src={Ellipse18} alt="" />
                            <div className={styles.pDflex}>
                                <p>Nik Jeo</p>
                                <span>301 Cases</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
