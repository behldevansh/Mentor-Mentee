import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Mentors = () => {

  const { speciality } = useParams()
  const [ filterMentor, setFilterMentor] = useState([])
  const navigate = useNavigate()
  const { mentors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterMentor(mentors.filter(men => men.speciality === speciality))
    } else {
      setFilterMentor(mentors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [mentors, speciality])

  return (
    <div>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={() => speciality === 'Blockchain' ? navigate('/mentors') : navigate('/mentors/Blockchain')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Blockchain' ? 'bg-indigo-100 text-black' : ''}`}>Blockchain</p>
          <p onClick={() => speciality === 'Web-Development' ? navigate('/mentors') : navigate('/mentors/Web-Development')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Web-Development' ? 'bg-indigo-100 text-black' : ''}`}>Web-Development</p>
          <p onClick={() => speciality === 'App-Development' ? navigate('/mentors') : navigate('/mentors/App-Development')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'App-Development' ? 'bg-indigo-100 text-black' : ''}`}>App-Development</p>
          <p onClick={() => speciality === 'Machine-Learning' ? navigate('/mentors') : navigate('/mentors/Machine-Learning')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Machine-Learning' ? 'bg-indigo-100 text-black' : ''}`}>Machine-Learning</p>
          <p onClick={() => speciality === 'Data-Science' ? navigate('/mentors') : navigate('/mentors/Data-Science')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Data-Science' ? 'bg-indigo-100 text-black' : ''}`}>Data-Science</p>
          <p onClick={() => speciality === 'Cybersecurity' ? navigate('/mentors') : navigate('/mentors/Cybersecurity')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Cybersecurity' ? 'bg-indigo-100 text-black' : ''}`}>Cybersecurity</p>
          <p
  onClick={() =>
    speciality === 'Cloud-Computing'
      ? navigate('/mentors')
      : navigate('/mentors/Cloud-Computing')
  }
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
    speciality === 'Cloud-Computing' ? 'bg-indigo-100 text-black' : ''
  }`}
>
  Cloud Computing
</p>

<p
  onClick={() =>
    speciality === 'Game-Development'
      ? navigate('/mentors')
      : navigate('/mentors/Game-Development')
  }
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
    speciality === 'Game-Development' ? 'bg-indigo-100 text-black' : ''
  }`}
>
  Game Development
</p>

<p
  onClick={() =>
    speciality === 'UI-UX-Design'
      ? navigate('/mentors')
      : navigate('/mentors/UI-UX-Design')
  }
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
    speciality === 'UI-UX-Design' ? 'bg-indigo-100 text-black' : ''
  }`}
>
  UI/UX Design
</p>

<p
  onClick={() =>
    speciality === 'Internet-of-Things'
      ? navigate('/mentors')
      : navigate('/mentors/Internet-of-Things')
  }
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
    speciality === 'Internet-of-Things' ? 'bg-indigo-100 text-black' : ''
  }`}
>
  Internet of Things
</p>

<p
  onClick={() =>
    speciality === 'Embedded-Systems'
      ? navigate('/mentors')
      : navigate('/mentors/Embedded-Systems')
  }
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
    speciality === 'Embedded-Systems' ? 'bg-indigo-100 text-black' : ''
  }`}
>
  Embedded Systems
</p>

<p
  onClick={() =>
    speciality === 'Augmented-Reality'
      ? navigate('/mentors')
      : navigate('/mentors/Augmented-Reality')
  }
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
    speciality === 'Augmented-Reality' ? 'bg-indigo-100 text-black' : ''
  }`}
>
  Augmented Reality
</p>

<p
  onClick={() =>
    speciality === 'DevOps'
      ? navigate('/mentors')
      : navigate('/mentors/DevOps')
  }
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
    speciality === 'DevOps' ? 'bg-indigo-100 text-black' : ''
  }`}
>
  DevOps
</p>

<p
  onClick={() =>
    speciality === 'Digital-Marketing'
      ? navigate('/mentors')
      : navigate('/mentors/Digital-Marketing')
  }
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
    speciality === 'Digital-Marketing' ? 'bg-indigo-100 text-black' : ''
  }`}
>
  Digital Marketing
</p>

        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterMentor.map((item, index) => (
              <div onClick={() => navigate(`/match/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Mentors