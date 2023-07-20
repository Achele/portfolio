import { useEffect, useState } from "react";
import { FaCode, FaHome, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const handleDisplay = () => {
    setDisplay(!display);
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
    <header className="flex items-center xs:justify-between lg:justify-around  p-2 bg-white sticky top-0 shadow ">
      <h1 className="text-pinkBtn font-bold">Achez</h1>
      {/* <nav
        className={`links ${
          display ? "visible" : "hidden"
        }  xs:fixed top-20  left-0  bg-blue-400 bg-opacity-6 border-l border-gray-300 z-50  md:bg-white md:left-none md:relative md:border-none md:z-0 `}
      > */}
      <div
        className={`links ${
          display ? "visible" : "hidden"
        }  xs:fixed xs:py-4 xs:px-4 lg:static lg:flex lg:items-center lg:justify-center bottom-20 md:top-20 lg:top-20 left-0  bg-gray-200 bg-opacity-6 border-l border-gray-300 z-50  md:bg-white md:left-none md:relative md:border-none md:z-0 `}
      >
        {/* <div className="flex flex-col items-center py-4"> */}
        <ul className="space-y-4 lg:flex lg:items-center ">
          <li
            onClick={() => {
              setDisplay(true);
              scroll.scrollToTop();
            }}
          >
            <Link
              to="/"
              className={`${styles.navLinks} flex items-center hover:text-pinkBtn`}
            >
              <FaHome /> Home
            </Link>
          </li>

          <li
            onClick={() => {
              setDisplay(true);
              scroller.scrollTo("about", {
                smooth: true,
                offset: -80, // adjust the offset according to your needs
              });
            }}
          >
            <Link
              to="/"
              className={`${styles.navLinks} flex items-center hover:text-pinkBtn`}
            >
              <FaUser /> About
            </Link>
          </li>

          <li
            onClick={() => {
              setDisplay(true);
              scroller.scrollTo("skills", {
                smooth: true,
                offset: -80, // adjust the offset according to your needs
              });
            }}
          >
            <Link
              to="/"
              className={`${styles.navLinks} flex items-center hover:text-pinkBtn`}
            >
              <FaCode /> Skills
            </Link>
          </li>

          <li
            onClick={() => {
              setDisplay(true);
              scroller.scrollTo("projects", {
                smooth: true,
                offset: -80, // adjust the offset according to your needs
              });
            }}
          >
            <Link
              to="/"
              className={`${styles.navLinks} flex items-center hover:text-pinkBtn active:underline hover:underline`}
            >
              <FaShoppingBag /> Projects
            </Link>
          </li>
        </ul>
        <div>
          <a
            href="https://drive.google.com/file/d/1Z0LsVdzbN2qKeCxZ-VgYtUQ1fpm396-h/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-primary border border-primary rounded-full px-4 py-1 hover:bg-primary hover:text-white"
          >
            Download CV
          </a>
        </div>
        {/* </div> */}
      </div>
      <button
        className={styles.mobileNav}
        onClick={handleDisplay}
        aria-expanded={display}
      ></button>
      {/* </nav> */}
    </header>
  );
};

export default Navbar;
