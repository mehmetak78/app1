import React, {Fragment} from 'react';
import styles from './HeaderContent.module.scss';

const HeaderContent = (props) => {
    return (
        <Fragment>
            <header className={styles.header} />
            <div className={styles.textBox}>
                <span>Enjoy Your Dream Holiday...</span>
            </div>
        </Fragment>
    );
};

export default HeaderContent;
