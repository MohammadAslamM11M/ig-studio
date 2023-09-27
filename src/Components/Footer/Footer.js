import React from "react";
import VectorImg from "../../assets/Vector.svg";
import Icon from "../../assets/Icon.svg";
import Icon1 from "../../assets/Icon1.svg";
import Icon2 from "../../assets/Icon2.svg";
import Icon3 from "../../assets/Icon3.svg";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className={styles.footNav}>
                    <div className={styles.logo}>
                        <img src={VectorImg} alt="" />
                        <h2>IGSTUDIO</h2>
                    </div>
                    <div className={styles.linkFoot}>
                        <a href="">Home</a>
                        <a href="">Attorneys</a>
                        <a href="">Practice Areas</a>
                        <a href="">About Us</a>
                    </div>

                    <div className={styles.contact}>
                        <a href="">
                            <img src={Icon} alt="" />
                        </a>
                        <a href="">
                            <img src={Icon1} alt="" />
                        </a>
                        <a href="">
                            <img src={Icon2} alt="" />
                        </a>
                        <a href="">
                            <img src={Icon3} alt="" />
                        </a>
                    </div>
                </div>
                <div className={styles.polisy}>
                    <p>© 2020 Acme. All right reserved. </p>
                    <p> Privacy Policy </p>
                    <p>Terms of Service</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
