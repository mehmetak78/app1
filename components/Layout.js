import React, {useEffect, useRef, useState} from 'react';
import Header from "./Header";
import Home from "../pages";
import styles from "./Header.module.scss";

const Layout = (props) => {

  const homeSectionRef = useRef();
  const aboutSectionRef = useRef();
  const blogSectionRef = useRef();
  const footerSectionRef = useRef();

  const [y, setY] = useState(0);

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


  const handleSectionClick = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case 'home' :
        homeSectionRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      case 'about' :
        aboutSectionRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      case 'blog' :
        blogSectionRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      case 'content' :
        footerSectionRef.current.scrollIntoView({behavior: 'smooth'});
        break;
    }
  }

  return (
    <div>
      <div ref={homeSectionRef}>
        <Header
          handleSectionClick={handleSectionClick}
          isScrolled={y <= 50}
        />
      </div>
      <Home
        homeSectionRef={homeSectionRef}
        aboutSectionRef={aboutSectionRef}
        blogSectionRef={blogSectionRef}
        footerSectionRef={footerSectionRef}
      />
    </div>
  );
};

export default Layout;
