import React from 'react';
import Link from 'next/link';
import styles from '../styles/Photos.module.scss';
import {useRouter} from "next/router";

const Photos = () => {

  const router = useRouter();
  const handleButtonClick = () => {
    router.replace('/?section=about');
  }
  return (
    <div className={styles.photos}>
      Photos
      <Link href="/?section=about" scroll={true}>Linkt to Features </Link>
      <button onClick={handleButtonClick}>About</button>
    </div>
  );
};

export default Photos;
