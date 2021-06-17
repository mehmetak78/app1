import React from 'react';
import styles from './About.module.scss';
import {useRouter} from "next/router";
import Button from "../UI/Button";


const About = (props) => {

    const router = useRouter();

    const handleMorePhotosClick = (e) => {
        e.preventDefault();
        console.log('handleMorePhotosClick');
        router.push('./photos');
    }

    return (
        <section ref={props.sectionRef} className={styles.sectionAbout}>
            <div className="u-center-text ">
                <h2 className="heading-secondary">
                    About Us
                </h2>
            </div>
            <div className={styles.aboutContent}>
                <div className={styles.leftContent}>
                    <h3 className="heading-tertiary u-margin-bottom-small">Like you are at home...</h3>
                    <p className="paragraph">
                        All of the rooms in our hotel have balconies, air conditioning and bathrooms. Most rooms
                        come with basic seating and balcony seating. The double bed in our rooms provides a pleasant night's rest.
                        In addition, there is a safe and a minibar. Internet access and television offer complete holiday
                        comfort.
                        The bathrooms come with a shower. A hairdryer is also provided. It offers family rooms and non-smoking
                        rooms.
                        Our hotel
                        was built in 2011. The air-conditioned property has
                        60 rooms. These rooms are located in the main building (3 floors) and in 6 side buildings
                        (up to
                        2 floors).
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small">Hotel Services....</h3>
                    <p className="paragraph">
                        All floors are easily accessible by elevator or staircase. Services such as a cloakroom and
                        currency
                        exchange contribute to the existing comfort. The internet connection in the common areas
                        allows
                        the
                        passengers to stay in touch with the outside world. A variety of gastronomic services are
                        available,
                        including a restaurant, dining room and bar. Guests arriving by private car can leave them
                        in
                        the
                        accommodation's outdoor car park. Additional services include medical support, room service
                        and
                        laundry.

                    </p>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.imgContent}>
                        <div className={styles.composition}>
                            <img srcSet="/imgHS/hs5.jpg 300w, /img/nat-1-large.jpg 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 1"
                                 className={`${styles['composition__photo']} ${styles['composition__photo--p1']}`}
                                 src="/img/nat-1-large.jpg"/>

                            <img srcSet="imgHS/hs3.jpg 300w, /img/nat-2-large.jpg 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 2"
                                 className={`${styles['composition__photo']} ${styles['composition__photo--p2']}`}
                                 src="/img/nat-2-large.jpg"/>

                            <img srcSet="imgHS/hs4.jpg 300w, /img/nat-3-large.jpg 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 3"
                                 className={`${styles['composition__photo']} ${styles['composition__photo--p3']}`}
                                 src="/img/nat-3-large.jpg"/>

                        </div>
                    </div>
                    <div className={styles.linkContent}>
                        <Button
                            buttontype='btn1'
                            className={styles.btnAbout}
                            onClick={handleMorePhotosClick}
                        > More Photos
                        </Button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;
