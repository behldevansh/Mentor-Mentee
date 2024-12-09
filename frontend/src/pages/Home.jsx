import React from 'react'
import Header from '../components/Header'
import Expertise from '../components/expertise'
import TopMentors from '../components/TopMentors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <Expertise />
      <TopMentors/>
      <Banner/>
    </div>
  )
}

export default Home
