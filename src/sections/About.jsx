import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-8 px-16 lg:pl-32 w-4/5 lg:w-11/12">
      <p className="leading-8 py-4 text-lg">
        I am a software developer based in Abuja, Nigeria. I enjoy creating
        visually stunning and engaging web experiences. My passion for making
        things and the challenge of bringing a design concept to life motivate
        me and I am always looking for new ways to improve myself. Currently, am
        in the job market searching for my first developer job.
      </p>
      <ul className="flex">
        <li>
          <a
            href="https://twitter.com/ojoachele"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <FaTwitter className="mr-4 hover:text-pinkBtn" />{" "}
          </a>
        </li>
        <li>
          <a href="https://github.com/Achele">
            {" "}
            <FaGithub className="mr-4 hover:text-pinkBtn" />{" "}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/achele/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <FaLinkedin className="mr-4 hover:text-pinkBtn" />{" "}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default About;
