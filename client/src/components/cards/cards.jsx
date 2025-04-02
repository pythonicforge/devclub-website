import React from 'react';
// import PropTypes from 'prop-types';
import {
    CardContainer,
    BannerImage,
    Title,
    TechStack,
    TechLogo,
    ButtonContainer,
    CapsuleButton,
    GithubLink,
    StatusOuterContainer,
    StatusText,
    TechStackText,
    TechLogoContainer
} from './cards.styles';
import { Status } from '../status';

const ProjectCard = ({ banner, title, status, techStack, livePreview, github }) => {

    return (
        <CardContainer>
            <BannerImage src={banner} alt={`${title} banner`} />
            <Title>{title}</Title>
            <StatusOuterContainer>
                <StatusText>Current Status</StatusText>
                <Status status={status} />
            </StatusOuterContainer>
            <TechStack>
                <TechStackText>Tech Stack :</TechStackText>
                <TechLogoContainer>
                    {techStack.map((tech, index) => (
                        <TechLogo key={index}>
                            {tech.charAt(0).toUpperCase() + tech.slice(1)}
                            {index < techStack.length - 1 && ', '}
                        </TechLogo>
                    ))}
                </TechLogoContainer>
            </TechStack>
            <ButtonContainer>
                <CapsuleButton href={livePreview} target="_blank" rel="noopener noreferrer">
                    Live Preview
                </CapsuleButton>
                <GithubLink href={github} target="_blank" rel="noopener noreferrer">
                    GitHub
                </GithubLink>
            </ButtonContainer>
        </CardContainer>
    );
};

export default ProjectCard;