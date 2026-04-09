import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const treatments = [
  "General Checkup",
  "Dental",
  "Cardiology",
  "Neurology",
];

const doctors = [
  "Dr. John Doe",
  "Dr. Jane Smith",
  "Dr. Michael Johnson",
  "Dr. Emily Davis",
];

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    treatment: '',
    doctor: '',
    date: '',
  });

  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add validation and further submission logic here
    setIsComplete(true);
  };

  return (
    <div className="bg-[#c8e2ee] w-auto rounded-2xl pt-20  max-w-4xl px-6   md:flex-row items-center md:items-start gap-6 ">
      <div>
        <h2 className="text-3xl font-semibold col-span-full">Book An Appointment</h2>
        <p className="text-sm text-gray-600 col-span-full mb-4">
          Appreciate and check your health more often, let us help you do that!
        </p>
</div>
  <form onSubmit={handleSubmit} className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name..."
          value={formData.fullName}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300"
          required
        />
        <select
          name="treatment"
          value={formData.treatment}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300"
          required
        >
          <option value="" disabled>Select Treatment</option>
          {treatments.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <input
          type="email"
          name="email"
          placeholder="*Email address..."
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300"
          required
        />
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300"
          required
        >
          <option value="" disabled>Choose doctor</option>
          {doctors.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <input
          type="tel"
          name="phone"
          placeholder="*Phone number..."
          value={formData.phone}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300"
          required
        />
        
     
         <button
          type="submit"
          className="col-span-full md:col-auto bg-gray-950 text-white rounded-full w-32 h-32 flex flex-col justify-center  items-center hover:bg-yellow-400 transition "
        >
          {isComplete ? (
            <>
              <FaCheck className="text-green-400 mb-1" size={24} />
              <span className="text-center text-sm text-white">Complete Appointment</span>
            </>
          ) : (
            
       "Complete Appointment"
            
          )}
        </button>
      </form>
        
</div>
  );
};

export default AppointmentForm;

