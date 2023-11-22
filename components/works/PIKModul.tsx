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
          Developed models of personnel movement at the construction site to optimize project completion time.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed an analytical system for accounting of construction deliveries for accuracy in meeting deadlines.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Optimized work with construction documents to reduce production time by 30%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Created flexible templates to speed up the design process by 25%.
        </li>
      </ul>
    </motion.div>
  );
};

export default PIKModul;
