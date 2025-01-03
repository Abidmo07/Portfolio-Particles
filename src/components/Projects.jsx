import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <section className='w-full bg-gray-900 py-4 px-5  '>
        <p className='text-white text-2xl font-bold border-b-2 border-rose-600 w-fit mb-3'>My Projects</p>
     <div className='grid sm:grid-cols-2  md:grid-cols-3 gap-6'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
     </div>
    
    </section>
  )
}

export default Projects