import React, { useState, useEffect } from "react";
import { RiShieldCrossFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import logo2 from "../../../assets/images/ic2.png";
import { FaCheck } from "react-icons/fa6";
import imageDoctor from "../../../assets/images/ab3.png"
const AchievementsSection: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 25) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 100); // سرعة زيادة الرقم (100ms بين كل زيادة)

    return () => clearInterval(interval); // لتنظيف الإنتربال بعد التدمير
  }, [count]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gradient-to-b from-white to-[#f1f7fb] mx-2 my-5 font-sans">
      {/* القسم الأول */}
      <div className="flex flex-col gap-7 items-start text-start m-7">
        <div>
          <RiShieldCrossFill className="text-4xl text-start md:text-6xl text-[#ffcc53] " />
        </div>
        <div className="mb-6">
          <h3 className="text-8xl  ">{count}+</h3>
          <p className="text-gray-950 w-50 text-xl">
            Years of Experience in the Medical Field.
          </p>
        </div>
        <div className="flex gap-3">
          <img src={logo2} alt="" className="w-5 m-auto " />
          <p className="text-gray-400">Welcome to Medicross Health Care Center</p>
        </div>
        <div>
            <h1 className="text-gray-950 text-5xl ">Empowering Healthier Lives Every Day, Your Path to Better Health Begins Here.</h1>
        </div>
      </div>

      {/* القسم الثاني */}
      <div className="flex flex-col items-center text-center mx-7" >
        <img
          src= {imageDoctor}
          alt="Placeholder"
          className=" "
        />
       
      </div>

      {/* القسم الثالث */}
      <div className="flex flex-col items-start text-start mx-7 my-7">
        <p className=" text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada porta sapien, in interdum urna commodo quis. Nulla eu neque eget velit maximus condimentum sit amet vitae nibh. Donec a nisi sit amet tortor suscipit rutrum a in ante. In et aliquam nunc. Nam lobortis facilisis bibendum. Nunc cursus sapien nisl, at pellentesque ipsum faucibus in. Suspendisse vitae ultricies ligula.</p>
        <p className="text-gray-400">Curabitur ut diam ipsum. Proin id lobortis est. In sit amet elementum diam, ac hendrerit libero. Proin condimentum condimentum finibus. Quisque et convallis sem, vel efficitur dolor. Mauris ultricies ullamcorper.</p>
<h1 className="flex gap-2 mt-8 text-xl"><FaCheck className="mt-1" />Friendly team you can call friends</h1>
<h1 className="flex gap-2  text-xl "><FaCheck className="mt-1" />We accept many insurance plans and offer discounts</h1>
<h1 className="flex gap-2 mb-8  text-xl"><FaCheck className="mt-1" />We use energy-saving and waste-reducing methods</h1>

        <button className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-xl text-xl mt-8 flex gap-3 ">

           View Our History Timeline  <FaArrowRight className="w-3 h-3 mt-2" />
        </button>
      </div>
    </div>
  );
};

export default AchievementsSection;
