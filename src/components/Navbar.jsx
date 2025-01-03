import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between w-screen p-3 border-b backdrop-blur fixed  '>
        <span className='flex'>Ramzi.<p>Dev</p> </span>
        <div className='flex justify-evenly  gap-3  '>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </div>

    </div>
  )
}

export default Navbar