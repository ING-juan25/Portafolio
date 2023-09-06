import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home">
      <img
        className="w-full h-screen object-cover opacity-[30%]"
        src="/public/images/home.jpg"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold mx-2 text-gray-800">
            I'm Juan Cárcamo
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={["Developer", 2000, "Coder", 2000]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "2em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-around  pt-6 max-w-[200px] w-full mt-2">
            <FaTwitter />
            <FaFacebook />
            <FaLinkedinIn />
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
