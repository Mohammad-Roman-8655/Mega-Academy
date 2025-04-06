import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function OnlineAdmissionForm() {

     
      const [newAdmissionForm,setNewAdmissionForm] =useState(
        {

          studentName : '',
          DOB : '',
          gender : '',
          phoneNum : '',
          email :'',
          aadharNum : '',
          nationality : '',
          religion : '',
          bloodGroup : '',                    
          permanentAddress :'',
          currentAddress : '',
          fatherName : '',
          motherName : '',
          guardianName : '',
          guardianNum : '',
          guardianEmail : '',
          guardianOccupation : '',
          annualIncome : '',
          guardianPermanentAddress : '',
          guardianCurrentAddress : '',
          previousSchoolName  :'',
          lastClassAttended : '',
          mediumOfInstruction : '',
          previousClassDivision : '',
          totalMarks : '',
          obtainedMarks  : '',
          transferCertificateRegistrationNumber : '',
          lastSchoolAddress : '',
          academicYear : '',
          classGroup : '',
          standardForAdmission :'',
          stream : '',
          siblingInSameSchool : '',
          siblingNumInSameSchool : '',
          siblingName : '',
          siblingStandard : '',
          siblingAdmissionNumber :'',
          transportNeed : '',
          pickUpPoint : '',
          dropOffPoint : ''
      
      }


      );
       
       // Store districts based on selected state
      
       const token = localStorage.getItem("token");
      
        // Fetch Labour Types
    
      
        const navigate = useNavigate();
        const handleInputChange = (e) => {
          setNewAdmissionForm({
            ...newAdmissionForm,
            [e.target.name]: e.target.value
          });
        }; 
        
        const handleAdmissionForm = async () => {
          if(!token) {
              alert("Please Login to applying for online admission form.");
            navigate("/Login")
            return;
          }
          try {
            const response = await fetch("http://localhost:8080/api/admission-form", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
               Authorization: `Bearer ${token}` 
              },
              body: JSON.stringify(newAdmissionForm),
            });
      
            if (response.ok) {
              alert("Admission form submitted successfully!. Our team will contact with you soon.");
               setNewAdmissionForm(   {

                studentName : '',
                DOB : '',
                gender : '',
                phoneNum : '',
                email :'',
                aadharNum : '',
                nationality : '',
                religion : '',
                bloodGroup : '',                    
                permanentAddress :'',
                currentAddress : '',
                fatherName : '',
                motherName : '',
                guardianName : '',
                guardianNum : '',
                guardianEmail : '',
                guardianOccupation : '',
                annualIncome : '',
                guardianPermanentAddress : '',
                guardianCurrentAddress : '',
                previousSchoolName  :'',
                lastClassAttended : '',
                mediumOfInstruction : '',
                previousClassDivision : '',
                totalMarks : '',
                obtainedMarks  : '',
                transferCertificateRegistrationNumber : '',
                lastSchoolAddress : '',
                academicYear : '',
                classGroup : '',
                standardForAdmission :'',
                stream : '',
                siblingInSameSchool : '',
                siblingNumInSameSchool : '',
                siblingName : '',
                siblingStandard : '',
                siblingAdmissionNumber :'',
                transportNeed : '',
                pickUpPoint : '',
                dropOffPoint : ''
            
            });
              navigate("/");
            } else {
              alert("Failed to submit admission form.");
            }
          } catch (error) {
            console.error("Error:", error);
          }
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // console.log(newAdmissionForm);
          handleAdmissionForm();
          
        }; //onSubmit={handleSubmit}  value={newAppointment.guardianName} onChange={handleInputChange}

  return (
  <div className='w-full mb-20'>

     <div className='lg:w-[80%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto mt-20 h-[100%] border-2 rounded-xl  '>
        <div className='mx-auto text-center mb-10 w-full bg-blue-700 rounded-tl-xl rounded-tr-xl'>
            <h1 className='text-3xl font-bold w-full p-3 text-white'>ONLINE SCHOOL ADMISSION FORM</h1>
        </div>
      <form onSubmit={handleSubmit}>
      <div className="form-info w-full ">
        <div className="student-info w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-5 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Student Information</h1>
          <div className="row-1 flex justify-between  lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5 ">
            <div className="student-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto  lg:mb-0 md:mb-5 sm:mb-5  mb-5 ">
            <label for="Student-Name" className='font-semibold mb-2'>Student Name <span className='text-red-600 font-bold'>*</span></label>
            <input id="Student-Name"type="text" name='studentName' value={newAdmissionForm.studentName} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Student Name ' />
            </div>
            <div className="student-dob lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
              <label for="DOB" className='font-semibold mb-2'>Date Of Birth(DOB)<span className='text-red-600 font-bold'>*</span></label>
              <input type="date" id="DOB" name='DOB' value={newAdmissionForm.DOB} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] '  />
            </div>
            <div className="father-gender lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-3'>Gender <span className='text-red-600 font-bold'>*</span></label>
            <select name='gender' value={newAdmissionForm.gender} onChange={handleInputChange} id=""  className='border-2  h-10 rounded-md '>
              <option value="">Select Gender :</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            </div>
          </div>
          <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
              <div className="mobile-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label for="Contact-Number" className='font-semibold mb-2'>Contact Number (Mobile/Phone)<span className='text-red-600 font-bold'>*</span></label>
                  <input type="number" id="Contact-Number" name='phoneNum' value={newAdmissionForm.phoneNum} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Contact Number ' />
             </div>
              <div className="email-id lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="email">Email ID<span className='text-red-600 font-bold'>*</span></label>
                  <input type="email" id='email' name='email' value={newAdmissionForm.email} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Email ID ' />
             </div>
             <div className="aadhar-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Aadhar-Number">Aadhar Number<span className='text-red-600 font-bold'>*</span> </label>
                  <input type="number" id="Aadhar-Number" name='aadharNum' value={newAdmissionForm.aadharNum} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Aadhar Number ' />
             </div>
          </div>
          <div className="row-3 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="Nationality lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Nationality" className='font-semibold mb-2'>Nationality<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Nationality" name='nationality' value={newAdmissionForm.nationality} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                           <option value="" className='p-2'>Select Nationality</option>
                           <option value="Indian">Indian</option>
                           <option value="Indian">Other</option>
                           
                        </select>
            </div>
                 <div className="religion lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="religion" className='font-semibold mb-2'>Religion</label>

                        <select id="religion"  name='religion' value={newAdmissionForm.religion} onChange={handleInputChange}  className='border-2  h-10 rounded-md '>
                           <option value="" className='p-2'>Select Religion</option>
                           <option value="Islam">Islam</option>
                           <option value="Hinduism">Hinduism</option>
                           <option value="Christianity">Christianity</option>
                           <option value="Sikhism">Sikhism</option>
                           <option value="Jainism">Jainism</option>
                           <option value="other">Other</option>
                        </select>
            </div>
            <div className="blood-group lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label for="blood-group" className='font-semibold mb-2'>Blood Group</label>

           <select id="blood-group" name='bloodGroup' value={newAdmissionForm.bloodGroup} onChange={handleInputChange} className='border-2 h-10 rounded-md'>
              <option value="" className='p-2'>Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
          </select>
            </div>
          </div>
          <div className="row-4 flex gap-12 w-full mb-5 lg:flex-row md:flex-col sm:flex-col flex-col">
          <div className="parents-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label for="permanentAddress" className='font-semibold mb-2'>Permanent Address<span className='text-red-600 font-bold'>*</span></label>
            <textarea id="permanentAddress" name='permanentAddress' value={newAdmissionForm.permanentAddress} onChange={handleInputChange} placeholder="Enter Permanent Address" className='border-2 p-5  rounded-md w-[100%] ' row={12} cols={20}></textarea>
            </div>
            <div className="current-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
          
               <label for="currentAddress" className='font-semibold mb-2'>Current Address:</label>
               <textarea id="currentAddress" name='currentAddress' value={newAdmissionForm.currentAddress} onChange={handleInputChange} placeholder="Enter Current Address" className='border-2 p-5  rounded-md w-[100%] '  row={12} cols={20}></textarea>

            </div>
          </div>
        </div>
        <div className="Parent/Guardian Information w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[28%] sm:mx-[15%] mx-[18%]'>Parent/Guardian Information</h1>
          <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
            <div className="Father-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Father-Name">Father’s Name <span className='text-red-600 font-bold'>*</span></label>
            <input type="text" name='fatherName' value={newAdmissionForm.fatherName} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' id='Father-Name' placeholder='Enter Father’s Name ' />
            </div>
            <div className="Mother-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Mother-Name">Mother’s Name <span className='text-red-600 font-bold'>*</span></label>
            <input type="text" id="Mother-Name" name='motherName' value={newAdmissionForm.motherName} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Mother’s Name ' />
            </div>
            <div className="Guardian-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Guardian-Name">Guardian’s Name (if applicable) </label>
            <input type="text" id="Guardian-Name" name='guardianName' value={newAdmissionForm.guardianName} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Guardian’s Name ' />
            </div>
            
          
          </div>
          <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="contact-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for='Contact-Number'>Parent/Guardian's Contact Number<span className='text-red-600 font-bold'>*</span> </label>
                  <input type="number" id='Contact-Number' name='guardianNum' value={newAdmissionForm.guardianNum} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Contact Number ' />
             </div>
              <div className="email-id lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Email-ID">Parent/Guardian's Email ID<span className='text-red-600 font-bold'>*</span></label>
                  <input type="email" id="Email-ID" name='guardianEmail' value={newAdmissionForm.guardianEmail} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Email ID ' />
             </div>
            <div className="Guardian-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
               <label className='font-semibold mb-2' for="Occupation">Parent/Guardian's Occupation</label>
               <input type="text" id="Occupation" name='guardianOccupation' value={newAdmissionForm.guardianOccupation} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Occupation ' />
            </div>
          
         
          </div>
          <div className="row-3 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                  <div className="aadhar-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Income">Parent's Annual Income<span className='text-red-600 font-bold'>*</span> </label>
                  <input type="number" id="Income" name='annualIncome' value={newAdmissionForm.annualIncome} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Annual Income ' />
                </div>
            
                <div className="parents-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                       <label for="permanentAddress" className='font-semibold mb-2'>Permanent Address<span className='text-red-600 font-bold'>*</span></label>
                      <textarea id="permanentAddress" name='guardianPermanentAddress' value={newAdmissionForm.guardianPermanentAddress} onChange={handleInputChange} placeholder="Enter Guardian Permanent Address" className='border-2 p-5  rounded-md w-[100%] ' row={12} cols={20}></textarea>
                </div>
                <div className="current-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
          
                       <label for="currentAddress" className='font-semibold mb-2'>Current Address:</label>
                       <textarea id="currentAddress"  name='guardianCurrentAddress' value={newAdmissionForm.guardianCurrentAddress} onChange={handleInputChange} placeholder="Enter Current Address" className='border-2 p-5  rounded-md w-[100%] '  row={12} cols={20}></textarea>
                      <input type="checkbox" id="sameAddress" /> Same as Permanent Address
            </div>
          </div>
         
        </div>
        <div className="Academic-Information w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Academic Information</h1>
          <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
            <div className="Previous-School-Name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="School-Name">Previous School Name <span className='text-red-600 font-bold'>*</span></label>
            <input type="text"  name='previousSchoolName' value={newAdmissionForm.previousSchoolName} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' id="School-Name" placeholder='Enter Previous School Name ' />
            </div>
            <div className="Last-Class-Attended lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Class-Attended">Last Class Attended <span className='text-red-600 font-bold'>*</span></label>
            <select  name='lastClassAttended' value={newAdmissionForm.lastClassAttended} onChange={handleInputChange} id="Class-Attended" className='border-2 h-10 rounded-md'>
               <option value="">Select Last Class Attended</option>
               <option value="Fresh">Fresh</option>
               <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6st">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
            </select>
            </div>
              <div className="Medium-of-Instruction lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Medium" className='font-semibold mb-2'>Medium of Instruction<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Medium"  name='mediumOfInstruction' value={newAdmissionForm.mediumOfInstruction} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                           <option value="" className='p-2'>Select Medium of Instruction</option>
                           <option value="Hindi">Hindi</option>
                           <option value="English">English</option>
                        </select>
            </div>
            
          
          </div>
          <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="Previous-Class-Division lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Previous-Class-Division" className='font-semibold mb-2'>Previous Class Division<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Previous-Class-Division" name='previousClassDivision' value={newAdmissionForm.previousClassDivision} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                           <option value="" className='p-2'>Select Previous Class Division</option>
                           <option value="First Division">First Division</option>
                           <option value="Second Division">Second Division</option>
                           <option value="Third Division">Third Division</option>
                           <option value="Promoted">Promoted</option>
                        </select>
            </div>
              <div className="total-marks lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Total-Marks">Total Marks<span className='text-red-600 font-bold'>*</span></label>
                  <input type="number" id="Total-Marks" name='totalMarks' value={newAdmissionForm.totalMarks} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Total Marks ' />
             </div>
            <div className="Obtained-Marks lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
               <label className='font-semibold mb-2' for="Obtained-Marks">Obtained Marks <span className='text-red-600 font-bold'>*</span></label>
               <input type="number" id="Obtained-Marks"  name='obtainedMarks' value={newAdmissionForm.obtainedMarks} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Obtained Marks ' />
            </div>
          
         
          </div>
          <div className="row-3 flex gap-12 ml-2 w-full mb-5 lg:flex-row md:flex-col sm:flex-col flex-col">
                  <div className="TC-No lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="TC">Transfer Certificate Registration Number<span className='text-red-600 font-bold'>*</span> </label>
                  <input type="number" id="TC"  name='transferCertificateRegistrationNumber' value={newAdmissionForm.transferCertificateRegistrationNumber} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Registration Number' />
                </div>
            
                <div className="Last-School-Address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                       <label for="Last-School-Address" className='font-semibold mb-2'>Last School Address<span className='text-red-600 font-bold'>*</span></label>
                      <textarea id="Last-School-Address"  name='lastSchoolAddress' value={newAdmissionForm.lastSchoolAddress} onChange={handleInputChange} placeholder="Enter Last School Address" className='border-2 p-5  rounded-md w-[100%] ' row={12} cols={20}></textarea>
                </div>
                
          </div>
         
        </div>
        <div className="Course-Information w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[28%] sm:mx-[20%] mx-[18%]'>Class and Course Information</h1>
          <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="Academic-year lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="academic-year" className='font-semibold mb-2'>Academic Year<span className='text-red-600 font-bold'>*</span></label>

                        <select id="academic-year"  name='academicYear' value={newAdmissionForm.academicYear} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                           <option value="" className='p-2'>Select Academic Year</option>
                           <option value="2024-25">2024-25</option>
                           <option value="2025-26">2025-26</option>
                        </select>
              </div>
          <div className="Class-Group lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Class-Group" className='font-semibold mb-2'>Class Group<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Class-Group"  name='classGroup' value={newAdmissionForm.classGroup} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                           <option value="" className='p-2'>Select Class Group</option>
                           <option value="Pre-primary">Pre-primary</option>
                           <option value="Primary">Primary</option>
                           <option value="Middle">Middle</option>
                           <option value="Secondary">Secondary</option>
                           <option value="Senior Secondary">Senior Secondary</option>
                        </select>
            </div>
            <div className="Standards lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Standards" className='font-semibold mb-2'>Standards for Admission<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Standards"  name='standardForAdmission' value={newAdmissionForm.standardForAdmission} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                           <option value="" className='p-2'>Select Standard for Admission</option>
                            <option value="Pre-Nursery">Pre-Nursery</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6st">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
                        </select>
            </div>         
          </div>
          <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="Stream lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Stream" className='font-semibold mb-2'>Stream (if applicable for higher classes)<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Stream"  name='stream' value={newAdmissionForm.stream} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                           <option value="" className='p-2'>Select Stream</option>
                           <option value="Art">Art</option>
                           <option value="Science">Science</option>
                           <option value="Commerce">Commerce</option>
                           <option value="PCM">PCM</option>
                           <option value="PCB">PCB</option>
                           <option value="Not-Eligible">Not Eligible</option>    
                        </select>
              </div>  
          </div>   
        </div>
        <div className="Sibling-Information w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Sibling Information</h1>
          <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="Sibling-info lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Sibling-info" className='font-semibold mb-2'>Sibling's currently studying in the same school (Yes/No) : </label>

                        <select id="Sibling-info"  name='siblingInSameSchool' value={newAdmissionForm.siblingInSameSchool} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                           <option value="" className='p-2'>Select</option>
                           <option value="Yes">Yes</option>
                           <option value="No">No</option>
                        </select>
              </div>
              <div className="Sibling-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Sibling-number" className='font-semibold mb-2'>Select number of Sibling's in the school : </label>

                        <select id="Sibling-number"  name='siblingNumInSameSchool' value={newAdmissionForm.siblingNumInSameSchool} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                           <option value="" className='p-2'>Select Number Of Sibling </option>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                           <option value="6">6</option>
                        </select>
              </div>
               
          </div>
          <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="Sibling-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Sibling-Name">Sibling Name <span className='text-red-600 font-bold'>*</span></label>
            <input type="text" id="Sibling-Name"  name='siblingName' value={newAdmissionForm.siblingName} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Sibling Name ' />
            </div>
            <div className="Sibling-Standards lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Sibling-Standards" className='font-semibold mb-2'>Sibling's Standard<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Sibling-Standards"  name='siblingStandard' value={newAdmissionForm.siblingStandard} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                           <option value="" className='p-2'>Select Sibling's Standard </option>
                            <option value="Pre-Nursery">Pre-Nursery</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6st">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
                        </select>
            </div>
            <div className="Sibling-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Admission-Number">Sibling's Admission Number <span className='text-red-600 font-bold'>*</span></label>
            <input type="number" id="Admission Number"  name='siblingAdmissionNumber' value={newAdmissionForm.siblingAdmissionNumber} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Sibling Admission Number' />
            </div>
          
          </div>   
        </div>
        <div className="Transportation-Details w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Transportation Details</h1>
          <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="Transportation-Details lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Transportation-Details" className='font-semibold mb-2'>Need for School Transport (Yes/No) : </label>

                        <select id="Transportation-Details"  name='transportNeed' value={newAdmissionForm.transportNeed} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                           <option value="" className='p-2'>Select Transport Need</option>
                           <option value="Yes">Yes</option>
                           <option value="No">No</option>
                        </select>
              </div>
              <div className="Pick-Up lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Pick-Up">Pick-Up Point <span className='text-red-600 font-bold'>*</span></label>
            <input type="text" id="Pick-Up"  name='pickUpPoint' value={newAdmissionForm.pickUpPoint} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Pick-Up Point ' />
            </div>
            <div className="Drop-off lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Drop-off">Drop-off Point <span className='text-red-600 font-bold'>*</span></label>
            <input type="text" id="Drop-off"  name='dropOffPoint' value={newAdmissionForm.dropOffPoint} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Drop-off Point ' />
            </div>
             
               
          </div>
        
        </div>
        <div className="Documents-Required w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[15%] sm:mx-[10%] mx-[8%]'>Documents Required</h1> 
        <p className='text-green-700 ml-5  mb-5'>Submit these documents at the college visit time.</p> 
          <ul className='list-disc ml-10 mb-5'>
            
            <li>Birth Certificate</li>
            <li>Previous School's Transfer Certificate (TC)</li>
            <li>Previous School's Report Card</li>
            <li>Aadhar Card (or other ID proof)</li>
            <li>Passport-sized Photograph</li>
            <li>Parent/Guardian’s ID Proof (Aadhar, Passport, etc.)</li>
            </ul>   
          
        </div>
        <button className='lg:w-[50%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-60 md:mx-5 sm:mx-5 mx-5 mb-10 hover:underline hover:border-black border-2 p-3 bg-blue-700 text-xl font-bold text-white rounded-lg'>Submit</button>
       
       </div>
      </form>
        </div>

  </div>
  )
}

export default OnlineAdmissionForm