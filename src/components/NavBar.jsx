import { useEffect, useState } from "react";
import { FaCode, FaHome, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const handleDisplay = () => {
    setDisplay(!display);
    // scroll.scrollToTop();
  };

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 640) {
        setDisplay(false);
      } else {
        setDisplay(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav className={styles.nav}>
      <h1 className={styles.navTitle}>Achez</h1>
      <ul className={`links ${display ? "visible" : "hidden"} `}>
        <li
          onClick={() => {
            setDisplay(false);
            scroll.scrollToTop();
          }}
        >
          <Link to="/" className={styles.navLinks}>
            <FaHome /> Home
          </Link>
        </li>

        <li
          onClick={() => {
            setDisplay(false);
            scroller.scrollTo("about", {
              smooth: true,
              offset: -80, // adjust the offset according to your needs
            });
          }}
        >
          <Link to="/" className={styles.navLinks}>
            <FaUser /> About
          </Link>
        </li>

        <li
          onClick={() => {
            setDisplay(false);
            scroller.scrollTo("skills", {
              smooth: true,
              offset: -80, // adjust the offset according to your needs
            });
          }}
        >
          <Link to="/" className={styles.navLinks}>
            <FaCode /> Skills
          </Link>
        </li>

        <li
          onClick={() => {
            setDisplay(false);
            scroller.scrollTo("projects", {
              smooth: true,
              offset: -80, // adjust the offset according to your needs
            });
          }}
        >
          <Link to="/" className={styles.navLinks}>
            <FaShoppingBag /> Projects
          </Link>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1Z0LsVdzbN2qKeCxZ-VgYtUQ1fpm396-h/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </li>
      </ul>
      <div>
        <button
          className={styles.mobileNav}
          onClick={handleDisplay}
          aria-expanded={display}
        ></button>
      </div>
    </nav>
  );
};

export default Navbar;
