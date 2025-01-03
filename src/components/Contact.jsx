import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json"
const Contact = () => {
  return (
    <section className='bg-gray-800 mt-10 py-5 px-5 grid sm:grid-cols-2 grid-cols-1  ' >
        <div >
          <h2 className='text-red-500 text-xl font-semibold tracking-tighter'>Get in Touch</h2>
          <p className='text-slate-200'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
          <div className='flex my-3 gap-2 '>
          <FaFacebook className='size-7 text-red-500' />
          <AiFillInstagram className='size-7 text-red-500' />
          <FaLinkedin className='size-7 text-red-500'/>

          </div>
          <Lottie className='size-' animationData={contact} loop={true} />
        </div>
        
        <div className='bg-gray-100 rounded-lg px-5 py-20 max-h-fit my-auto '>
            <p className='text-4xl font-semibold text-gray-900 mb-5'>Contact Me</p>
           <form className='flex flex-col gap-3   '  action="#">
            <span className='flex flex-col'>
                 <label className='text-gray-900' htmlFor="name">Name</label>
             <input className='h-8 rounded-md shadow-md'  type="text" name="name"  />
            </span>

            
             <span className='flex flex-col'>
                 <label className='text-gray-900'  htmlFor="name">Email</label>
             <input className='h-8 rounded-md shadow-md'  type="email" name="name"  />
            </span>
            <span className='flex flex-col'>
                  <label className='text-gray-900' htmlFor="name">Message</label>
             <textarea className=' p-2 rounded-md shadow-md' name="message" placeholder='Enter your message' />
            </span>
            <button
        type="submit"
        className="bg-red-500 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-red-600"
      >
        Submit
      </button>

        </form> 
        </div>
        
    </section>
  )
}

export default Contact