import React from "react";
import HeroImg from "../../assets/HeroImg.png";
import VectorImg from "../../assets/Vector.svg";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <nav>
                    <div className={styles.icon}>
                        <button>_-_</button>
                    </div>
                    <div className={styles.navStart}>
                        <a href="">
                            <img src={VectorImg} alt="" />
                        </a>
                        <a href="">IGSTUDIO</a>
                    </div>
                    <div className={styles.navCenter}>
                        <a href="">Home</a>
                        <a href="">Attorneys</a>
                        <a href="">Practice Areas</a>
                        <a href="">About Us</a>
                    </div>
                    <div>
                        <form action="">
                            <button className={styles.contactBtn}>Contact Now</button>
                        </form>
                    </div>
                </nav>
                <div className={styles.mainHolder}>
                    <div className={styles.textHolder}>
                        <p>You don’t have to Fight them Alone.</p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut
                            inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
                        </span>
                        <div className={styles.inpBtn}>
                            <form action="">
                                <input type="text" placeholder="Enter your eamil address" />
                            </form>
                            <form action="">
                                <button>Let’s Talk</button>
                            </form>
                        </div>
                    </div>
                    <div className={styles.textHolder}>
                        <img src={HeroImg} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
