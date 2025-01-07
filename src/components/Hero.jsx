import React from 'react'
import borz from '../assets/borz1-removebg-preview.png'
import facebook50  from '../assets/fb50.png'
import insta50  from '../assets/insta50.png'
import git50  from '../assets/git50.png'
import link50  from '../assets/link50.png'




const Hero = () => {
  return (
    <section className='flex  p-10 items-center w-screen  '>
        <div className='flex flex-col gap-6 py-5 '>
          <span className='text-black text-6xl font-bold'>Hi There,</span>
          <span className='flex gap-2'> <p className='text-6xl text-black font-bold'>I'm Ramzi</p> <p className='text-6xl text-red-500 font-bold'>Borz</p></span>
          <p className='text-black font-medium'>Web Developer</p>
          <p className='w-3/5'>I'm a junior developer and computer science student at ESI SBA, graduating in 2026. I specialize in building modern web applications using React, Laravel, and Tailwind CSS. Passionate about learning and creating user-friendly solutions, I continuously enhance my skills through projects and collaboration.</p>
        </div>
        <div className=' flex items-center gap-10' >
            <div>
                <img src={borz} alt="" />
            </div>
           
           <div className='bg-gray-100 px-3 py-6 rounded-3xl w-40 flex flex-col gap-2  '>
            <a  href="">
            <img    src={facebook50} alt="facebook" />
            </a>
            <a href=""><img src={insta50} alt="instagram" /></a>
            <a href=""><img src={git50} alt="LinkedIn" /></a>
            <a href=""><img src={link50} alt="GitHub" /></a>
           </div>
        </div>

    </section>
  )
}

export default Hero