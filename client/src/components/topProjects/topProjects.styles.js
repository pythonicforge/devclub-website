import styled from "styled-components";

export const TopProjectsSection = styled.div`
  position: relative;
  z-index: 2;
  height: 800px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  overflow-x: hidden; // Ensure no horizontal overflow
  background: url('../../../public/images/bg_hero2.png');
  background-size: 50% 50%;
  background-repeat: no-repeat;
  background-position: center center;

  @media (max-width: 1024px) {
    background-size: 60% 60%;
    height: 600px;
  }

  @media (max-width: 768px) {
    background-size: 70% 70%;
  }

  @media (max-width: 480px) {
    background-size: 80% 80%;
  }
`;

export const TopProjectsSectionSubHeading = styled.p`
  font-family: "American Typewriter";
`;

export const TopProjectsSectionHeading = styled.h1`
  font-family: ${({ theme }) => theme.typography.font};
  margin: -1rem 0 0 0;

  span {
    font-style: italic;
    position: relative;
  }

  span::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0.2rem; // Adjust the spacing as needed
    width: 100%;
    height: 1px; // Adjust the thickness as needed
    background-color: ${({ theme }) => theme.colors.text}; // Use the text color for the underline
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TopProjectsSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;

  @media (max-width: 1100px) {
    justify-content: center;
  }

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TopProjectsSectionHeadingContainer = styled.div`
  text-align: center;
`;

export const TopProjectsImageContainer = styled.div`
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const TopProjectsImage = styled.img`
  width: 580px;
  height: auto;

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const TabSwitcher = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const TabsContainer = styled.div`
  display: flex;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.colors.heading};
  width: fit-content;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Tab = styled.button`
  background: transparent;
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: color 0.3s;
  font-family: "American TypeWriter";
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.sizes.md};
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const ActiveTabHighlight = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ activeTab }) => (activeTab === 'active' ? '0' : '50%')};
  width: 50%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
  transition: left 0.3s;
  z-index: 0;

  @media (max-width: 768px) {
    left: ${({ activeTab }) => (activeTab === 'active' ? '0' : '50%')};
    width: 50%;
  }
`;

export const ProjectsContainer = styled.div`
  margin-top: 2rem;
  // Add any additional styles for the projects container
`;