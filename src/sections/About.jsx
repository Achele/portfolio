import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-8 px-16 lg:pl-32 w-4/5 lg:w-11/12">
      {/* <p className="leading-8 py-4 text-lg">
        I am a skilled software developer, dedicated to crafting visually
        stunning and captivating web experiences. Collaborating with talented
        individuals and teams to bring ideas to life and deliver exceptional
        digital solutions is what truly motivates me. My journey as a developer
        has been fueled by a deep love for turning imaginative designs into
        tangible realities. This constant drive to innovate and create has led
        me to continually seek new ways to enhance my skills and stay ahead in
        the fast-paced world of technology. I am currently on the lookout for
        exciting opportunities where I can apply my expertise and contribute to
        meaningful projects.
      </p> */}
      <p className="leading-8 py-4 text-lg">
        I am a skilled software developer, dedicated to crafting visually
        stunning and engaging web experiences. With a proven track record of
        collaborating with talented individuals and teams, I thrive on
        transforming ideas into exceptional digital solutions.
      </p>
      <p className="leading-8 py-4 text-lg">
        My journey as a developer has been fueled by a deep love for turning
        imaginative designs into tangible realities. Constantly seeking new ways
        to improve and grow, I am open to exciting opportunities that allow me
        to make a real impact in the digital world.
      </p>
      <p className="leading-8 py-4 text-lg">
        If you're looking for a dedicated and innovative developer, I am ready
        to embark on fresh challenges and bring your projects to life!
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
