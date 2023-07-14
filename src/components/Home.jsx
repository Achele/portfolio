import {
  FaHome,
  FaShoppingBag,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaUser,
  FaCode,
  FaCss3,
  FaHtml5,
  FaVuejs,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import styles from "../styles/Home.module.css";
import { useState } from "react";
// import { NavHashLink } from "react-router-hash-link";
import Profile from "../assets/github.png";
import Netflix from "../assets/netflix.png";
import AchezMall from "../assets/mall.png";
import Scissor from "../assets/scissors.png";
import Smartlend from "../assets/smartlend.png";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";

const Home = () => {
  const Navbar = () => {
    const [display, setDisplay] = useState(false);
    const handleDisplay = () => {
      setDisplay(!display);
      scroll.scrollToTop();
    };

    return (
      <nav className={styles.nav}>
        <h1 className={styles.navTitle}>Achez</h1>
        <ul className={styles.navUl} data-visible={display}>
          <li
            onClick={() => {
              setDisplay(false);
              scroll.scrollToTop();
            }}
          >
            <Link to="/" className={styles.navTitle}>
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
        </ul>
        <div className={styles.btnWrapper}>
          <button
            className={styles.mobileNav}
            onClick={handleDisplay}
            aria-expanded={display}
          ></button>
        </div>
      </nav>
    );
  };
  const About = () => {
    return (
      <section id="about" className="aboutMe">
        <p>
          I am a software developer based in Abuja, Nigeria. I enjoy creating
          visually stunning and engaging web experiences. My passion for making
          things and the challenge of bringing a design concept to life motivate
          me and I am always looking for new ways to improve myself. Currently,
          am in the job market searching for my first developer job.
        </p>
        <ul className="socials">
          <li>
            <a
              href="https://twitter.com/ojoachele"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <FaTwitter />{" "}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Achele"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <FaGithub />{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/achele/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <FaLinkedin />{" "}
            </a>
          </li>
        </ul>
      </section>
    );
  };
  const Skills = () => {
    return (
      <section className="w-1/2 my-4 mx-auto">
        <ul className="grid grid-cols-4 gap-4">
          <li className="border rounded text-center ">Html</li>
          <li className="border rounded text-center ">Css</li>
          <li className="border rounded text-center ">JavaScript</li>
          <li className="border rounded text-center ">React</li>
          <li className="border rounded text-center ">Git</li>
          <li className="border rounded text-center ">VueJs</li>
          <li className="border rounded text-center ">Team work</li>
          <li className="border rounded text-center w-full">Communication</li>
        </ul>
      </section>
    );
  };

  const Projects = () => {
    return (
      <>
        <section className="bg-blue-400 bg-opacity-10">
          <h1>projects</h1>
          {/* <section className="projects"> */}
          <div className="flex w-4/5 border rounded max-w-full h-full flex-col sm:flex-row items-center justify-center px-4 my-2 mx-auto bg-white">
            <img
              src={Smartlend}
              alt=""
              className="max-w-1/2 h-full border rounded w-80"
            />
            <div className="project-details">
              <h3 className="font-bold">Smartlend</h3>
              <div className="text-primary flex">
                <FaHtml5 />
                <FaCss3 />
                <FaJsSquare />
                <FaReact />
              </div>

              <p>
                Smartlend is a loan prediction app that helps financial
                institutions decide who is best fit to get a loan without any
                interference and bias.
              </p>
              <a
                href="https://smartlend-app.netlify.app/dashboard"
                rel="noreferrer"
                target="_blank"
                className="text-white border rounded-full bg-pinkBtn py-1 px-4"
              >
                Live site
              </a>
              <a
                href="https://github.com/Achele/scissor"
                rel="noreferrer"
                target="_blank"
                className="border-primary rounded-full text-primary border py-1 px-4 "
              >
                Repo
              </a>
            </div>
          </div>

          <div className="flex w-4/5 border rounded max-w-full h-full flex-col sm:flex-row items-center justify-center px-4 my-2 mx-auto bg-white">
            <img
              src={Scissor}
              alt=""
              className="max-w-1/2 h-full border rounded w-80"
            />
            <div className="project-details">
              <h3 className="font-bold">Scissor</h3>
              <div className="text-primary flex">
                <FaHtml5 />
                <FaCss3 />
                <FaJsSquare />
                <FaReact />
              </div>

              <p>
                Scissor is a responsive web app that allows users to create an
                account, shorten long url, copy shortened link and get analytics
                of the created link.
              </p>
              <a
                href="https://shortly-21c95.firebaseapp.com/"
                rel="noreferrer"
                target="_blank"
                className="text-white border rounded-full bg-pinkBtn py-1 px-4"
              >
                Live site
              </a>
              <a
                href="https://github.com/Achele/scissor"
                rel="noreferrer"
                target="_blank"
                className="border-primary rounded-full text-primary border py-1 px-4 "
              >
                Repo
              </a>
            </div>
          </div>

          <div className="flex w-4/5 border rounded max-w-full h-full flex-col sm:flex-row items-center justify-center px-4 my-2 mx-auto bg-white">
            <img
              src={AchezMall}
              alt=""
              className="max-w-1/2 h-full border rounded w-80"
            />
            <div className="project-details">
              <h3 className="font-bold">Achez Mall</h3>
              <div className="text-primary flex">
                <FaHtml5 />
                <FaCss3 />
                <FaJsSquare />
                <FaVuejs />
              </div>

              <p>
                Achez mall is an online shopping store created with Vue, that
                consumes the dummyjson API and authenticates user with firebase
              </p>
              <a
                href="https://achez-mall.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="text-white border rounded-full bg-pinkBtn py-1 px-4"
              >
                Live site
              </a>
              <a
                href="https://github.com/Achele/achez-mall"
                rel="noreferrer"
                target="_blank"
                className="border-primary rounded-full text-primary border py-1 px-4 "
              >
                Repo
              </a>
            </div>
          </div>

          <div className="flex w-4/5 border rounded max-w-full h-full flex-col sm:flex-row items-center justify-center px-4 my-2 mx-auto bg-white">
            <img
              src={Profile}
              alt=""
              className="max-w-1/2 h-full border rounded w-80"
            />
            <div className="project-details">
              <h3>GitHub Profile</h3>
              <div className="text-primary">
                <FaHtml5 />
                <FaCss3 />
                <FaJsSquare />
                <FaReact />
              </div>

              <p>
                This profiler displays my github profile, followers,
                repositories and details of a single repo. The Github api was
                consumed to create app.
              </p>
              <a
                href="https://altschool-exam-achele.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className="text-white border rounded-full bg-pinkBtn py-1 px-4"
              >
                Live site
              </a>
              <a
                href="https://github.com/Achele/Altschool-Exam"
                rel="noreferrer"
                target="_blank"
                className="border-primary rounded-full text-primary border py-1 px-4 "
              >
                Repo
              </a>
            </div>
          </div>

          <div className="flex w-4/5 border rounded max-w-full h-full flex-col sm:flex-row items-center justify-center px-4 my-2 mx-auto bg-white">
            <img
              src={Netflix}
              alt=""
              className="max-w-1/2 h-full border rounded w-80"
            />
            <div className="project-details">
              <h3 className="text-bold">Netflix Clone</h3>
              <div className="text-primary flex">
                <FaHtml5 />
                <FaCss3 />
              </div>

              <p>A clone of Netflix landing page</p>
              <a
                href="https://netfl-clone.netlify.app/?"
                rel="noreferrer"
                target="_blank"
                className="text-white border rounded-full bg-pinkBtn py-1 px-4"
              >
                Live site
              </a>
              <a
                href="https://github.com/Achele/Netflix-Landing-page"
                rel="noreferrer"
                target="_blank"
                className="border-primary rounded-full text-primary border py-1 px-4 "
              >
                Repo
              </a>
            </div>
          </div>
        </section>
        {/* </main> */}
      </>
    );
  };

  const Footer = () => {
    return (
      <footer className="bg-primary text-white py-8 px-4">
        <p> &copy; 2023 Ojoachele Onuh. All rights reserved</p>
      </footer>
    );
  };
  return (
    <>
      <section className={styles.aboutMe} id="#home">
        <article className={styles.heroText}>
          <h1>hello, i am</h1>
          <span>Ojoachele onuh</span>
          <p>Frontend web designer | developer</p>
        </article>
      </section>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
