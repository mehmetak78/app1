import React from 'react';
import styles from './ModalPhotoDetail.module.scss';

const ModalPhotoDetail = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div className={styles.modal}>
                <Image
                    className={styles.image}
                    src={props.imgPath}
                    alt="Picture of the hotel"
                    /*width={20} height={20}*/
                    layout='fill'
                    onClick={props.onClose}
                />
            </div>
        </Modal>
    );
};
import Modal from "./UI/Modal";


import Image from "next/image";

export default ModalPhotoDetail;