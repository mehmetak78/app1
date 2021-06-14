import React from 'react';
import Link from 'next/link';
import styles from '../styles/Photos.module.scss';

const Photos = () => {
    return (
        <div className={styles.photos}>
            Photos
            <Link href="/#features" scroll={true}>Linkt to Features </Link>
        </div>
    );
};

export default Photos;