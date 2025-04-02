import styled, { keyframes } from 'styled-components';

export const MovingTextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 0;
  background: none;
  width: 100%;
  position: relative;
  margin: 5rem 0rem;
`;

export const MovingText = styled.div`
  display: flex;
  white-space: nowrap;
  font-size: 3rem;
  font-weight: bold;
  font-family: "Mona Sans";
  color: #818181;

  & > span {
    display: inline-block;
    padding-right: 2rem; /* Add spacing between repeated text */
  }

  &:nth-child(2) {
    margin-left: -240rem; /* Shift the second MovingText element slightly to the left */
    color: transparent; /* Make the text transparent */
  -webkit-text-stroke: 1px #818181; /* Add the outline effect */

  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
`;
