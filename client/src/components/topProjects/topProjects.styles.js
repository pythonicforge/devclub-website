import styled from "styled-components";

export const TopProjectsSection = styled.div`
  background: rgba(255, 255, 255, 0.1) url('../../../public/images/bg_hero2.png') no-repeat center center;
  backdrop-filter: blur(1px);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  overflow-x: hidden;
  background-size: 50% 50%;

  @media (max-width: 1024px) {
    background-size: 60% 60%;
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
  margin: -1rem 0 0;

  span {
    font-style: italic;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0.2rem;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.text};
    }
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
  width: 100%;
  max-width: 580px;
  height: auto;

  @media (max-width: 1024px) {
    max-width: 300px;
  }

  @media (max-width: 768px) {
    max-width: 200px;
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
  margin: 0 auto;
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
`;

export const ProjectsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(415px, 1fr));
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;