import React from 'react';
import styles from '../styles/Photos.module.scss';
import Image from 'next/image'

const Photos = () => {

  return (
    <div className={styles.photosPage}>
      <div className={styles.headerSpace}> </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Photos
        </h2>
      </div>
      <div className={styles.photos}>
        <div className={styles.boxCross}>
          <div className={styles.imgBox}>
            <Image className={styles.image} src="/imgHs/hs1.jpg" alt="Picture of the author" layout='fill'/>
          </div>
        </div>
        <div className={styles.boxCross}>
          <div className={styles.imgBox}>
            <Image className={styles.image} src="/imgHs/hs2.jpg" alt="Picture of the author" layout='fill'/>
          </div>
        </div>
        <div className={styles.boxCross}>
          <div className={styles.imgBox}>
            <Image className={styles.image} src="/imgHs/hs3.jpg" alt="Picture of the author" layout='fill'/>
          </div>
        </div>
        <div className={styles.boxCross}>
          <div className={styles.imgBox}>
            <Image className={styles.image} src="/imgHs/hs4.jpg" alt="Picture of the author" layout='fill'/>
          </div>
        </div>
        <div className={styles.boxCross}>
          <div className={styles.imgBox}>
            <Image className={styles.image} src="/imgHs/hs5.jpg" alt="Picture of the author" layout='fill'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
