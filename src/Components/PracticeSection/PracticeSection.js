import React from "react";
import Rectangle3652 from "../../assets/Rectangle 3652.png";
import Rectangle3651 from "../../assets/Rectangle 3651.png";
import Rectangle3653 from "../../assets/Rectangle 3653.png";
import Rectangle3654 from "../../assets/Rectangle 3654.png";
import Rectangle3656 from "../../assets/Rectangle 3656.png";
import Rectangle3655 from "../../assets/Rectangle 3655.png";
import styles from "./PracticeSection.module.css";

const PracticeSection = () => {
    return (
        <div>
            <div className={styles.section4}>
                <p>Area of Practices</p>
                <div className={styles.imgHolder}>
                    <div className={styles.box}>
                        <img src={Rectangle3652} alt="" />
                        <img src={Rectangle3651} alt="" />
                    </div>
                    <div className={styles.box}>
                        <img src={Rectangle3653} alt="" />
                        <img src={Rectangle3654} alt="" />
                    </div>
                    <div className={styles.box}>
                        <img src={Rectangle3656} alt="" />
                        <img src={Rectangle3655} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeSection;
