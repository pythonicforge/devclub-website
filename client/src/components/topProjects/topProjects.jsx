import React, { useState } from 'react'
import { TopProjectsSection, TopProjectsSectionHeader, TopProjectsSectionSubHeading, TopProjectsSectionHeading, TopProjectsSectionHeadingContainer, TopProjectsImageContainer, TopProjectsImage, TabSwitcher, Tab, ProjectsContainer, TabsContainer, ActiveTabHighlight } from './topProjects.styles'

import left_arrow from '../../../public/images/left_arrow.png'
import right_arrow from '../../../public/images/right_arrow.png'
import bannerImg from "../../../public/images/card_img.png"

import { ProjectCard } from '../cards'

const TopProjects = () => {
  const [activeTab, setActiveTab] = useState('active');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TopProjectsSection>
      <TopProjectsSectionHeader>
        <TopProjectsImageContainer className="hide-on-small-screens">
          <TopProjectsImage src={left_arrow} alt="Left Arrow"/>
        </TopProjectsImageContainer>
        <TopProjectsSectionHeadingContainer>
          <TopProjectsSectionSubHeading>Top projects</TopProjectsSectionSubHeading>
          <TopProjectsSectionHeading>Our <span>Code</span> Collection</TopProjectsSectionHeading>
        </TopProjectsSectionHeadingContainer>
        <TopProjectsImageContainer className="hide-on-small-screens">
          <TopProjectsImage src={right_arrow} alt="Right Arrow"/>
        </TopProjectsImageContainer>
      </TopProjectsSectionHeader>
      <TabSwitcher>
        <TabsContainer>
          <ActiveTabHighlight activeTab={activeTab} />
          <Tab onClick={() => handleTabClick('active')} active={activeTab === 'active'}>Active Projects</Tab>
          <Tab onClick={() => handleTabClick('past')} active={activeTab === 'past'}>Past Projects</Tab>
        </TabsContainer>
      </TabSwitcher>
      <ProjectsContainer>
        {activeTab === 'active' ? (
          <div> <ProjectCard title={"NXTUP"} banner={bannerImg} status={"running"} livePreview={"https://nxtup.in"} github={"https://github.com"} techStack={["python", "js"]}/> </div>
        ) : (
          <div> <ProjectCard title={"CapEval"} banner={bannerImg} status={"in progress"} livePreview={"LinkedIn"} github={"Hardik"} techStack={["python", "js"]}/> </div>
        )}
      </ProjectsContainer>
    </TopProjectsSection>
  )
}

export default TopProjects