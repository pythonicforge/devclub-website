import React from 'react'

import { LandingContainer, ImageContainer, Image, ImageContainer2, Image2, HeroSubHeading, HeroHeadingLine1, HeroHeadingLine2, ImageContainer3, Image3, ImageContainer4, Image4 } from './landing.styles'

import universityLogo from '../../../public/images/university_logo.png'
import heading_3 from '../../../public/images/heading_3.png'
import landing_vector from '../../../public/images/landing_vector.png'
import landing_wormhole from '../../../public/images/landing_wormhole.png'

const Landing = () => {
  return (
   <LandingContainer>
    <ImageContainer>
        <Image src={universityLogo} alt='University Logo'/>
    </ImageContainer>
    <HeroSubHeading>
    Actively drinking a cup of tea & programming!
    </HeroSubHeading>
    <HeroHeadingLine1>
    Innovating
    </HeroHeadingLine1>
    <HeroHeadingLine2>
    Tech to a
    </HeroHeadingLine2>
    <ImageContainer2>
        <Image2 src={heading_3} alt='heading'/>
    </ImageContainer2>
    <ImageContainer3>
        <Image3 src={landing_vector} alt="Landing Vector"/>
    </ImageContainer3>
    <ImageContainer4>
        <Image4 src={landing_wormhole} alt="Wormhole"/>
    </ImageContainer4>
   </LandingContainer>
  )
}

export default Landing