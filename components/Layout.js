import React, {Component, useEffect, useRef, useState} from 'react';
import Header from "./Header";
import Home from "../pages";
import styles from "./Header.module.scss";
import {useRouter} from "next/router";


const Layout = (props) => {

    const router = useRouter();

    const homeSectionRef = useRef();
    const aboutSectionRef = useRef();
    const featuresSectionRef = useRef();
    const roomsSectionRef = useRef();
    const storiesSectionRef = useRef();
    const bookingSectionRef = useRef();
    const blogSectionRef = useRef();
    const footerSectionRef = useRef();

    const [y, setY] = useState(0);

    let path = router.pathname;

    const handleNavigation = (e) => {
        const window = e.currentTarget;
        /*        if (y > window.scrollY) {
                    console.log("scrolling up");
                } else if (y < window.scrollY) {
                    console.log("scrolling down");
                }*/
        setY(window.scrollY);
    };

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", (e) => handleNavigation(e));

    }, []);

    const handleSectionClick = (e) => {
        e.preventDefault();
        path = router.pathname;
        console.log(path)

        switch (e.target.id) {
            case 'home' :
                if (path === '/') {
                    homeSectionRef.current.scrollIntoView({behavior: 'smooth'});
                } else {
                    router.replace('/');
                }
                break;
            case 'about' :
                if (path === '/') {
                    aboutSectionRef.current.scrollIntoView({behavior: 'smooth'});
                } else {
                    router.replace('/?section=about');
                }
                break;
            case 'features' :
                if (path === '/') {
                    featuresSectionRef.current.scrollIntoView({behavior: 'smooth'});
                } else {
                    router.replace('/?section=features');
                }
                break;
            case 'rooms' :
                if (path === '/') {
                    roomsSectionRef.current.scrollIntoView({behavior: 'smooth'});
                } else {
                    router.replace('/?section=rooms');
                }
                break;
            case 'stories' :
                if (path === '/') {
                    storiesSectionRef.current.scrollIntoView({behavior: 'smooth'});
                } else {
                    router.replace('/?section=stories');
                }
                break;
            case 'booking' :
                if (path === '/') {
                    bookingSectionRef.current.scrollIntoView({behavior: 'smooth'});
                } else {
                    router.replace('/?section=booking');
                }
                break;
            case 'blog' :
                if (path === '/') {
                    blogSectionRef.current.scrollIntoView({behavior: 'smooth'});
                } else {
                    router.replace('/?section=blog');
                }
                break;
            case 'content' :
                if (path === '/') {
                    footerSectionRef.current.scrollIntoView({behavior: 'smooth'});
                } else {
                    router.replace('/?section=content');
                }
                break;
        }

    }

    const hideModalHandler = () => {
        setIsModalOpen(false);
    }

    const showModalHandler = () => {
        setIsModalOpen(true);
    }


    return (
        <div>
            <div ref={homeSectionRef}>
                <Header
                    handleSectionClick={handleSectionClick}
                    isScrolled={y > 50}
                />
            </div>
            {path === '/'
                ? <Home
                    homeSectionRef={homeSectionRef}
                    aboutSectionRef={aboutSectionRef}
                    featuresSectionRef ={featuresSectionRef}
                    roomsSectionRef={roomsSectionRef}
                    storiesSectionRef={storiesSectionRef}
                    bookingSectionRef={bookingSectionRef}
                    blogSectionRef={blogSectionRef}
                    footerSectionRef={footerSectionRef}>

                </Home>
                : props.children
            }
        </div>
    );
};

export default Layout;
