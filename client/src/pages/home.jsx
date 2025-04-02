import React from 'react'
import Landing from '../components/landing/landing'
import TopProjects from '../components/topProjects/topProjects'
import Events from '../components/events'

const Home = () => {
  return (
    <>
      <div data-aos="fade-up">
        <Landing />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <TopProjects />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <Events />
      </div>
    </>
  )
}

export default Home