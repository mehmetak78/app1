import React, {Fragment, useRef} from 'react';
import styles from './Header.module.scss';

const Header = (props) => {


    const handleHomeClick = (e) => {
        e.preventDefault();
        props.homeSectionRef.current.scrollIntoView({behavior: 'smooth'})
    }

    const handleAboutClick = (e) => {
        e.preventDefault();
        props.aboutSectionRef.current.scrollIntoView({behavior: 'smooth'})
    }



    const handleBlogClick = (e) => {
        e.preventDefault();
        props.blogSectionRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const handleContentClick = (e) => {
        e.preventDefault();
        props.contentSectionRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <Fragment>
            <header className={styles.header}>
                <h1 className={styles.logo}>M</h1>
                <input type="checkbox" id="nav-toggle" className={styles['nav-toggle']}/>
                <label htmlFor="nav-toggle" className={styles["nav-toggle-label"]}>
                    <span></span>
                </label>
                <nav>
                    <ul>
                        <li><a onClick={handleHomeClick} href="#">Home</a></li>
                        <li><a onClick={handleAboutClick} href="#">About</a></li>
                        <li><a onClick={handleBlogClick} href="#">Blog</a></li>
                        <li><a onClick={handleContentClick} href="#">Content</a></li>
                    </ul>
                </nav>
            </header>
            <div className={styles.content}>
                <h2>SAMPLE</h2>
            </div>
        </Fragment>
    );
};

export default Header;

//https://youtu.be/Ev3YskXLC24