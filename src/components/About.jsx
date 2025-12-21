import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-[#9EA4B0] to-[#5f6570] text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center min-h-screen">
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image */}
          <div className="bg-gradient-to-b from-teal-500 to-gray-600 rounded-full w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 flex items-center justify-center">
            <img
              src="images/pic.png"
              alt="Avatar"
              className="w-40 sm:w-48 md:w-56"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-200 text-justify leading-relaxed">
              <span className="font-semibold">Hi,</span>
              <br />
              I am a passionate software developer with expertise across modern
              web technologies. From HTML, CSS, and JavaScript to frameworks like
              React and Next.js, I build seamless and responsive digital
              experiences. I work with Node.js for backend development and MySQL
              for efficient data management.
              <br /><br />
              I enjoy crafting user-friendly interfaces, architecting scalable
              applications, and designing optimized databases. I continuously
              learn, adapt, and push boundaries in the ever-evolving tech world.
              <br /><br />
              <span className="font-semibold text-gray-300">
                Thank you!
              </span>
            </p>

            {/* Resume Button */}
            <div className="mt-4">
              <a href="/" target="_blank" rel="noreferrer">
                <button className="text-white font-bold bg-teal-500 px-5 py-2 rounded-md hover:scale-110 duration-300">
                  Resume
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
