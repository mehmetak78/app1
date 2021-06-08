import '../styles/globals.css';
import '../styles/main.scss';

import {Fragment} from "react";
import Header from "../components/Header";

function MyApp({Component, pageProps}) {
    return (
        <Fragment>

            <Component {...pageProps} />

        </Fragment>
    )
}

export default MyApp
