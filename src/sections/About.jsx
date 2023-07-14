import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="aboutMe">
      <p>
        I am a software developer based in Abuja, Nigeria. I enjoy creating
        visually stunning and engaging web experiences. My passion for making
        things and the challenge of bringing a design concept to life motivate
        me and I am always looking for new ways to improve myself. Currently, am
        in the job market searching for my first developer job.
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
          <a href="https://github.com/Achele" rel="noreferrer" target="_blank">
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

export default About;
