import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Freelance = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Full Stack Developer
        <span className="text-textGreen tracking-wide">@Freelance</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2023 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led the development of a comprehensive MERN stack-based educational
          platform, transforming a Figma design into a fully functional website,
          optimized for responsive interaction across various devices.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented dynamic features for language learning, including an
          audio-based learning system, self-assessment quizzes, and engaging
          reading and writing exercises, catering specifically to Russian
          speakers learning Hebrew.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Played a key role in both frontend and backend development, ensuring a
          seamless user experience and efficient data management, culminating in
          the successful deployment of a robust and interactive language
          learning platform.
        </li>
      </ul>
    </motion.div>
  );
};

export default Freelance;
