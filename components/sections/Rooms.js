import React from 'react';
import styles from './Rooms.module.scss';
import Button from "../UI/Button";

const Rooms = (props) => {
    return (
        <section ref={props.sectionRef} className={styles.sectionRooms}>
            <div className="u-center-text ">
                <h2 className="heading-secondary">
                    Rooms
                </h2>
            </div>
            <div className={styles.cardsContent}>
                <div className={styles.card}>
                    <div className={`${styles["card__side"]} ${styles["card__side--front"]}`}>
                        <div className={`${styles["card__picture"]} ${styles["card__picture--1"]}`}>
                            &nbsp;
                        </div>
                        <h4 className={styles["card__heading"]}>
                            <span className={`${styles["card__heading-span"]} ${styles["card__heading-span--1"]}`}>Suite</span>

                        </h4>
                        <div className={styles["card__details"]}>
                            <ul>
                                <li>12 suite rooms</li>
                                <li>35 m2</li>
                                <li>for families with children</li>
                                <li>twin or two single beds</li>
                                <li>extra single bed if needed</li>
                            </ul>
                        </div>
                    </div>
                        <div className={`${styles["card__side"]} ${styles["card__side--back"]} ${styles["card__side--back-1"]}`}>
                        <div className={styles["card__cta"]}>
                            <div className={styles["card__price-box"]}>
                                <p className={styles["card__price-only"]}>Suite Room</p>
                                <p className={styles["card__price-value"]}>$297</p>
                            </div>
                            <Button buttontype={'btn1'} className={`${styles["btnBookRoom"]} ${styles["btnBookRoom--1"]}`}>
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={`${styles["card__side"]} ${styles["card__side--front"]}`}>
                        <div className={`${styles["card__picture"]} ${styles["card__picture--2"]}`}>
                            &nbsp;
                        </div>
                        <h4 className={styles["card__heading"]}>
                            <span className={`${styles["card__heading-span"]} ${styles["card__heading-span--2"]}`}>Standard</span>

                        </h4>
                        <div className={styles["card__details"]}>
                            <ul>
                                <li>46 standard rooms</li>
                                <li>18 m2 and balcony</li>
                                <li>twin or two single beds</li>
                                <li>extra single bed if needed</li>
                                <li>jacuzzi, air condition</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles["card__side"]} ${styles["card__side--back"]} ${styles["card__side--back-2"]}`}>
                        <div className={styles["card__cta"]}>
                            <div className={styles["card__price-box"]}>
                                <p className={styles["card__price-only"]}>Standard Room</p>
                                <p className={styles["card__price-value"]}>$120</p>
                            </div>
                            <Button buttontype={'btn1'} className={`${styles["btnBookRoom"]} ${styles["btnBookRoom--2"]}`}>
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>


                <div className={styles.card}>
                    <div className={`${styles["card__side"]} ${styles["card__side--front"]}`}>
                        <div className={`${styles["card__picture"]} ${styles["card__picture--3"]}`}>
                            &nbsp;
                        </div>
                        <h4 className={styles["card__heading"]}>
                            <span className={`${styles["card__heading-span"]} ${styles["card__heading-span--3"]}`}>Boutique</span>

                        </h4>
                        <div className={styles["card__details"]}>
                            <ul>
                                <li>9 boutique rooms</li>
                                <li>35 m2</li>
                                <li>for families with children</li>
                                <li>twin or two single beds</li>
                                <li>extra single bed if needed</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles["card__side"]} ${styles["card__side--back"]} ${styles["card__side--back-3"]}`}>
                        <div className={styles["card__cta"]}>
                            <div className={styles["card__price-box"]}>
                                <p className={styles["card__price-only"]}>Boutique Room</p>
                                <p className={styles["card__price-value"]}>$97</p>
                            </div>
                            <Button buttontype={'btn1'} className={`${styles["btnBookRoom"]} ${styles["btnBookRoom--3"]}`}>
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>


                <div className={styles.card}>
                    <div className={`${styles["card__side"]} ${styles["card__side--front"]}`}>
                        <div className={`${styles["card__picture"]} ${styles["card__picture--4"]}`}>
                            &nbsp;
                        </div>
                        <h4 className={styles["card__heading"]}>
                            <span className={`${styles["card__heading-span"]} ${styles["card__heading-span--4"]}`}>HoneyMoon</span>

                        </h4>
                        <div className={styles["card__details"]}>
                            <ul>
                                <li>2 honeymoon rooms</li>
                                <li>22 m2</li>
                                <li>unique view of the sea</li>
                                <li>-</li>
                                <li>jacuzzi, air condition</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles["card__side"]} ${styles["card__side--back"]} ${styles["card__side--back-4"]}`}>
                        <div className={styles["card__cta"]}>
                            <div className={styles["card__price-box"]}>
                                <p className={styles["card__price-only"]}>HoneyMoon Room</p>
                                <p className={styles["card__price-value"]}>$180</p>
                            </div>
                            <Button buttontype={'btn1'} className={`${styles["btnBookRoom"]} ${styles["btnBookRoom--4"]}`}>
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rooms;
