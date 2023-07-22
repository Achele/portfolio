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
    <header className="flex items-center md:py-0    p-2 bg-white sticky top-0 shadow ">
      <h1 className="text-pinkBtn text-lg font-bold xs:px-4 lg:px-14 md:px-7">
        Achez
      </h1>

      <div
        className={`links ${
          display ? "visible" : "hidden"
        }  xs:fixed xs:py-4 xs:px-4 md:px-7 sm:static md:static md:items-center md:flex lg:static lg:flex lg:items-center lg:justify-between bottom-20 md:top-20 lg:top-20 left-0  bg-gray-200 bg-opacity-6 border-l border-gray-300 z-50  md:bg-white md:left-none  md:border-none md:z-0 lg:py-0 lg:px-7`}
      >
        <ul className="space-y-4 sm:flex  lg:flex lg:items-center md:ml-20 lg:ml-60">
          <li
            onClick={() => {
              setDisplay(true);
              scroll.scrollToTop();
            }}
          >
            <Link
              to="/"
              className={`${styles.navLinks} hidden items-center hover:text-pinkBtn lg:pb-0`}
            >
              <FaHome /> Home
            </Link>
          </li>

          <li
            onClick={() => {
              setDisplay(true);
              scroll.scrollToTop();
            }}
          >
            <Link
              to="/"
              className={`${styles.navLinks} flex items-center hover:text-pinkBtn lg:px-4`}
            >
              <FaHome />
              Home
            </Link>
          </li>

          <li
            onClick={() => {
              setDisplay(true);
              scroller.scrollTo("about", {
                smooth: true,
                offset: -80,
              });
            }}
          >
            <Link
              to="/"
              className={`${styles.navLinks} flex items-center hover:text-pinkBtn lg:px-4`}
            >
              <FaUser /> About
            </Link>
          </li>

          <li
            onClick={() => {
              setDisplay(true);
              scroller.scrollTo("skills", {
                smooth: true,
                offset: -80,
              });
            }}
          >
            <Link
              to="/"
              className={`${styles.navLinks} flex items-center hover:text-pinkBtn lg:px-4`}
            >
              <FaCode /> Skills
            </Link>
          </li>

          <li
            onClick={() => {
              setDisplay(true);
              scroller.scrollTo("projects", {
                smooth: true,
                offset: -80,
              });
            }}
          >
            <Link
              to="/"
              className={`${styles.navLinks} flex items-center hover:text-pinkBtn active:underline hover:underline lg:px-4`}
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
            className=" border  rounded-full px-4 py-1 bg-pinkBtn text-white hover:bg-primary lg:ml-60 md:ml-40"
          >
            Download CV
          </a>
        </div>
      </div>
      <button
        className={`${styles.mobileNav} xs:ml-56 `}
        onClick={handleDisplay}
        aria-expanded={display}
      ></button>
    </header>
  );
};

export default Navbar;
