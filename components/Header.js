import React, {Fragment, useEffect, useRef, useState} from 'react';
import styles from './Header.module.scss';
import {useRouter} from "next/router";

const Header = (props) => {

    const router = useRouter();
    const path = router.pathname;

    let headerClass = `${styles.header} ${styles.headerScrolled}`;

    if ( !props.isScrolled) {
        headerClass = `${styles.header} ${styles.headerNotScrolled}`;
    }

    return (
        <Fragment>
            <header className={headerClass}>
                <div className={styles.logo}>
                    <a href="#"><img src="https://www.silvanusotel.com/images/logo-footer.png" alt=""/> </a>
                </div>
                <input type="checkbox" id="nav-toggle" className={styles['nav-toggle']}/>
                <label htmlFor="nav-toggle" className={styles["nav-toggle-label"]}>
                    <span> </span>
                </label>
                <nav>
                    <ul>
                        <li><a id='home' onClick={props.handleSectionClick} href="#">Home</a></li>
                        <li><a id='about' onClick={props.handleSectionClick} href="#">About</a></li>
                        <li><a id='features' onClick={props.handleSectionClick} href="#">Features</a></li>
                        <li><a id='rooms' onClick={props.handleSectionClick} href="#">Rooms</a></li>
                        <li><a id='stories' onClick={props.handleSectionClick} href="#">Stories</a></li>
                        <li><a id='booking' onClick={props.handleSectionClick} href="#">Booking</a></li>
                        <li><a id='blog' onClick={props.handleSectionClick} href="#">Blog</a></li>
                        <li><a id='content' onClick={props.handleSectionClick} href="#">Contacts</a></li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
};

export default Header;

//https://youtu.be/Ev3YskXLC24
