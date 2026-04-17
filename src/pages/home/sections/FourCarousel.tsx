import React, { useEffect, useState } from "react";

import image1 from "../../../assets/images/h5-4.webp";
import { CiSaveDown1 } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { GiQueenCrown } from "react-icons/gi";
import { IoMdStats } from "react-icons/io";

type Card = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
};

const originalCards: Card[] = [
  {
    id: 1,
    title: "Customer Focused",
    description:
      "Duis sed neque vitae est ullamcorper pulvinar vitae et erat. Vestibulum sed nunc neque hendrerit.",
    icon: GoPerson,
  },
  {
    id: 2,
    title: "Industry Certified",
    description:
      "Duis sed neque vitae est ullamcorper pulvinar vitae et erat. Vestibulum sed nunc neque hendrerit.",
    icon: GiQueenCrown,
  },
  {
    id: 3,
    title: "Pathology Analysis",
    description:
      "Duis sed neque vitae est ullamcorper pulvinar vitae et erat. Vestibulum sed nunc neque hendrerit.",
    icon: IoMdStats,
  },
  {
    id: 4,
    title: "Experience and Expertise",
    description:
      "Duis sed neque vitae est ullamcorper pulvinar vitae et erat. Vestibulum sed nunc neque hendrerit.",
    icon: CiSaveDown1,
  },
];

function FourCarousel() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  // responsive
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // نكرر الكروت لعمل loop
  const cards = [...originalCards, ...originalCards];

  return (
    <div className="py-20 px-10 text-white text-center rounded-xl my-3  bg-[#033b61]">
      <h3 className="text-3xl w-auto md:text-center flex justify-center m-auto font-semibold mb-10">
        Medicross have the best doctors, the best nurses, the best conditions,
        the best medical technology, the best medical breakthrough drugs in the
        world.
      </h3>

      {/* Slider */}
      <div className="overflow-hidden px-4 mb-5">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
          }}
        >
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <div
                key={i}
                className={`p-2 ${
                  visibleCount === 1 ? "min-w-full" : "min-w-[33.333%]"
                }`}
              >
                <div className=" text-white   p-6 text-center group">
                  {/* Icon */}
                  <div className="w-20 h-20 flex items-center justify-center hover:bg-[#ffcc53]  mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-xl">
                    <Icon className="text-2xl  hover:text-black duration-300  transition-all hover:-translate-y-2 ease-in-out" />
                  </div>

                  <h3 className="text-3xl font-semibold">{card.title}</h3>

                  <p className="text-[#b3c0ce] mt-3">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-4 mt-8">
        {originalCards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="relative flex items-center justify-center w-6 h-6"
          >
            {/* الدائرة الخارجية */}
            <span
              className={`absolute w-6 h-6 rounded-full border-2 transition ${
                activeIndex === i ? "border-white" : "border-transparent"
              }`}
            />

            {/* النقطة */}
            <span
              className={`w-2.5 h-2.5 rounded-full transition ${
                activeIndex === i ? "bg-[#ffcc53] " : "bg-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
      {/* صوره فوقها زر  */}
      <div className="relative ">
        <img src={image1} alt="" className="h-100 w-full rounded-2xl mt-10 " />

            <div className="absolute inset-0 w-20 h-20 bg-white rounded-full flex items-center m-auto justify-center shadow-md cursor-pointer hover:scale-110 transition hover:-translate-y-2">
      <div className="w-0 h-0 border-t-15 border-t-transparent border-b-15 border-b-transparent border-l-20 border-l-black ml-1.5" />
    </div>
        </div>
    
    </div>
  );
}

export default FourCarousel;
