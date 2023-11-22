import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Inj2M = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Design Engineer
        <span className="text-textGreen tracking-wide">@INJ-2M</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2018 - Jun 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed a system for storing construction documents to optimize the delivery of the facility by 15%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Moved the company's employees to cloud services to improve communication with all customers.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Created flexible templates to speed up the design process by 25%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed a structured data storage system for all company facilities to save time searching for data.
        </li>
      </ul>
    </motion.div>
  );
};

export default Inj2M;
