import React from 'react';

import styles from './Features.module.scss';

import IconWorld from "../icons/IconWorld";
import IconNature from "../icons/IconNature";
import IconWay from "../icons/IconWay";
import IconHealth from "../icons/IconHealth";

const Features = (props) => {
    return (
        <section ref={props.sectionRef} className={styles.sectionFeatures}>

            <div className={styles.featureBox}>
                <IconWorld/>
                <h3 className="heading-tertiary u-margin-bottom-small">Holiday Point</h3>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p>
            </div>

            <div className={styles.featureBox}>
                <IconNature/>
                <h3 className="heading-tertiary u-margin-bottom-small">Fresh Nature</h3>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p>

            </div>

            <div className={styles.featureBox}>
                <IconWay/>
                <h3 className="heading-tertiary u-margin-bottom-small">Entertainment</h3>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p>
            </div>

            <div className={styles.featureBox}>
                <IconHealth/>
                <h3 className="heading-tertiary u-margin-bottom-small">Healthy Foods </h3>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p>
            </div>

        </section>
    );
};

export default Features;
