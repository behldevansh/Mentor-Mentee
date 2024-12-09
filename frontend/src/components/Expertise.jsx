import React from 'react'
import { expertiseData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const Expertise = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='expertise'>
      <h1 className='text-6xl font-medium'>Find by Expertise</h1>
      <p className='sm:w-1/3 text-center text-m'>Simply browse through our extensive list of mentors, <br /> Match with them now.</p>

      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {expertiseData.map((item, index) => (
          <Link onClick={() => scrollTo(0,0)} className='flex flex-col items-center text-m cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/mentors/${item.speciality}`}>
            <img className='w-20 sm:w-24 mb-2' src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Expertise