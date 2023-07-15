import {
  FaAccessibleIcon,
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section className="w-3/4 my-4 mx-auto">
      <h1 className="font-bold py-4">SKILLS</h1>
      <ul className="grid grid-cols-4 gap-4">
        <li className=" ">
          <FaHtml5 className="text-red-500 w-12 text-xl" /> HTML5
        </li>
        <li>
          <FaCss3 className="text-blue-500 w-12 text-2xl" /> CSS3
        </li>
        <li>
          <FaJsSquare className="text-yellow-500 w-14 text-2xl" />
          JavaScript
        </li>
        <li>
          <FaReact className="text-green-300 w-12 text-2xl" /> ReactJs
        </li>
        <li>
          <FaGit className="w-12 text-2xl" /> Git
        </li>
        <li>
          <FaVuejs className="text-green-500 w-12 text-2xl" /> VueJs
        </li>
        <li>
          <FaGithub className="w-12 text-2xl" /> GitHub
        </li>
        <li>
          <FaAccessibleIcon className="w-12 text-2xl" /> Accessibility
        </li>
        {/* <li>Rest API </li> */}
      </ul>
    </section>
  );
};

export default Skills;
