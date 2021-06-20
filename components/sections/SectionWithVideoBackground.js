import React, {Fragment} from 'react';
import styles from './SectionWithVideoBackground.module.scss';


const SectionWithVideoBackground = (props) => {
  return (
    <div className={styles.sectionWithVideoBackground}>
      <div className={styles.bgVideo}>
        <video className={styles["bgVideo__content"]} autoPlay muted loop>
          <source src="img/video.mp4" type="video/mp4"/>
          <source src="img/video.webm" type="video/webm"/>
          Your browser is not supported!
        </video>
      </div>
      <h1>Section With Video Background Sample</h1>
    </div>
  );
};

export default SectionWithVideoBackground;
