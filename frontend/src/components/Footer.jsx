import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Hey so if you have reached till here , I hope you like this project which you gave me as an assignment, I am adding my contact info too , do connect and I hope I will get an Intern :D</p>
        </div>

        <div>
  <p className='text-xl font-medium mb-5'>Contact Info</p>
  <ul className='flex flex-col gap-2 text-gray-600'>
    <li>
      <a
        href='https://www.linkedin.com/in/devansh-behl-127756213/'
        target='_blank'
        className='text-blue-500 hover:underline'
      >
        LinkedIn
      </a>
    </li>
    <li>
      <a
        href='https://github.com/behldevansh'
        target='_blank'
        className='text-blue-500 hover:underline'
      >
        GitHub
      </a>
    </li>
  </ul>
</div>

        <div>
          <p className='text-xl font-medium mb-5'>Contact Me</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-7838860643</li>
            <li>heydevanshbehl@gmail.com</li>
          </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>@behldevansh</p>
      </div>

    </div>
  )
}

export default Footer