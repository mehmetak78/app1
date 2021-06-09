import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import {Fragment, useRef} from "react";
import Footer from "../components/Footer";
import Rooms from "../componentSamples/Rooms";
import HeaderContent from "../componentSamples/HeaderContent";
import About from "../componentSamples/About";
import Features from "../componentSamples/Features";
import Stories from "../componentSamples/Stories";
import Booking from "../componentSamples/Booking";

export default function Home() {

    const homeSectionRef = useRef();
    const aboutSectionRef = useRef();
    const blogSectionRef = useRef();
    const contentSectionRef = useRef();

    const handleSectionClick = (e) => {
        e.preventDefault();
        switch(e.target.id) {
            case 'home' : homeSectionRef.current.scrollIntoView({behavior: 'smooth'}); break;
            case 'about' : aboutSectionRef.current.scrollIntoView({behavior: 'smooth'}); break;
            case 'blog' : blogSectionRef.current.scrollIntoView({behavior: 'smooth'}); break;
            case 'content' : contentSectionRef.current.scrollIntoView({behavior: 'smooth'}); break;
        }
    }

    return (
        <Fragment>
            <div ref={homeSectionRef}>
                <Header handleSectionClick = {handleSectionClick}/>
            </div>
            <HeaderContent handleSectionClick = {handleSectionClick}/>
            <About/>
            <Features/>
            <Rooms/>
            <Stories/>
            <Booking/>



            <div className={styles.section}>
                <section ref={aboutSectionRef} className={styles['section-two']}>
                    <h1>About</h1>
                    <img className={styles.image} src="https://unsplash.it/300/500" alt=""/>
                </section>
                <section ref={blogSectionRef} className={styles['section-three']}>
                    <h1>Blog</h1>
                </section>

                <section ref={contentSectionRef} className={styles['section-four']}>
                    <h1>Content</h1>
                </section>
            </div>

            <Footer/>
        </Fragment>
    )
}
