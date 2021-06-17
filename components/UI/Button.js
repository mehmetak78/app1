import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {

    let buttonClasses;

    switch (props.btnType) {
        case 'btn1' : buttonClasses = `${styles.btn1} ${props.className}`; break;
    }

    const btnProps = {...props, className:buttonClasses}

    return (
        <button {...btnProps} >
            {props.children}
        </button>
    );
};

export default Button;