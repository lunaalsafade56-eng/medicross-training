
import { useState } from "react"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  doctor: string
  date: string
}

function useAppointment() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    doctor: "",
    date: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
const [isComplete, setIsComplete] = useState(false);
  const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form);
     setIsComplete(true);
     new Promise(resolve=> setTimeout(resolve,2000))
    // Reset form after submit
    .then(()=>{
    setIsComplete(false)
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      doctor: "",
      date: "",
    })
    
  }
)
  }
  return { form, handleChange, handleSubmit,isComplete  }
}

export default useAppointment