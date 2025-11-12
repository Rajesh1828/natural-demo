import React from 'react'
import AboutHero from '../components/AboutComponents/AboutHero/AboutHero'
import OurStory from '../components/AboutComponents/OurStory/OurStory'
import OurVission from '../components/AboutComponents/OurStory/OurVission'
import Experiment from '../components/AboutComponents/OurStory/Experiment'
import Experiment2 from '../components/AboutComponents/OurStory/Experiment2'
import Refresh from '../components/AboutComponents/OurStory/Refresh'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <OurStory/>
      <OurVission/>
      <Experiment/>
      <Experiment2/>
      <Refresh/>
    </div>
  )
}

export default About