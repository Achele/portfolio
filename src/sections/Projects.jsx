import { FaCss3, FaHtml5, FaVuejs, FaJsSquare, FaReact } from "react-icons/fa";
import Profile from "../assets/github.png";
import AchezMall from "../assets/mall.png";
import Scissor from "../assets/scissors.png";
import Smartlend from "../assets/smartlend.png";

const Projects = () => {
  return (
    <>
      <section className="bg-blue-400 bg-opacity-10 py-8 px-6" id="projects">
        <h1 className="font-bold uppercase py-4 pl-14 lg:mx-16">projects</h1>
        {/* <section className="projects"> */}
        <div className="w-4/5 lg:w-1/2 lg:mb-6 max-w-full h-full flex flex-col sm:flex-row  items-center justify-center shadow-md rounded-lg overflow-auto p-4 my-2 mx-auto bg-white">
          <img
            src={Smartlend}
            alt=""
            className="max-w-1/2 h-full border rounded w-80"
          />
          <div className="py-0 px-6">
            <h3 className="font-bold text-lg">Smartlend</h3>
            <div className="text-primary flex py-2">
              <FaHtml5 />
              <FaCss3 />
              <FaJsSquare />
              <FaReact />
            </div>

            <p className="items-center text-base">
              Smartlend is a loan prediction app that helps financial
              institutions decide who is best fit to get a loan without any
              interference and bias.
            </p>
            <div className="sm:flex gap-2 sm:flex-col lg:flex-row">
              <span>
                <a
                  href="https://smartlend-app.netlify.app"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white border rounded-full bg-pinkBtn py-1 px-4 md:text-xs md:px-1 sm:text-xs sm:mb-3 lg:px-4 lg:text-base hover:bg-primary hover:text-white"
                >
                  Live site
                </a>
              </span>
              <a
                href="https://github.com/Achele/scissor"
                rel="noreferrer"
                target="_blank"
                className="border-primary rounded-full text-primary border py-1 px-4 lg:px-4 sm:text-xs sm:px-0  sm:text-center sm:py-1 hover:bg-primary hover:text-white"
              >
                Repo
              </a>
            </div>
          </div>
        </div>

        <div className="w-4/5 lg:w-1/2 lg:mb-6 max-w-full h-full flex flex-col sm:flex-row  items-center justify-center shadow-md rounded-lg overflow-auto p-4 my-2 mx-auto bg-white">
          <img
            src={Scissor}
            alt=""
            className="max-w-1/2 h-full border rounded w-80"
          />
          <div className="py-0 px-6">
            <h3 className="font-bold text-lg">Scissor</h3>
            <div className="text-primary flex py-2">
              <FaHtml5 />
              <FaCss3 />
              <FaJsSquare />
              <FaReact />
            </div>

            <p className="items-center text-base">
              Scissor is a responsive web app that allows users to create an
              account, shorten long url, copy shortened link and get analytics
              of the created link.
            </p>
            <div className="sm:flex gap-2 sm:flex-col lg:flex-row">
              <span>
                <a
                  href="https://shortly-21c95.firebaseapp.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white border rounded-full bg-pinkBtn py-1 px-4 md:text-xs md:px-1 sm:text-xs sm:mb-3 lg:px-4 lg:text-base hover:bg-primary hover:text-white"
                >
                  Live site
                </a>
              </span>

              <a
                href="https://github.com/Achele/scissor"
                rel="noreferrer"
                target="_blank"
                className="border-primary rounded-full text-primary border py-1 px-4 lg:px-4 sm:text-xs sm:px-0  sm:text-center sm:py-1 hover:bg-primary hover:text-white"
              >
                Repo
              </a>
            </div>
          </div>
        </div>

        <div className="w-4/5 lg:w-1/2 lg:mb-6 max-w-full h-full flex flex-col sm:flex-row  items-center justify-center shadow-md rounded-lg overflow-auto p-4 my-2 mx-auto bg-white">
          <img
            src={AchezMall}
            alt=""
            className="max-w-1/2 h-full border rounded w-80"
          />
          <div className="py-0 px-6">
            <h3 className="font-bold text-lg">Achez Mall</h3>
            <div className="text-primary flex py-2">
              <FaHtml5 />
              <FaCss3 />
              <FaJsSquare />
              <FaVuejs />
            </div>

            <p className="items-center text-base">
              Achez mall is an online shopping store created with Vue, that
              consumes the dummyjson API and authenticates user with firebase
            </p>
            <div className="sm:flex gap-2 sm:flex-col lg:flex-row">
              <span>
                <a
                  href="https://achez-mall.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white border rounded-full bg-pinkBtn py-1 px-4 md:text-xs md:px-1 sm:text-xs sm:mb-3 lg:px-4 lg:text-base hover:bg-primary hover:text-white"
                >
                  Live site
                </a>
              </span>

              <a
                href="https://github.com/Achele/achez-mall"
                rel="noreferrer"
                target="_blank"
                className="border-primary rounded-full text-primary border py-1 px-4 lg:px-4 sm:text-xs sm:px-0  sm:text-center sm:py-1 hover:bg-primary hover:text-white"
              >
                Repo
              </a>
            </div>
          </div>
        </div>

        <div className="w-4/5 lg:w-1/2 lg:mb-6 max-w-full h-full flex flex-col sm:flex-row  items-center justify-center shadow-md rounded-lg overflow-auto p-4 my-2 mx-auto bg-white">
          <img
            src={Profile}
            alt=""
            className="max-w-1/2 h-full border rounded w-80"
          />
          <div className="py-0 px-6">
            <h3 className="font-bold text-lg">GitHub Profile</h3>
            <div className="text-primary flex py-2">
              <FaHtml5 />
              <FaCss3 />
              <FaJsSquare />
              <FaReact />
            </div>

            <p className="items-center text-base">
              This profiler displays my github profile, followers, repositories
              and details of a single repo. The Github api was consumed to
              create app.
            </p>
            <div className="sm:flex gap-2 sm:flex-col lg:flex-row">
              <span>
                <a
                  href="https://altschool-exam-achele.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white border rounded-full bg-pinkBtn py-1 px-4 md:text-xs md:px-1 sm:text-xs sm:mb-3 lg:px-4 lg:text-base hover:bg-primary hover:text-white"
                >
                  Live site
                </a>
              </span>
              <a
                href="https://github.com/Achele/Altschool-Exam"
                rel="noreferrer"
                target="_blank"
                className="border-primary rounded-full text-primary border py-1 px-4 lg:px-4 sm:text-xs sm:px-0  sm:text-center sm:py-1 hover:bg-primary hover:text-white"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* </main> */}
    </>
  );
};

export default Projects;
