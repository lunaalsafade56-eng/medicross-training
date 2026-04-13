import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {  FaArrowRight } from "react-icons/fa";

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  number?: number;
  bgColor?:string;
  link: string;
  button?:string;
  colorNumber?:string;
  colorText?:string;
};

const Card = ({ title, description, image, number, link,bgColor,button,colorNumber,colorText }: CardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!number) return;

    let start = 0;
    const duration = 1000;
    const increment = number / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= number) {
        start = number;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [number]);

  return (
    
    <Link to={link} >
      <div className="rounded-2xl shadow-md h-100  overflow-hidden hover:shadow-xl transition duration-300  flex flex-col justify-between items-center "style={{backgroundColor:bgColor||"white"}}>
        
        {/* صورة */}
        {image && (
          <img
            src={image}
            alt="card"
            className="w-full h-full object-cover"
          />
        )}

        {/* محتوى النص */}
        {(title || description || number||button) && (
          <div className="p-6 flex flex-col gap-6 text-start">
            
            {number !== undefined && (
              <h2 className="text-6xl  text-gray-950" style={{color:colorNumber||"black"}}>
                {count}+
              </h2>
            )}

            {title && <h3 className="text-lg font-bold text-gray-950 " style={{color:colorText||""}}>{title}</h3>}

            {description && (
              <p className="text-gray-600 text-sm" style={{color:colorText||""}}>{description}</p>
            )}
            {button &&(
                <span className="flex gap-1 "style={{color:colorText||""}}>{button} <FaArrowRight  className="mt-1.5"/></span>
            )
            }

          </div>
        )}
      </div>
    </Link>

  );
};

export default Card;