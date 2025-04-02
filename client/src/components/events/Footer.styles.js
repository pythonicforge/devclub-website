import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  font-family: "Mona Sans";
`;

export const FooterSocial =styled.p`
    font-size: 3rem;
    padding: 0;
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
    text-decoration: none;
    color: black;

    &:nth-child(2), &:nth-child(4){
    font-style: italic;
    margin-left: 10rem;
    }

    &:nth-child(1), &:nth-child(3){
    margin-right: 8rem;
    text-transform: uppercase;
    }
`

export const FooterText = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0.5rem 0;
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const FooterLink = styled.a`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;
