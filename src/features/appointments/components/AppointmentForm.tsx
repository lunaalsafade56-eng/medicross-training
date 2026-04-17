
import Button from "../../../components/ui/Button"
import useAppointment from "../hooks/useAppointment"
import { FaCheck } from 'react-icons/fa';
const doctors = [
  { id: 1, name: "dr. John Doe" },
  { id: 2, name: "dr. Jane Smith" },
  { id: 3, name:"dr.Alex"}
]

const services = [
  { id: 1, name: "Health Consulting" },
  { id: 2, name: "dental" },
  { id: 3, name: "Schedule An Examination" },
]


function AppointmentForm() {
  const { form, handleChange, handleSubmit,isComplete } = useAppointment()

  return (
    <section className=" p-8 bg-[#bfddeb] rounded-2xl shadow-xl w-auto  pt-20  max-w-4xl px-6   md:flex-row items-center md:items-start gap-3">
       <div>
        <h2 className="text-3xl font-semibold col-span-full">Book An Appointment</h2>
        <p className="text-sm text-[var(--color-primary)] col-span-full mb-4">
          Appreciate and check your health more often, let us help you do that!
        </p>
</div>
      <form onSubmit={handleSubmit} className="space-y-6 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {/* Name */}
        <div>
          <input
            onChange={handleChange}
            value={form.name}
            type="text"
            name="name"
            placeholder="name"
            required
            className="w-full px-5  h-13.75 border border-gray-300 rounded-xl focus:ring-0 bg-[#e7f2f7]  focus:bg-white transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <input
            onChange={handleChange}
            value={form.email}
            type="email"
            name="email"
            placeholder="email"
            required
            className="w-full px-5  h-13.75 border border-gray-300 rounded-xl focus:ring-0 bg-[#e7f2f7]  focus:bg-white transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <input
            onChange={handleChange}
            value={form.phone}
            name="phone"
            type="tel"
            placeholder="phone"
            required
            className="w-full px-5  h-13.75 border border-gray-300 rounded-xl focus:ring-0 bg-[#e7f2f7]  focus:bg-white transition-all"
          />
        </div>

        {/* Service */}
        <div>
          <select
            value={form.service}
            name="service"
            onChange={handleChange}
            className="w-full px-5  h-13.75 border border-gray-300 rounded-xl focus:ring-0 bg-[#e7f2f7]  focus:bg-white transition-all"
          >
            <option value="">select service</option>
            {services.map((service, index) => (
              <option key={index} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* Doctor */}
        <div>
          <select
            value={form.doctor}
            name="doctor"
            onChange={handleChange}
            className="w-full px-5 p-4  h-13.75 border border-gray-300 rounded-xl focus:ring-0 bg-[#e7f2f7]  focus:bg-white transition-all"
          >
            <option value="">select doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <input
            onChange={handleChange}
            value={form.date}
            name="date"
            type="date"
            required
            className="w-full px-5  h-13.75 border border-gray-300 rounded-xl focus:ring-0 bg-[#e7f2f7]  focus:bg-white  transition-all"
          />
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          variant="secondary"
          disabled={isComplete }
          className=" bg-[var(--color-primary)] text-white py-3 px-6  font-semibold hover:bg-opacity-90   md:col-auto xl:rounded-full rounded-xl w-full h-auto xl:w-32 xl:h-32  flex flex-col justify-center  items-center hover:bg-yellow-200 transition"
        >
         {isComplete ? (
             <>
               <FaCheck className="text-green-200 mb-1 " size={24} />
               <span className="text-center text-white">Complete Appointment</span>
             </>
           ) : (
            
        "Complete Appointment"
            
           )}
        </Button>
      </form>
    </section>
  )
}

export default AppointmentForm