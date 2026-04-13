
import { FaArrowRight } from "react-icons/fa";
import backgrounImage from "../../../assets/images/h5-11.webp"
function FindDoctor() {
  return (
<>

    <div
      className="w-full  h-100 md:h-125 bg-cover bg-center flex items-center justify-start p-3 text-gray-950 rounded-2xl" 
      style={{ backgroundImage: `url(${backgrounImage})` }}
    >
      <div className="text-left">

        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Welcome To Our Clinic
        </h1>

        <p className="mb-6 max-w-xl">
          We provide the best medical services for you and your family.
        </p>

        <button className=" flex items-center gap-2">
         <span> Book Appointment</span> <FaArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
    </>
  );
};

export default FindDoctor ;