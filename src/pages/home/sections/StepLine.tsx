
import image1 from "../../../assets/images/sv10s.webp"
import image2 from "../../../assets/images/sv12s.webp"
import image3 from "../../../assets/images/sv14.webp"
import image4 from "../../../assets/images/sv16s.webp"
import logo2 from "../../../assets/images/ic2.png";
const steps = [
  {
    number: 1,
    title: 'Fill In Our Medical Application',
    description: 'Nulla metus quam, dictum mollis felis quis, congue sollicitudin orci. Praesent pharetra diam nulla laoreet.',
    image: image1,
  },
  {
    number: 2,
    title: 'Review Your Family Medical History',
    description: 'Nulla metus quam, dictum mollis felis quis, congue sollicitudin orci. Praesent pharetra diam nulla laoreet.',
    image: image2,
  },
  {
    number: 3,
    title: 'Choose Between Our Care Programs',
    description: 'Nulla metus quam, dictum mollis felis quis, congue sollicitudin orci. Praesent pharetra diam nulla laoreet.',
    image: image3,
  },
  {
    number: 4,
    title: 'Introduce To Highly Qualified Doctors',
    description: 'Nulla metus quam, dictum mollis felis quis, congue sollicitudin orci. Praesent pharetra diam nulla laoreet.',
    image:image4,
  },
];

function StepLine() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-12">
        <img src={logo2} alt="" className="w-5 m-auto pb-4 " />
        <p className='text-center'> Your Health Care Process </p>
      <h2 className="text-center xl:text-5xl   font-semibold mb-6 mt-4 xl:w-200 m-auto">
        We Work to Achieve Better Health Outcomes One Step at a Time
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
       We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require.
      </p>

      {/*  للصور والدوائر والرقم مع الخط */}
      <div className="relative mb-16">
        {/* الخط الأفقي */}
        <div className="absolute top-52 left-12 right-12 border-t border-gray-300 z-0"></div>

        <div className="flex justify-between relative z-10 items-center">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center   w-1/4">
              {/* الصورة دائرية */}
              <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
                <img
                  src={step.image}
                  alt={`step-${step.number}`}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* الدائرة  للرقم فوق الخط */}
              <div
                className="w-12 h-12 rounded-full bg-[#051b2e] text-white flex items-center justify-center font-semibold relative top-6 hover:text-[#051b2e] hover:-translate-y-2"
                style={{ zIndex: 20 }}
              >
                {step.number}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* النصوص تحت الخط مباشرة */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center max-w-7xl mx-auto px-5">
        {steps.map((step) => (
          <div key={step.number}>
            <h3 className="font-semibold m-auto w-40">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepLine