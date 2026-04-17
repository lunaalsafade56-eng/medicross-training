import Card from "../../../components/ui/Card";
import CardImage1 from "../../../assets/images/h5-6.webp";
import CardImage2 from "../../../assets/images/h5-7.webp";
import CardImage3 from "../../../assets/images/h5-8.webp";
import CardImage4 from "../../../assets/images/h5-9.webp";
const cardsData = [
  {
    image: CardImage1,
    link: "/gallery/1",
  },
  {
    number: 13,
    title: "Centers Across the United States",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada porta sapien, in interdum urna commodo eu neque eget.",
    link: "/clients",
    bgColor:"#f1f2f2",
    button:"View ALL Location"
  },
  {
    image: CardImage2,
    link: "/gallery/2",
  },
  {
    number: 99,
    title: "Happy Customer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada porta sapien, in interdum urna commodo eu neque eget.",
    link: "/projects",
    bgColor:"#fdd77e",
    button:"View Testimonials"
  },
   {
    number: 16,
    title: "Health Care Center Award",
    description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada porta sapien, in interdum urna commodo eu neque eget.",
    link: "/years",
    bgColor:"#b6d9e8",

    button:" Our Commitment "
  },
  {
    image: CardImage3,
    link: "/gallery/3",
  },
  {
    number: 385,
    title: "Qualified Doctors and Nurses",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada porta sapien, in interdum urna commodo eu neque eget.",
    link: "/awards",
    bgColor:"#09243c",
    colorNumber:"#ffcc53",
    colorText:"#f9fafa",
    button:" View All The Doctor ",
  },
  {
    image: CardImage4,
    link: "/gallery/4",
  },
 
];

function CardsHome() {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsHome;
