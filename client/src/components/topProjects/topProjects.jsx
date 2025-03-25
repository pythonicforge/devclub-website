import React, { useState } from 'react'
import { TopProjectsSection, TopProjectsSectionHeader, TopProjectsSectionSubHeading, TopProjectsSectionHeading, TopProjectsSectionHeadingContainer, TopProjectsImageContainer, TopProjectsImage, TabSwitcher, Tab, ProjectsContainer, TabsContainer, ActiveTabHighlight } from './topProjects.styles'

import left_arrow from '../../../public/images/left_arrow.png'
import right_arrow from '../../../public/images/right_arrow.png'

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
          <div> {/* Render active projects here */} </div>
        ) : (
          <div> {/* Render past projects here */} </div>
        )}
      </ProjectsContainer>
    </TopProjectsSection>
  )
}

export default TopProjects