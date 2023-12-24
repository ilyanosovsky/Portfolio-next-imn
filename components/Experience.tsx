import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Inj2M from "./works/Inj2M";
import PIKModul from "./works/PIKModul";
import ConsultantAI from "./works/ConsultantAI";
import Freelance from "./works/Freelance";

const Experience = () => {
  const [workConsultantAI, setWorkConsultantAI] = useState(true);
  const [workPIKModul, setWorkPIKModul] = useState(false);
  const [workInj2M, setWorkInj2M] = useState(false);
  const [workFreelance, setWorkFreelance] = useState(false);

  const handleConsultantAI = () => {
    setWorkConsultantAI(true);
    setWorkPIKModul(false);
    setWorkInj2M(false);
    setWorkFreelance(false);
  };

  const handlePIKModul = () => {
    setWorkConsultantAI(false);
    setWorkPIKModul(true);
    setWorkInj2M(false);
    setWorkFreelance(false);
  };

  const handleInj2M = () => {
    setWorkConsultantAI(false);
    setWorkPIKModul(false);
    setWorkInj2M(true);
    setWorkFreelance(false);
  };
  const handleFreelance = () => {
    setWorkConsultantAI(false);
    setWorkPIKModul(false);
    setWorkInj2M(false);
    setWorkFreelance(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto my-12 py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-50 flex flex-col">
          <li
            onClick={handleConsultantAI}
            className={`${
              workConsultantAI
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            ConsultantAI
          </li>
          <li
            onClick={handleFreelance}
            className={`${
              workFreelance
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Freelance
          </li>
          <li
            onClick={handlePIKModul}
            className={`${
              workPIKModul
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            PIK-Modul
          </li>
          <li
            onClick={handleInj2M}
            className={`${
              workInj2M
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            INJ-2M
          </li>
        </ul>
        {workConsultantAI && <ConsultantAI />}
        {workPIKModul && <PIKModul />}
        {workInj2M && <Inj2M />}
        {workFreelance && <Freelance />}
      </div>
    </section>
  );
};

export default Experience;
