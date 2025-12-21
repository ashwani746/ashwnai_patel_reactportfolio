import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div
      name="experience"
      className="w-full h-full bg-gradient-to-b from-[#5f6570] to-[#9EA4B0]  text-white"
    >
      <div className="w-full flex gap-20 justify-evenly px-24 max-[950px]:flex-col">
        <div>
          <div className="py-6 font-titleFont flex flex-col ">
            <h2 className="text-3xl md:text-4xl font-bold ">Education </h2>
            <p className="text-sm text-ashwani tracking-[4px]">2014 - 2022</p>
          </div>
          <div className="mt-6 w-full h-auto border-l-[6px] border-l-gray-500 border-opacity-30 flex flex-col">
            <EducationCard
              title="B.Tech (Computer Science & Engineering)"
              subTitle="Veer Bahadur Singh Purvanchal University Jaunpur(2018 - 2022)"
              result="Percentage: 72.08%"
            />
            <EducationCard
              title="Joint Entrance Examination (Main) | India"
              subTitle="PCM (2016 - 2017)"
              result="Marks: 120/360"
            />
            <EducationCard
              title="12th Senior Secondary Examination"
              subTitle="Little Flower House ,Kakarmatta Varanasi(2015 - 2016)"
              result="Percentage: 65.8%"
            />
            <EducationCard
              title="10th Higher Secondary Examination"
              subTitle="Oasis Public School,Varanasi (2013 - 2014)"
              result="Percentage: 85.5%"
            />
          </div>
        </div>
        {/* part Two */}

        <div>
          <div className="py-6  font-titleFont flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold ">Experience</h2>
            <p className="text-sm text-ashwani tracking-[4px]">
              Sept-2022 - Present
            </p>
          </div>
          <div className="mt-6 w-full h-auto border-l-[6px] border-l-gray-500 border-opacity-30 flex flex-col ">
            
            <EducationCard
              title="Web Development (Developer)"
              subTitle="THZ Publisherverse Pvt. Ltd / Argasia Education Pvt Ltd (Sept-2024 - Nov-2025)"
              result="Noida"
            />

            <EducationCard
              title="Business Development Associate (BDA)"
              subTitle="Byju's(Dec-2023 - June-2024)"
              result="Noida"
            />

            <EducationCard
              title="Software Developer Intern"
              subTitle="Ducat Training School- (May-2023 - Oct-2023)"
              result="Noida"
            />
             <EducationCard
              title="Frontend Developer"
              subTitle="Internship- BharatTech(sept-2022 - feb-2023)"
              result="Lucknow"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
