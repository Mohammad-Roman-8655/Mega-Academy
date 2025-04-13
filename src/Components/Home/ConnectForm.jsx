import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/apiConfig';

function ConnectForm() {
        const [newAppointment,setNewAppointment] =useState({
            guardianName:'' ,
            phoneNum:'',
            childName:'' ,
            childAge:'',
            message:''
        });
         
         // Store districts based on selected state
        
         const token = localStorage.getItem("token");
        
          // Fetch Labour Types
      
        
          const navigate = useNavigate();
          const handleInputChange = (e) => {
            setNewAppointment({
              ...newAppointment,
              [e.target.name]: e.target.value
            });
          };
          
          
          const handleAddAppointment = async () => {
            if(!token) {
                alert("Please Login to book Appointment.");
              navigate("/Login")
              return;
            }
            try {
              const response = await fetch(`${API_URL}/api/appointment`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                 Authorization: `Bearer ${token}` 
                },
                body: JSON.stringify(newAppointment),
              });
        
              if (response.ok) {
                alert("Appointment booked successfully!. Our team will contact with you soon.");
                setNewAppointment({
                    guardianName: '',
                    phoneNum: '',
                    childName: '',
                    childAge: '',
                    message: ''
                  });
                navigate("/");
              } else {
                alert("Failed to book Appointment.");
              }
            } catch (error) {
              console.error("Error:", error);
            }
          };
        
          const handleSubmit = (e) => {
            e.preventDefault(); 
            handleAddAppointment();
           
          };
  return (
    <div className='lg:m-10 md:m-10 sm:m-0 m-0 '>
          <div className='lg:flex md:flex sm:block block justify-center  w-full'>
            <div className='lg:w-[50%]  md:w-[50%] sm:w-[100%] w-[100%] pr-12 py-5 border-2 lg:rounded-tl-lg md:rounded-tl-lg sm:rounded-tl-xl rounded-tl-xl lg:rounded-bl-xl md:rounded-bl-xl sm:rounded-bl-none rounded-bl-none lg:rounded-tr-none md:rounded-tr-none sm:lg:rounded-tr-xl rounded-tr-xl border-r-0 bg-gradient-to-r from-sky-500 to-gray-700'>
                <h1 className='text-2xl text-center mb-10 ml-20 font-bold  text-white'>Make Appointment</h1>
                <form onSubmit={handleSubmit} >
               <div className='ml-20'>
               
               <div className='lg:flex md:flex sm:block block items-center gap-4 '>
                    <input className='lg:w-[50%]  md:w-[50%] sm:w-[100%] w-[100%] mb-10 px-5 py-5 rounded-lg border-2 hover:border-black' type="text" name='guardianName' value={newAppointment.guardianName} onChange={handleInputChange} placeholder='Guardian name' />
                    <input className='lg:w-[50%]  md:w-[50%] sm:w-[100%] w-[100%] mb-10 px-5 py-5 rounded-lg border-2 hover:border-black' type="text" name='phoneNum' value={newAppointment.phoneNum} onChange={handleInputChange} placeholder='Guardian Phone Number' />
                </div>
                <div className='lg:flex md:flex sm:block block items-center gap-4'>
                    <input className='lg:w-[50%]  md:w-[50%] sm:w-[100%] w-[100%] mb-10 px-5 py-5 rounded-lg border-2 hover:border-black' type="text" name='childName' value={newAppointment.childName} onChange={handleInputChange} placeholder='Child name'/>
                    <input className='lg:w-[50%]  md:w-[50%] sm:w-[100%] w-[100%] mb-10 px-5 py-5 rounded-lg border-2 hover:border-black' type="number" name='childAge' value={newAppointment.childAge} onChange={handleInputChange} placeholder='Child Age' />
                </div>
                <div className='mb-5 '>
                    <textarea className='w-[100%] px-5 py-5 rounded-md border-2 hover:border-black' name="message" value={newAppointment.message} onChange={handleInputChange} id="" placeholder='Message'></textarea>
                </div>
                <button type="submit" className=' w-[100%] px-5 py-5 rounded-md font-bold text-xl border-2 md:mb-0 sm:mb-10 mb-10 hover:border-black text-white'>Submit</button>
               </div>
               </form>
            </div>
            <div className='lg:w-[50%]  md:w-[50%] sm:w-[100%] w-[100%] '>
                <img className="h-[600px] lg:rounded-tr-lg md:rounded-tr-lg sm:rounded-tr-none rounded-tr-none lg:rounded-br-xl md:rounded-br-xl sm:rounded-br-xl rounded-br-xl lg:rounded-bl-none md:rounded-bl-none sm:rounded-bl-xl rounded-bl-xl" src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1730115411/h3mogaeho1ojehkpdf9p.webp" alt="girl-photo" />
            </div>
        </div>
    </div>
  )
}

export default ConnectForm