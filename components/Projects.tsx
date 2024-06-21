import {
  courtImg,
  threadsImg,
  orderEatsImg,
} from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section
      id="project"
      className="max-w-container mx-auto my-12 lgl:px-20 py-24"
    >
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ============== */}
      <div className="flex flex-col xl:flex-row gap-6">
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href="https://order-eats-app.onrender.com/"
          target="_blank"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={orderEatsImg}
              alt="orderEatsImg"
            />
            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">Order Eats</h3>
          </div>
          <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            Order Eats is a{" "}
            <span className="text-textGreen">food-ordering platform</span> that
            provides users with a seamless and enjoyable experience. The app
            includes features like user authentication, restaurant management,
            cart operations, real-time order tracking, and more. We leverage
            modern technologies and frameworks to deliver a robust and scalable
            solution.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>ReactJS</li>
            <li>MongoDB</li>
            <li>TailwindCSS</li>
            <li>Shadcn/UI</li>
            <li>TypeScript</li>
            <li>Vite</li>
            <li>Stripe</li>
            <li>Auth0</li>
            <li>Cloudinary</li>
            <li>Render Deployment</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href="https://github.com/ilyanosovsky/food-ordering-platform"
              target="_blank"
            >
              <TbBrandGithub />
            </a>
            <a
              className="hover:text-textGreen duration-300"
              href="https://order-eats-app.onrender.com/"
              target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>
      {/* ============ project One End here ================== */}
      {/* ============ project Two Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://court-app.onrender.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={courtImg}
                alt="courtImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Court App</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              The Court web app allows players to find a tennis sparring partner
              on a court near you. A kind of{" "}
              <span className="text-textGreen">social network</span> for tennis
              players. Includes a map with courts, the ability to add to
              friends, create posts with the offer to play.{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>ReactJS</li>
              <li>Redux</li>
              <li>MongoDB</li>
              <li>NodeJS</li>
              <li>Cloudinary</li>
              <li>OnRender Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/ilyanosovsky/Court_App"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://court-app.onrender.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://threads-clone-five-lac.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={threadsImg}
                alt="threadsImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Social Media App</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              A web-based social media network inspired by Threads. This project
              offers a rich set of features allowing users to engage in a
              vibrant{" "}
              <span className="text-textGreen">social environment.</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>ReactJS</li>
              <li>MongoDB</li>
              <li>NodeJS</li>
              <li>JWT</li>
              <li>Vite</li>
              <li>Cloudinary</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/ilyanosovsky/threads-clone"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://threads-clone-five-lac.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
