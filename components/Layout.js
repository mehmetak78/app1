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
    const [activeRef, setActiveRef] = useState(null);


    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
            console.log("scrolling up");
        } else if (y < window.scrollY) {
            console.log("scrolling down");
        }
        setY(window.scrollY);
        console.log(window.scrollY)
    };

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", (e) => handleNavigation(e));

    }, []);

    useEffect(() => {
        if (activeRef) {
            console.log(activeRef)
            activeRef.current.scrollIntoView({behavior: 'smooth'});
            console.log('Here')
            console.log(router.pathname)
        }

    }, [activeRef]);


    const handleSectionClick = (e) => {
        e.preventDefault();
        router.replace('/#features');
        switch (e.target.id) {

            case 'home' :
                //homeSectionRef.current.scrollIntoView({behavior: 'smooth'});
                setActiveRef(homeSectionRef);

                break;
            case 'about' :
                //aboutSectionRef.current.scrollIntoView({behavior: 'smooth'});
                setActiveRef(aboutSectionRef);

                break;
            case 'features' :
                featuresSectionRef.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 'rooms' :
                roomsSectionRef.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 'stories' :
                storiesSectionRef.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 'booking' :
                bookingSectionRef.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 'content' :
                footerSectionRef.current.scrollIntoView({behavior: 'smooth'});
                break;
        }

    }

    const childrenWithProps = React.Children.map(props.children, child => {
     //   if (child.type.name === 'Home') {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    homeSectionRef: homeSectionRef,
                    aboutSectionRef: aboutSectionRef,
                    featuresSectionRef:featuresSectionRef,
                    roomsSectionRef:roomsSectionRef,
                    storiesSectionRef:storiesSectionRef,
                    bookingSectionRef:bookingSectionRef,
                    blogSectionRef:blogSectionRef,
                    footerSectionRef:footerSectionRef
                });
   //         }
        }

        return child;
    });

    return (
        <div>
            <div ref={homeSectionRef}>
                <Header
                    handleSectionClick={handleSectionClick}
                    isScrolled={y <= 50}
                />
            </div>
            {/*            <Home
                homeSectionRef={homeSectionRef}
                aboutSectionRef={aboutSectionRef}
                featuresSectionRef={featuresSectionRef}
                roomsSectionRef={roomsSectionRef}
                storiesSectionRef={storiesSectionRef}
                bookingSectionRef={bookingSectionRef}
                blogSectionRef={blogSectionRef}
                footerSectionRef={footerSectionRef}
            />*/}

            {childrenWithProps}

        </div>
    );
};

export default Layout;
