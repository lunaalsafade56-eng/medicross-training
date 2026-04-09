 import slide1 from "../../assets/images/h5-2.webp";
 import slide2 from "../../assets/images/Screenshot 2026-04-05 162040.png";
 export interface slide{
  img:string,
  title:string,
  subtitle:string,
  text:string
 }
export const homeContents = {
  slides: [
    {
      img:slide1,
      title:"Medicross Health Care Center",
      subtitle:"Your Journey to Exclusive Wellness Begins Here.",
      text:"The healthcare arena there was a felt need of developing new as well as upgrading the existing functioning and processes, consequently develop an institution supported with necessary"
    },
    {
      img:slide2,
      title: "Medicross Health Care Center",
      subtitle:"Having A Good Health Is Your Best Investment.",
text:"The healthcare arena there was a felt need of developing new as well as upgrading the existing functioning and processes, consequently develop an institution supported with necessary"
    }
  ]
} as const;
