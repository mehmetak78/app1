import React, {Fragment} from 'react';
import styles from './HeaderContent.module.scss';

const HeaderContent = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <a href="#section-tours" className="btn btn--white btn--animated">Discover Our Tours</a>
            </header>
            <div className={styles.textBox}>
                <span>Enjoy Your Dreams...</span>
            </div>
        </Fragment>
    );
};

export default HeaderContent;
