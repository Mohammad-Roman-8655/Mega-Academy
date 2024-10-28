import React from 'react'

function DownloadAdmissionForm() {
  return (
    <div className='w-full '>
    <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
        <h1 className='text-center lg:text-2xl md:text-2xl sm:text-xl text-xl mx-auto text-white font-bold'>ADMISSION FORM</h1>
    </div>
    <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col  gap-4 items-center w-[100%] justify-center my-10'>
        <a  href="https://s3.amazonaws.com/powerdrill-s3/tmp_datasource_cache/image/a36f449e-83a9-475e-a58a-9f00e70901ea.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241027T064352Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Credential=AKIARLSQLXURHEIDN4OZ%2F20241027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=006ae5453a88d6c56205e052f384fdef13bc36e783b69008453135c1dfe35dee" className='lg:w-[30%] md:w-[30%] sm:w-[70%] w-[70%]  text-center border-2 hover:border-black rounded-lg p-5  text-xl  bg-blue-700 hover:bg-pink-300 text-white font-semibold hover:underline shadow-2xl '>Download Admission Form</a>

    </div>
</div>
  )
}

export default DownloadAdmissionForm