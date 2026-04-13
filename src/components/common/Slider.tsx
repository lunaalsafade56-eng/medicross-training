import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, type ReactNode } from "react";
export interface slide {
  img: string;
  title: string;
  subtitle: string;
  text: string;
}

interface SliderProps<T> {
  renderSlider: (item: T) => ReactNode;
  slides: T[];
}
const Slider: React.FC<SliderProps> = ({ renderSlide, slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((next) => (next === slides.length - 1 ? 0 : next + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // const goToSlide = (index: number) => {
  //   setCurrent(index);
  // };

  return (
    <div className="relative min-h-screen bg-[#0a263f] flex items-center justify-center overflow-hidden px-3 sm:px-6 lg:px-12 xl:px-16 py-20 lg:py-32">
      
        {/* Prev Button */}
        <div className="mt-12 sm:block grid grid-cols-2 gap-7 md:block hidden">
          
          <button
            onClick={prevSlide}
            className="w-20 h-20 rounded-full mb-4 p-0 bg-white/10 backdrop-blur-xl hover:bg-yellow-200  shadow-xl"
          >
            <FaArrowLeft className="w-5 h-5 flex  justify-center m-auto text-gray-500" />
          </button>
          {/* Next Button */}
          
          <button
            onClick={nextSlide}
            className="w-20 h-20  rounded-full p-0 bg-white/10 backdrop-blur-xl hover:bg-yellow-200    shadow-xl"
          >
            <FaArrowRight className="w-5 h-5 flex justify-center m-auto  text-gray-500" />
          </button>
          
        </div>
      {/* </div> */}
      {renderSlide(slides[current])}
    </div>
  );
};

export default Slider;
