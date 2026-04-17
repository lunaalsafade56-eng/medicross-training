import stars from"../../assets/images/sss.png"
import React from "react";
import Slider from "../../components/common/Slider";
import AppointmentForm from "../../features/appointments/components/AppointmentForm";
import ServiceDepartment from "../home/sections/ServiceDepartment"
import { homeContents } from "../../../src/data/contents/HomeContents";
import FindDoctor from "../home/sections/FindDoctor";
import CardsHome from"./sections/CardsHome";
import AchievementsSection from "../home/sections/AchievementsSection"
import FourCarousel from "../home/sections/FourCarousel";
import StepLine from "../home/sections/StepLine"
const Home: React.FC = () => {
  
  return (
    <>
      <div className="bg-[#0a263f] ">
        <Slider
        slides={homeContents.slides}
        renderSlider={(slide) => (
            <div className="w-full  flex flex-col md:flex-row  items-center ">
              <div className="w-300 flex flex-col md:w-1/2 justify-center items-center px-2 h-full text-left mb-4">
                <h1 className="text-xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white ">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-4xl mb-8 text-gray-200 max-w-2xl  ">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-2xl mb-8 text-gray-200 md:w-170 md:text-start w-100 text-center">
                  {slide.text}
                </p>
                <button className="bg-[#ffcc53]  hover:bg-yellow-200  text-gray-950 px-8 py-4 rounded-full text-lg font-semibold  transition-all duration-300 hover:scale-105">
                  <span>View All Services</span>
                </button>
              </div>
              <div className="w-full h-full md:w-1/2 bg-cover bg-center bg-no-repeat   ">
                <img
                  src={slide.img}
                  alt=""
                  className="w-300 h-150 md:h-125 object-cover rounded-3xl  overflow-hidden shadow-lg "
                />
              </div>
            </div>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
          <FindDoctor />
          <AppointmentForm />
        </div>
      
          <h2 className=" mt-5 xl:flex justify-center py-5 text-white grid grid-cols-1 text-center ">
            Ourpatientssay:Excellent<img src={stars} alt="stars" className="w-auto h-4 pt-1 xl:mx-3 m-auto flex justify-center " />OverallRating4.7/3285 reviewsonZocdoc 
          </h2>
        
      </div>
      <ServiceDepartment/>
     <AchievementsSection/>
      <div className="mx-3">
         <FourCarousel/>
  <CardsHome/>
 
  <StepLine/>
  </div>
    </>
  );
};

export default Home;
