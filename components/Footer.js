import React from 'react';
import styles from './Footer.module.scss';

const Footer = (props) => {
    return (
        <section ref={props.sectionRef}>
            <div className={styles.footer}>
                <div className={styles.logo}>
                    <a href="#"><img src="https://www.silvanusotel.com/images/logo-footer.png" alt=""/> </a>
                </div>

                <div className={styles.address}>
                    <h3>CONTACTS</h3>
                    <a href="https://g.page/hotel-silvanus-milas-oren?share" target="_blank">
                        Yalı Mh. Atatürk Blv, 3.Cd No:69,
                        <br/>PK:48220 Ören/Milas/Muğla
                    </a>
                    <a href={'#'}>+90 252 532 2233</a>
                    <a href={'#'}>+otelsilvanus@gmail.com</a>
                </div>

                <div className={styles.guideance}>
                    <h3>GUIDANCE</h3>
                    <a href={'#'}>Reviews</a>
                    <a href={'#'}>Gallery</a>
                </div>

                <div className={styles.aboutUs}>
                    <h3>ABOUT US</h3>
                    <a href={'#'}>About Us</a>
                    <a href={'#'}>Contact</a>
                </div>

                <div className={styles.points}>
                    <h3>POINTS</h3>
                    <a href={'https://www.google.com/travel/hotels/silvanus/entity/CgsIy725ho7MnLGCARAB/reviews?ap=entity&hrf=CgUIpgQQACIDVFJZKhYKBwjjDxAHGBwSBwjjDxAHGB0YASgAsAEAaAGaARASDkhvdGVsIFNpbHZhbnVzogEdCgsvZy8xdGY1eW0yNRIOSG90ZWwgU2lsdmFudXOSAQIgAQ&tcfs=EjcKCy9nLzF0ZjV5bTI1Eg5Ib3RlbCBTaWx2YW51cxoYCgoyMDE5LTA3LTI4EgoyMDE5LTA3LTI5UgA&rp=OAI&ved=0CJMBEKjgAigAahcKEwioi8aPusTjAhUAAAAAHQAAAAAQAQ'}>Google</a>
                    <a href={'https://www.tatilsepeti.com/hotel-silvanus'}>Tatil Sepeti</a>
                    <a href={'https://www.trivago.com.tr/mugla-509612/otel/hotel-silvanus-1988417?ip_tab_reviews='}>Trivago</a>
                    <a href={'https://www.otelpuan.com/tr/Hotel-Silvanus-Oren/yorum'}>OtelPuan</a>
                </div>

            </div>
        </section>
    );
};

export default Footer;
