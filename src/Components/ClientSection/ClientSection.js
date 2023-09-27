import React from "react";
import Ellipse14 from "../../assets/Ellipse 14.svg";
import Ellipse15 from "../../assets/Ellipse 152.svg";
import Ellipse16 from "../../assets/Ellipse 16.svg";
import Group41 from "../../assets/Group 41.svg";
import Group40 from "../../assets/Group 40.svg";
import styles from "./ClientSection.module.css";

const ClientSection = () => {
    return (
        <div>
            <div className={styles.section5}>
                <div className={styles.say}>
                    <p>What says our happy Clients</p>
                    <div>
                        <button className={styles.elipce} style={{cursor: "pointer"}}>
                            <img src={Group40} alt="" />
                        </button>
                        <button className={styles.elipce} style={{cursor: "pointer"}}>
                            <img src={Group41} alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.janeAbout}>
                    <div className={styles.card}>
                        <img src={Ellipse16} alt="" />
                        <h1>Jane Cooper</h1>
                        <a href="">Ceo of Hunt</a>
                        <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
                        <form action="">
                            <button style={{cursor: "pointer"}}>Read More</button>
                        </form>
                    </div>
                    <div className={styles.card}>
                        <img src={Ellipse15} alt="" />
                        <h1>Devon Lane</h1>
                        <a href="">Ceo of Hunt</a>
                        <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
                        <form action="">
                            <button style={{cursor: "pointer"}}>Read More</button>
                        </form>
                    </div>
                    <div className={styles.card}>
                        <img src={Ellipse14} alt="" />
                        <h1>Robert Fox</h1>
                        <a href="">Ceo of Hunt</a>
                        <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
                        <form action="">
                            <button style={{cursor: "pointer"}}>Read More</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSection;
