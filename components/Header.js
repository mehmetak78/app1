import React, {Fragment, useEffect, useRef, useState} from 'react';
import styles from './Header.module.scss';

const Header = (props) => {

    const [y, setY] = useState(0);

    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
            console.log("scrolling up");
        } else if (y < window.scrollY) {
            console.log("scrolling down");
        }
        setY(window.scrollY);
        console.log(window.scrollY)
    };

    useEffect(() => {
        setY(window.scrollY);

        window.addEventListener("scroll", (e) => handleNavigation(e));
    }, []);



    const headerClass = y===0
        ? `${styles.header} ${styles.headerNotScrolled}`
        : `${styles.header} ${styles.headerScrolled}`;

    return (
        <Fragment>
            <header className={headerClass}>
                <div className={styles.logo}>
                    <a href="#"><img src="https://www.silvanusotel.com/images/logo-footer.png" alt=""/> </a>
                </div>
                <input type="checkbox" id="nav-toggle" className={styles['nav-toggle']}/>
                <label htmlFor="nav-toggle" className={styles["nav-toggle-label"]}>
                    <span></span>
                </label>
                <nav>
                    <ul>
                        <li><a id='home' onClick={props.handleSectionClick} href="#">Home</a></li>
                        <li><a id='about' onClick={props.handleSectionClick} href="#">About</a></li>
                        <li><a id='blog' onClick={props.handleSectionClick} href="#">Blog</a></li>
                        <li><a id='content' onClick={props.handleSectionClick} href="#">Content</a></li>
                    </ul>
                </nav>
            </header>
{/*            <div className={styles.content}>
                <h2>SAMPLE</h2>
            </div>*/}
        </Fragment>
    );
};

export default Header;

//https://youtu.be/Ev3YskXLC24