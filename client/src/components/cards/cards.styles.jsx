import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  max-width: 500px;
  max-height: 500px;
  font-family: ${({ theme }) => theme.typography.font};
  
  @media (max-width: 768px) {
    margin: 10px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    margin: 5px;
    padding: 10px;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    border-radius: 5px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin: 0 0 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 0 0.5rem;
  }
  }
`;

export const StatusOuterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: -1rem 0 0 1rem;
`;

export const StatusText = styled.p`
  font-size: 18px;
`;

export const TechStack = styled.div`
    margin: -1.5rem 0 0 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const TechLogoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    margin: 0;
`

export const TechStackText = styled.p`
  text-transform: uppercase;
//   border: 1px solid black;
  font-weight: 600;
`;

export const TechLogo = styled.p`
  color: black;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1rem 0 1rem;

  @media (max-width: 768px) {
    // flex-direction: column;
    // align-items: stretch;
    gap: 10px;
    // margin: 1rem 0 0 0;
  }
`;

export const CapsuleButton = styled.a`
  padding: 10px 20px;
  border-radius: 50px;
  background-color:  ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  margin-right: 10px;

  @media (max-width: 768px) {
    padding: 8px 16px;
    margin-right: 0;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;

export const GithubLink = styled.a`
  color: #333;
  text-decoration: none;
`;