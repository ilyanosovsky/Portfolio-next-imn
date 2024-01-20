import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const PIKModul = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Data Analyst
        <span className="text-textGreen tracking-wide">@PIK-Modul</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2021 - Apr 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented end-to-end features using React for the front end and
          Flask/NodeJS for the backend, contributing to the development of
          comprehensive solutions at a leading building construction company.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated closely with cross-functional teams to design and
          implement scalable backend services, enhancing the overall
          functionality and performance of the company's web applications.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Employed Python and JavaScript to develop server-side logic, ensuring
          seamless communication between the front and back end for a cohesive
          user experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Actively participated in the full software development lifecycle, from
          conceptualization to deployment, while continually expanding skills in
          both frontend and backend technologies.
        </li>
      </ul>
    </motion.div>
  );
};

export default PIKModul;
