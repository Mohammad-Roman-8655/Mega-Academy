import React from 'react'

function OnlineAdmissionForm() {

  return (
  <div className='w-full mb-20'>
     <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
             <h1 className='text-center text-2xl mx-auto text-white font-bold'>ONLINE ADMISSION APPLICATION FORM </h1>
     </div>
     <div className='lg:w-[80%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto h-[100%] border-2 rounded-xl  '>
        <div className='mx-auto text-center mb-10 w-full bg-blue-700 rounded-tl-xl rounded-tr-xl'>
            <h1 className='text-3xl font-bold w-full p-3 text-white'>SCHOOL ADMISSION FORM</h1>
        </div>
      <form action="">
      <div className="form-info w-full ">
        <div className="student-info w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-5 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Student Information</h1>
          <div className="row-1 flex justify-between  lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5 ">
            <div className="student-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto  lg:mb-0 md:mb-5 sm:mb-5  mb-5 ">
            <label for="Student-Name" className='font-semibold mb-2'>Student Name <span className='text-red-600 font-bold'>*</span></label>
            <input id="Student-Name"type="text" className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Student Name ' min={4} max={50}/>
            </div>
            <div className="student-dob lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
              <label for="DOB" className='font-semibold mb-2'>Date Of Birth(DOB)<span className='text-red-600 font-bold'>*</span></label>
              <input type="date" id="DOB" className='border-2 p-5 h-10 rounded-md w-[100%] '  min={4} max={50}/>
            </div>
            <div className="father-gender lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-3'>Gender <span className='text-red-600 font-bold'>*</span></label>
            <div className='flex gap-5'>
               <label class="radio-inline"><input type="radio" name="gender" checked/>Male</label>
               <label class="radio-inline"><input type="radio" name="gender"/>Female</label>

              </div>
            </div>
          </div>
          <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
              <div className="mobile-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label for="Contact-Number" className='font-semibold mb-2'>Contact Number (Mobile/Phone)<span className='text-red-600 font-bold'>*</span></label>
                  <input type="number" id="Contact-Number" className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Contact Number ' min={4} max={50}/>
             </div>
              <div className="email-id lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="email">Email ID<span className='text-red-600 font-bold'>*</span></label>
                  <input type="email" id='email' className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Email ID ' min={4} max={50}/>
             </div>
             <div className="aadhar-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Aadhar-Number">Aadhar Number<span className='text-red-600 font-bold'>*</span> </label>
                  <input type="number" id="Aadhar-Number" className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Aadhar Number ' min={4} max={50}/>
             </div>
          </div>
          <div className="row-3 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="Nationality lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Nationality" className='font-semibold mb-2'>Nationality<span className='text-red-600 font-bold'>*</span></label>

                        <select id="religion" className='border-2  h-10 rounded-md '>
                           <option value="religion" className='p-2'>Select Nationality</option>
                           <option value="Indian">Indian</option>
                        </select>
            </div>
                 <div className="religion lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="religion" className='font-semibold mb-2'>Religion</label>

                        <select id="religion" className='border-2  h-10 rounded-md '>
                           <option value="religion" className='p-2'>Select Religion</option>
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

           <select id="blood-group" className='border-2 h-10 rounded-md'>
              <option value="blood-group" className='p-2'>Select Blood Group</option>
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
            <textarea id="permanentAddress" placeholder="Enter Permanent Address" className='border-2 p-5  rounded-md w-[100%] ' row={12} cols={20}></textarea>
            </div>
            <div className="current-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
          
               <label for="currentAddress" className='font-semibold mb-2'>Current Address:</label>
               <textarea id="currentAddress" placeholder="Enter Current Address" className='border-2 p-5  rounded-md w-[100%] '  row={12} cols={20}></textarea>
               <input type="checkbox" id="sameAddress" /> Same as Permanent Address
            </div>
          </div>
        </div>
        <div className="Parent/Guardian Information w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[28%] sm:mx-[15%] mx-[18%]'>Parent/Guardian Information</h1>
          <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
            <div className="Father-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Father-Name">Father’s Name <span className='text-red-600 font-bold'>*</span></label>
            <input type="text" className='border-2 p-5 h-10 rounded-md w-[100%]' id='Father-Name' placeholder='Enter Father’s Name ' min={4} max={50}/>
            </div>
            <div className="Mother-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Mother-Name">Mother’s Name <span className='text-red-600 font-bold'>*</span></label>
            <input type="text" id="Mother-Name" className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Mother’s Name ' min={4} max={50}/>
            </div>
            <div className="Guardian-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Guardian-Name">Guardian’s Name (if applicable) </label>
            <input type="text" id="Guardian-Name" className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Guardian’s Name ' min={4} max={50}/>
            </div>
            
          
          </div>
          <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="contact-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for='Contact-Number'>Parent/Guardian's Contact Number<span className='text-red-600 font-bold'>*</span> </label>
                  <input type="number" id='Contact-Number' className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Contact Number ' min={4} max={50}/>
             </div>
              <div className="email-id lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Email-ID">Parent/Guardian's Email ID<span className='text-red-600 font-bold'>*</span></label>
                  <input type="email" id="Email-ID" className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Email ID ' min={4} max={50}/>
             </div>
            <div className="Guardian-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
               <label className='font-semibold mb-2' for="Occupation">Parent/Guardian's Occupation</label>
               <input type="text" id="Occupation" className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Occupation ' min={4} max={50}/>
            </div>
          
         
          </div>
          <div className="row-3 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                  <div className="aadhar-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Income">Parent's Annual Income<span className='text-red-600 font-bold'>*</span> </label>
                  <input type="number" id="Income" className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Annual Income ' min={4} max={50}/>
                </div>
            
                <div className="parents-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                       <label for="permanentAddress" className='font-semibold mb-2'>Permanent Address<span className='text-red-600 font-bold'>*</span></label>
                      <textarea id="permanentAddress" placeholder="Enter Permanent Address" className='border-2 p-5  rounded-md w-[100%] ' row={12} cols={20}></textarea>
                </div>
                <div className="current-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
          
                       <label for="currentAddress" className='font-semibold mb-2'>Current Address:</label>
                       <textarea id="currentAddress" placeholder="Enter Current Address" className='border-2 p-5  rounded-md w-[100%] '  row={12} cols={20}></textarea>
                      <input type="checkbox" id="sameAddress" /> Same as Permanent Address
            </div>
          </div>
         
        </div>
        <div className="Academic-Information w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Academic Information</h1>
          <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
            <div className="Previous-School-Name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="School-Name">Previous School Name <span className='text-red-600 font-bold'>*</span></label>
            <input type="text" className='border-2 p-5 h-10 rounded-md w-[100%]' id="School-Name" placeholder='Enter Previous School Name ' min={4} max={50}/>
            </div>
            <div className="Last-Class-Attended lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Class-Attended">Last Class Attended <span className='text-red-600 font-bold'>*</span></label>
            <input type="text" className='border-2 p-5 h-10 rounded-md w-[100%] ' id="Class-Attended" placeholder='Enter Last Class Attended ' min={4} max={50}/>
            </div>
              <div className="Medium-of-Instruction lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Medium" className='font-semibold mb-2'>Medium of Instruction<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Medium" className='border-2  h-10 rounded-md '>
                           <option value="Medium" className='p-2'>Select Medium of Instruction</option>
                           <option value="Hindi">Hindi</option>
                           <option value="English">English</option>
                        </select>
            </div>
            
          
          </div>
          <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="Previous-Class-Division lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Previous-Class-Division" className='font-semibold mb-2'>Previous Class Division<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Previous-Class-Division" className='border-2  h-10 rounded-md '>
                           <option value="Previous-Class-Division" className='p-2'>Select Previous Class Division</option>
                           <option value="First Division">First Division</option>
                           <option value="Second Division">Second Division</option>
                           <option value="Third Division">Third Division</option>
                           <option value="Promoted">Promoted</option>
                        </select>
            </div>
              <div className="total-marks lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Total-Marks">Total Marks<span className='text-red-600 font-bold'>*</span></label>
                  <input type="number" id="Total-Marks" className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Total Marks ' min={4} max={50}/>
             </div>
            <div className="Obtained-Marks lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
               <label className='font-semibold mb-2' for="Obtained-Marks">Obtained Marks <span className='text-red-600 font-bold'>*</span></label>
               <input type="text" id="Obtained-Marks" className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Obtained Marks ' min={4} max={50}/>
            </div>
          
         
          </div>
          <div className="row-3 flex gap-12 ml-2 w-full mb-5 lg:flex-row md:flex-col sm:flex-col flex-col">
                  <div className="TC-No lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="TC">Transfer Certificate Registration Number<span className='text-red-600 font-bold'>*</span> </label>
                  <input type="number" id="TC" className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Registration Number' min={4} max={50}/>
                </div>
            
                <div className="Last-School-Address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                       <label for="Last-School-Address" className='font-semibold mb-2'>Last School Address<span className='text-red-600 font-bold'>*</span></label>
                      <textarea id="Last-School-Address" placeholder="Enter Last School Address" className='border-2 p-5  rounded-md w-[100%] ' row={12} cols={20}></textarea>
                </div>
                
          </div>
         
        </div>
        <div className="Course-Information w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[28%] sm:mx-[20%] mx-[18%]'>Class and Course Information</h1>
          <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="Academic-year lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Medium" className='font-semibold mb-2'>Academic Year<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Medium" className='border-2  h-10 rounded-md '>
                           <option value="Medium" className='p-2'>Select Academic Year</option>
                           <option value="Hindi">2024-25</option>
                           <option value="English">2025-26</option>
                        </select>
              </div>
          <div className="Class-Group lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Class-Group" className='font-semibold mb-2'>Class Group<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Class-Group" className='border-2  h-10 rounded-md '>
                           <option value="Class-Group" className='p-2'>Select Class Group</option>
                           <option value="Pre-primary">Pre-primary</option>
                           <option value="Primary">Primary</option>
                           <option value="Middle">Middle</option>
                           <option value="Secondary">Secondary</option>
                           <option value="Senior Secondary">Senior Secondary</option>
                        </select>
            </div>
            <div className="Standards lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Standards" className='font-semibold mb-2'>Standards for Admission<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Standards" className='border-2  h-10 rounded-md '>
                           <option value="Standards" className='p-2'>Select Standard for Admission</option>
                           <option value="Pre-Nursery">Pre-Nursery</option>
                           <option value="Nursery">Nursery</option>
                           <option value="LKG">LKG</option>
                           <option value="UKG">UKG</option>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                           <option value="6">6</option>
                           <option value="7">7</option>
                           <option value="8">8</option>
                           <option value="9">9</option>
                           <option value="10">10</option>
                           <option value="11">11</option>
                           <option value="12">12</option>
                        </select>
            </div>         
          </div>
          <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="Stream lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Stream" className='font-semibold mb-2'>Stream (if applicable for higher classes)<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Stream" className='border-2  h-10 rounded-md '>
                           <option value="Stream" className='p-2'>Select Stream</option>
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

                        <select id="Sibling-info" className='border-2  h-10 rounded-md '>
                           <option value="Sibling-info" className='p-2'>Select</option>
                           <option value="Yes">Yes</option>
                           <option value="No">No</option>
                        </select>
              </div>
              <div className="Sibling-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Sibling-number" className='font-semibold mb-2'>Select number of Sibling's in the school : </label>

                        <select id="Sibling-number" className='border-2  h-10 rounded-md '>
                           <option value="Sibling-number" className='p-2'>Select Number Of Sibling </option>
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
            <input type="text" id="Sibling-Name" className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Sibling Name ' min={4} max={50}/>
            </div>
            <div className="Sibling-Standards lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Sibling-Standards" className='font-semibold mb-2'>Sibling's Standard<span className='text-red-600 font-bold'>*</span></label>

                        <select id="Sibling-Standards" className='border-2  h-10 rounded-md '>
                           <option value="Sibling-Standards" className='p-2'>Select Sibling's Standard </option>
                           <option value="Pre-Nursery">Pre-Nursery</option>
                           <option value="Nursery">Nursery</option>
                           <option value="LKG">LKG</option>
                           <option value="UKG">UKG</option>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                           <option value="6">6</option>
                           <option value="7">7</option>
                           <option value="8">8</option>
                           <option value="9">9</option>
                           <option value="10">10</option>
                           <option value="11">11</option>
                           <option value="12">12</option>
                        </select>
            </div>
            <div className="Sibling-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Admission-Number">Sibling's Admission Number <span className='text-red-600 font-bold'>*</span></label>
            <input type="number" id="Admission Number" className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Sibling Admission Number' min={4} max={50}/>
            </div>
          
          </div>   
        </div>
        <div className="Transportation-Details w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Transportation Details</h1>
          <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
          <div className="Transportation-Details lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Transportation-Details" className='font-semibold mb-2'>Need for School Transport (Yes/No) : </label>

                        <select id="Transportation-Details" className='border-2  h-10 rounded-md '>
                           <option value="Transportation-Details" className='p-2'>Select</option>
                           <option value="Yes">Yes</option>
                           <option value="No">No</option>
                        </select>
              </div>
              <div className="Pick-Up lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Pick-Up">Pick-Up Point <span className='text-red-600 font-bold'>*</span></label>
            <input type="text" id="Pick-Up" className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Pick-Up Point ' min={4} max={50}/>
            </div>
            <div className="Drop-off lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
            <label className='font-semibold mb-2' for="Drop-off">Drop-off Point <span className='text-red-600 font-bold'>*</span></label>
            <input type="text" id="Drop-off" className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Drop-off Point ' min={4} max={50}/>
            </div>
             
               
          </div>
        
        </div>
        <div className="Documents-Required w-full p-5">
        <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[15%] sm:mx-[10%] mx-[8%]'>Documents Required (Uploads for Digital Form)</h1>
        <div className="row-1 flex  w-full mb-5">    
        <div className="Birth-Certificate w-[100%] flex lg:flex-row md:flex-row sm:flex-col flex-col lg:gap-10 md:gap-5 sm:gap-2 gap-2 items-center lg:mb-0 md:mb-5 sm:mb-5  mb-5">
           <label className='font-semibold mb-2 lg:w-[40%] md:lg:w-[80%] sm:w-[90%] w-[90%]' for="Birth-Certificate">Birth Certificate <span className='text-red-600 font-bold'>*</span></label>
           <input type="file" className='border-2 p-2 h-15 rounded-md lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto ' id="Birth-Certificate" />
         </div>
       </div>
       <div className="row-1 flex  w-full mb-5">    
        <div className="Transfer-Certificate w-[100%] flex lg:flex-row md:flex-row sm:flex-col flex-col lg:gap-10  md:gap-5 sm:gap-2 gap-2 items-center lg:mb-0 md:mb-5 sm:mb-5  mb-5">
           <label className='font-semibold mb-2 lg:w-[40%] md:lg:w-[80%] sm:w-[90%] w-[90%]' for="TC">Previous School's Transfer Certificate (TC)<span className='text-red-600 font-bold'>*</span></label>
           <input type="file" id="TC" className='border-2 p-2 h-15 rounded-md lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto ' />
         </div>
       </div>
       <div className="row-1 flex  w-full mb-5">    
        <div className="Previous-Report-Card w-[100%] flex lg:flex-row md:flex-row sm:flex-col flex-col lg:gap-10 md:gap-5 sm:gap-2 gap-2 items-center lg:mb-0 md:mb-5 sm:mb-5  mb-5">
           <label className='font-semibold mb-2 lg:w-[40%] md:lg:w-[80%] sm:w-[90%] w-[90%]' for="Report-Card">Previous School's Report Card <span className='text-red-600 font-bold'>*</span></label>
           <input type="file" id="Report-Card"className='border-2 p-2 h-15 rounded-md lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto ' />
         </div>
       </div>
       <div className="row-1 flex  w-full mb-5">    
        <div className="Aadhar-Card w-[100%] flex lg:flex-row md:flex-row sm:flex-col flex-col lg:gap-10 md:gap-5 sm:gap-2 gap-2 items-center lg:mb-0 md:mb-5 sm:mb-5  mb-5">
           <label className='font-semibold mb-2 lg:w-[40%] md:lg:w-[80%] sm:w-[90%] w-[90%]' for="Aadhar-Card">Aadhar Card (or other ID proof)<span className='text-red-600 font-bold'>*</span></label>
           <input type="file" id="Aadhar-Card" className='border-2 p-2 h-15 rounded-md lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto ' />
         </div>
       </div>
       <div className="row-1 flex  w-full mb-5">    
        <div className="Passport-sized-Photograph w-[100%] flex lg:flex-row md:flex-row sm:flex-col flex-col lg:gap-10 md:gap-5 sm:gap-2 gap-2 items-center lg:mb-0 md:mb-5 sm:mb-5  mb-5">
           <label className='font-semibold mb-2 lg:w-[40%] md:lg:w-[80%] sm:w-[90%] w-[90%]' for='Photograph'>Passport-sized Photograph <span className='text-red-600 font-bold'>*</span></label>
           <input type="file"  id='Photograph' className='border-2 p-2 h-15 rounded-md lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto ' />
         </div>
       </div>
  
       <div className="row-1 flex  w-full mb-5">    
        <div className="ID-Proof w-[100%] flex lg:flex-row md:flex-row sm:flex-col flex-col lg:gap-10 md:gap-5 sm:gap-2 gap-2 items-center lg:mb-0 md:mb-5 sm:mb-5  mb-5">
           <label className='font-semibold mb-2 lg:w-[40%] md:lg:w-[80%] sm:w-[90%] w-[90%]' for="ID-Proof">Parent/Guardian’s ID Proof (Aadhar, Passport, etc.)<span className='text-red-600 font-bold'>*</span></label>
           <input type="file" className='border-2 p-2 h-15 rounded-md lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto '  id="ID-Proof"/>
         </div>
       </div>  
        </div>
        <button className='lg:w-[50%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-60 md:mx-5 sm:mx-5 mx-5 mb-10 border-2 p-3 bg-blue-700 text-xl font-bold text-white rounded-lg'>Submit</button>
       
       </div>
      </form>
        </div>

  </div>
  )
}

export default OnlineAdmissionForm