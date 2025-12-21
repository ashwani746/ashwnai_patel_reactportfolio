import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 30,
    delaySpeed: 3000,
  });

  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-[#5f6570] to-[#9EA4B0]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 gap-8">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-white font-bold text-lg sm:text-xl">
            Hello, I'm
          </h2>

          <p className="text-ashwani font-bold text-4xl sm:text-5xl md:text-6xl">
            Ashwani Patel
          </p>

          <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl mt-2">
            a <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#ff014f" />
          </h2>

          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/ashwani-patel-36a534228/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-white font-bold bg-teal-500 px-6 py-3 rounded-md hover:scale-110 duration-300">
                Hire Me
              </button>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="bg-gradient-to-b from-teal-500 to-gray-600 rounded-full w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center">
          <img
            src="images/avtar.png"
            alt="Avatar"
            className="w-44 sm:w-52 md:w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
