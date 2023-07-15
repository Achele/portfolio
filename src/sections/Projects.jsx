import { FaCss3, FaHtml5, FaVuejs, FaJsSquare, FaReact } from "react-icons/fa";
import Profile from "../assets/github.png";
import Netflix from "../assets/netflix.png";
import AchezMall from "../assets/mall.png";
import Scissor from "../assets/scissors.png";
import Smartlend from "../assets/smartlend.png";

const Projects = () => {
  return (
    <>
      <section className="bg-blue-400 bg-opacity-10" id="projects">
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
              href="https://smartlend-app.netlify.app"
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
              This profiler displays my github profile, followers, repositories
              and details of a single repo. The Github api was consumed to
              create app.
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

export default Projects;
