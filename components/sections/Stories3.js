import React from 'react';
import styles from './Stories3.module.scss'
import Button from "../UI/Button";

const Stories = (props) => {
  return (
    <section ref={props.sectionRef} className={styles.sectionStories}>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Guest Stories
        </h2>
      </div>

      <div className={styles.storiesContent}>
        <div className={styles['story']}>
          <div className={styles.leftPart}>
            <figure className={styles["story__shape"]}>
              <img src="imgHS/guest3.jpg" alt="Guest" className={styles["story__img"]}/>
            </figure>
            <figcaption className={styles["story__caption"]}>Mrs. Brown</figcaption>
          </div>

          <div className={styles["story__text"]}>
            <h3 className="heading-tertiary">Good memories</h3>
            <blockquote className='blocquote'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero
              repellat quis consequatur
              ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
              repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
            </blockquote>
          </div>

        </div>


        <div className={styles.story}>
          <div className={styles.leftPart}>
            <figure className={styles["story__shape"]}>
              <img src="imgHS/guest4.jpg" alt="Guest" className={styles["story__img"]}/>
            </figure>
            <figcaption className={styles["story__caption"]}>Mr. White</figcaption>
          </div>
          <div className={styles["story__text"]}>
            <h3 className="heading-tertiary">My Sweet Holiday</h3>
            <blockquote className='blocquote'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero
              repellat quis consequatur
              ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
              repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
            </blockquote>
          </div>

        </div>
        <Button
          buttontype='btn1'
          className={styles.btnStories}
        > More Stories
        </Button>
      </div>


    </section>
  );
};

export default Stories;
