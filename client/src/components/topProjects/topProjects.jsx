import React, { useState } from 'react';
import { TopProjectsSection, TopProjectsSectionHeader, TopProjectsSectionSubHeading, TopProjectsSectionHeading, TopProjectsSectionHeadingContainer, TopProjectsImageContainer, TopProjectsImage, TabSwitcher, Tab, ProjectsContainer, TabsContainer, ActiveTabHighlight } from './topProjects.styles';
import left_arrow from '../../../public/images/left_arrow.png';
import right_arrow from '../../../public/images/right_arrow.png';
import bannerImg from "../../../public/images/card_img.png";
import { ProjectCard } from '../cards';

const projectsData = {
  active: [
    { title: "NXTUP", banner: bannerImg, status: "running", livePreview: "https://nxtup.in", github: "https://github.com", techStack: ["python", "js"] }, { title: "NXTUP", banner: bannerImg, status: "running", livePreview: "https://nxtup.in", github: "https://github.com", techStack: ["python", "js"] }, { title: "NXTUP", banner: bannerImg, status: "running", livePreview: "https://nxtup.in", github: "https://github.com", techStack: ["python", "js"] }, { title: "NXTUP", banner: bannerImg, status: "running", livePreview: "https://nxtup.in", github: "https://github.com", techStack: ["python", "js"] }
  ],
  past: [
    { title: "CapEval", banner: bannerImg, status: "in progress", livePreview: "LinkedIn", github: "Hardik", techStack: ["python", "js"] }
  ]
};

const TopProjects = () => {
  const [activeTab, setActiveTab] = useState('active');

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <TopProjectsSection>
      <TopProjectsSectionHeader>
        <TopProjectsImageContainer className="hide-on-small-screens">
          <TopProjectsImage src={left_arrow} alt="Left Arrow" />
        </TopProjectsImageContainer>
        <TopProjectsSectionHeadingContainer>
          <TopProjectsSectionSubHeading>Top projects</TopProjectsSectionSubHeading>
          <TopProjectsSectionHeading>Our <span>Code</span> Collection</TopProjectsSectionHeading>
        </TopProjectsSectionHeadingContainer>
        <TopProjectsImageContainer className="hide-on-small-screens">
          <TopProjectsImage src={right_arrow} alt="Right Arrow" />
        </TopProjectsImageContainer>
      </TopProjectsSectionHeader>
      <TabSwitcher>
        <TabsContainer>
          <ActiveTabHighlight activeTab={activeTab} />
          {Object.keys(projectsData).map((tab) => (
            <Tab key={tab} onClick={() => handleTabClick(tab)} active={activeTab === tab}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
            </Tab>
          ))}
        </TabsContainer>
      </TabSwitcher>
      <ProjectsContainer>
        {projectsData[activeTab].map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectsContainer>
    </TopProjectsSection>
  );
};

export default TopProjects;