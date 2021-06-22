import React from 'react';
import styles from "./Booking.module.scss";

const Booking = (props) =>
{
    return (
        <section ref={props.sectionRef} className={styles.sectionBooking}>
            <div className="u-center-text">
                <h2 className="heading-secondary">
                    Booking
                </h2>
            </div>

            <div className={styles.bookingContent}>
            </div>
        </section>
    );
}
;

export default Booking;