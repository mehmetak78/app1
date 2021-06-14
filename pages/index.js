import styles from '../styles/Home.module.css'
import {Fragment} from "react";
import Footer from "../components/Footer";
import Rooms from "../componentSamples/Rooms";


import Features from "../componentSamples/Features";
import Stories from "../componentSamples/Stories";
import Booking from "../componentSamples/Booking";
import HeaderContent from "../components/sections/HeaderContent";
import About from "../components/sections/About";
//import About from "../componentSamples/About";

const Home = (props) => {

    const {
        aboutSectionRef,
        featuresSectionRef,
        roomsSectionRef,
        storiesSectionRef,
        bookingSectionRef,
        blogSectionRef,
        footerSectionRef
    } = props;

    return (
        <Fragment>
            <HeaderContent/>
            <section ref={aboutSectionRef}>
                <About/>
            </section>

            <section id='features' ref={featuresSectionRef}>
                <Features/>
            </section>

            <section ref={roomsSectionRef}>
                <Rooms/>
            </section>
            <section ref={storiesSectionRef}>
                <Stories/>
            </section>
            <section ref={bookingSectionRef}>
                <Booking/>
            </section>
            <div className={styles.section}>
                <section className={styles['section-two']}>
                    <h1>About</h1>
                    <img className={styles.image} src="https://unsplash.it/300/500" alt=""/>
                </section>
                <section ref={blogSectionRef} className={styles['section-three']}>
                    <h1>Blog</h1>
                </section>
                <section className={styles['section-four']}>
                    <h1>Content</h1>
                </section>
            </div>

            <section ref={footerSectionRef}>
                <Footer/>
            </section>
        </Fragment>
    )
}


export default Home;
