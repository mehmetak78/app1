import React, {useState} from 'react';
import styles from '../styles/Photos.module.scss';
import Image from 'next/image'
import ModalPhotoDetail from "../components/ModalPhotoDetail";

const Photos = (props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgPath, setImgPath] = useState(null);


  const hideModalHandler = () => {
    setIsModalOpen(false);
  }

  const showModalHandler = (e) => {
    console.log(e.target.id);
    setImgPath(`/imgHs/${e.target.id}.jpg`);
    setIsModalOpen(true);
  }


  return (
    <div className={styles.photosPage}>
      {isModalOpen && <ModalPhotoDetail imgPath = {imgPath} onClose={hideModalHandler}/>}
      <div className={styles.headerSpace}> </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Photos
        </h2>
      </div>
      <div className={styles.photos}>
        <div className={styles.boxCross}>
          <div className={styles.imgBox}>
            <Image id='hs1' onClick={showModalHandler} className={styles.image} src="/imgHs/hs1.jpg" alt="Picture of the hotel" layout='fill'/>
          </div>
        </div>
        <div className={styles.boxCross}>
          <div className={styles.imgBox}>
            <Image id='hs2' onClick={showModalHandler} className={styles.image} src="/imgHs/hs2.jpg" alt="Picture of the hotel" layout='fill'/>
          </div>
        </div>
        <div className={styles.boxCross}>
          <div className={styles.imgBox}>
            <Image id='hs3' onClick={showModalHandler} className={styles.image} src="/imgHs/hs3.jpg" alt="Picture of the hotel" layout='fill'/>
          </div>
        </div>
        <div className={styles.boxCross}>
          <div className={styles.imgBox}>
            <Image id='hs4' onClick={showModalHandler} className={styles.image} src="/imgHs/hs4.jpg" alt="Picture of the hotel" layout='fill'/>
          </div>
        </div>
        <div className={styles.boxCross}>
          <div className={styles.imgBox}>
            <Image id='hs5' onClick={showModalHandler} className={styles.image} src="/imgHs/hs5.jpg" alt="Picture of the hotel" layout='fill'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
