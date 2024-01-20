import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ConsultantAI = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Full Stack Developer
        <span className="text-textGreen tracking-wide">@ConsultantAI</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sep 2023 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrated JIRA software seamlessly into the platform, empowering
          users to efficiently manage project workflows and track issues,
          thereby enhancing overall project coordination and collaboration.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Enhanced user experience by resolving style and grid issues for both
          mobile and desktop versions of the platform at Consultant.ai,
          resulting in improved visual consistency and responsiveness.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Optimized the efficiency and aesthetics of the profile page, driving a
          cleaner and more user-friendly interface, leading to increased user
          satisfaction and engagement.
        </li>
      </ul>
    </motion.div>
  );
};

export default ConsultantAI;
