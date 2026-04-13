import Service1 from "../../../assets/images/Service1.png"
import Service2 from "../../../assets/images/Service2.png"
import Service3 from "../../../assets/images/Service3.png"
import Service4 from "../../../assets/images/Service4.png"
import Service5 from "../../../assets/images/Service5.png"
import Service6 from "../../../assets/images/Service6.png"
import logo2 from "../../../assets/images/ic2.png";
import React, { useState } from 'react';
import {
  FiArrowLeft,
  FiArrowRight,

} from "react-icons/fi";
type Card = {
  id: number;
 icon: string;
 number: string;
 title: string;
 description: string;
};

const cardsData: Card[] = [
 {
      id: 1,
      icon: Service1,
      number: "01",
      title: "Dental Care",
      description:
        " Medicenter offers comprehensive dental care for both adults and children from our office at Toronto. ",
    },
  {
       id: 2,
       icon:  Service2,
       number: "02",
       title: "Pharmacology",
       description:
         " Medicenter offers comprehensive dental care for both adults and children from our office at Toronto. ",
     },
     {
       id: 3,
       icon:  Service3,
       number: "03",
       title: "Orthopedics",
       description: " Medicenter offers comprehensive dental care for both adults and children from our office at Toronto. ",
     },
     {
       id: 4,
       icon:  Service4,
       number: "04",
       title: "Hematology",
       description:" Medicenter offers comprehensive dental care for both adults and children from our office at Toronto. ",
     },
     {
       id: 5,
       icon:  Service5,
       number: "05",
       title: "Neurology",
       description:
         " Medicenter offers comprehensive dental care for both adults and children from our office at Toronto. ",
     },
     {
       id: 6,
       icon: Service6,
       number: "06",
       title: "Cardiomyopathy",
       description:
         " Medicenter offers comprehensive dental care for both adults and children from our office at Toronto. ",
     },
];

const App: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);

  // دالة للانتقال إلى الكاردات التالية
  const handleNextClick = () => {
    //  setSwipeDirection('next');
    setStartIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  // دالة للرجوع إلى الكاردات السابقة
  const handlePrevClick = () => {
    //  setSwipeDirection('prev');
    setStartIndex((prevIndex) =>
      prevIndex - 1 < 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  // تحديد الكاردات المعروضة بناءً على startIndex
  const displayedCards = [
    cardsData[(startIndex) % cardsData.length],
    cardsData[(startIndex + 1) % cardsData.length],
    cardsData[(startIndex + 2) % cardsData.length],
  ];
//   const[swipeDirection,setSwipeDirection]=useState<string>('');
// const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div>
    <div className="text-center pt-20 ">
         <img src={logo2} alt="" className="w-10 m-auto pb-4 " />
         <p className="text-lg w-50 m-auto">We Provide the Best Service for your Health </p>
         <h1 className="text-2xl md:text-6xl pt-5  pb-5 text-gray-950">
           Our Practice Areas and Expertise
         </h1>
         <p className="m-auto w-90 pb-8">
           The healthcare arena there was a felt need of developing new as well
           as upgrading the existing functioning and processes.
         </p>
       </div>
    <div className="p-2 m-0 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {displayedCards.map((card) => (
          <div
            key={card.id}
            className="bg-white border transition-transform  border-gray-200 py-8 px-8 h-auto transform duration-300 ease-in-out rounded-3xl shadow-lg hover:-translate-y-3 "
          >
            <div className="flex justify-between " // عند الماوس يخرج من الكارد، يعود لوضعه
             >

            <img src={card.icon} alt="logo" className="mb-4"  />
            <span className="w-10 h-10 rounded-full border text-center  hover:text-white pt-1.5 mt-5 hover:bg-[#09243c]  border-gray-200 ">{card.number}</span>
            </div>
            <h3 className="text-2xl ">{card.title}</h3>
            <p className="text-gray-600 mt-5">{card.description}</p>
            <div className="flex justify-between  pt-4 border text-center hover:text-white p-4 mt-5 hover:bg-[#09243c]  border-gray-200 rounded-2xl">
                <button className="">Rrad More</button>
                 <FiArrowRight className="h-8 w-7"/>
            </div>
          </div>
        ))}
      </div>
   
      <div className="mt-10 flex justify-center gap-5">
        {/* زر العودة */}
        <button
          onClick={handlePrevClick}
      className="w-20 h-20  rounded-full p-0 bg-[#09243c]  backdrop-blur-xl   shadow-xl"
        >
        < FiArrowLeft className="w-7 h-8 flex justify-center m-auto  text-white"/>
  
        </button>

        {/* زر التقدم */}
       <button
            onClick={handleNextClick}
            className="w-20 h-20  rounded-full p-0 bg-[#09243c] backdrop-blur-xl   shadow-xl"
          >
            <FiArrowRight className="w-7 h-8 flex justify-center m-auto  text-white" />
          </button>
      </div>
    </div>
    <p className="text-center  pt-10">We provide dozens of different high-quality healthcare services.
    
 <a href="" className="text-[#09243c] px-2"
 >View All Services</a>
    </p>
    </div>
  );
};

export default App;