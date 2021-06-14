import styles from '../styles/Home.module.css'
import {Fragment, useEffect} from "react";
import Footer from "../components/Footer";
import Rooms from "../componentSamples/Rooms";


import Features from "../componentSamples/Features";
import Stories from "../componentSamples/Stories";
import Booking from "../componentSamples/Booking";
import HeaderContent from "../components/sections/HeaderContent";
import About from "../components/sections/About";
import {useRouter} from "next/router";
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

/*    useEffect((effect) => {
        roomsSectionRef.current.scrollIntoView({behavior: 'smooth'});
    },[])*/

  const router = useRouter();


  useEffect(() => {
    console.log('useEffect');
    const {section} = router.query;
    console.log(section);
    switch (section) {
      case 'about' : aboutSectionRef.current.scrollIntoView({behavior: 'smooth'});break;
      case 'features' : featuresSectionRef.current.scrollIntoView({behavior: 'smooth'});break;
      case 'rooms' : roomsSectionRef.current.scrollIntoView({behavior: 'smooth'});break;
      case 'stories' : storiesSectionRef.current.scrollIntoView({behavior: 'smooth'});break;
      case 'booking' : bookingSectionRef.current.scrollIntoView({behavior: 'smooth'});break;
      case 'content' : footerSectionRef.current.scrollIntoView({behavior: 'smooth'});break;
    }
  }, []);

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

export async function getServerSideProps(context) {
  return {
    props: {

    }
  }
}

export default Home;
