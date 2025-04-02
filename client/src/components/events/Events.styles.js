import styled from 'styled-components';
import bgImg from '../../../public/images/Canopus_2.png'

export const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem 0rem;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ClubHeading = styled.p`
  font-family: "American Typewriter";
  font-size: 1rem;
  text-align: center;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust font size for smaller screens */
  }
`;

export const ThingsHeading = styled.p`
  font-family: "Mona Sans";
  font-size: 2rem;
  padding: 0;
  margin: 0 0 2rem 0rem;
  text-align: center;
  font-weight: 600;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Adjust font size for smaller screens */
  }
`;

export const Embla = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  min-height: 400px;
  margin: 0 auto;
  position: relative;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add drop shadow */

  @media (max-width: 768px) { /* Add margin on smaller screens */
    border-radius: 1rem; /* Reduce border radius for smaller screens */
  }
`;

export const EmblaContainer = styled.div`
  display: flex;
  min-height: 350px;
  width: 100%;
`;

export const EmblaSlide = styled.div`
  position: relative;
  flex: 0 0 100%; /* Ensure each slide takes 100% width */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack content vertically on smaller screens */
    text-align: center; /* Add margin to the sides for smaller screens */
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 1rem;
  font-family: "American Typewriter";

  h3 {
    font-family: "Mona Sans";
    font-size: 1.8rem;
    margin-bottom: -0.5rem;

    @media (max-width: 768px) {
      font-size: 1.5rem; /* Adjust heading size for smaller screens */
    }
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem; /* Adjust text size for smaller screens */
    }
  }

  .event-date {
    font-size: 0.75rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 0.7rem; /* Adjust date size for smaller screens */
    }
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    font-family: "American Typewriter";
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem; /* Adjust button size for smaller screens */
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 200px;
    border-radius: 10px;
    object-fit: cover;

    @media (max-width: 768px) {
      max-height: 150px; /* Adjust image size for smaller screens */
    }
  }

  @media (max-width: 768px) {
    justify-content: center; /* Center the image on smaller screens */
  }
`;

export const EmblaPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  position: relative;
  bottom: 0; /* Fix pagination below the slides */ */
`;

export const EmblaDot = styled.button`
  all: unset;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background: #e0e0e0;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  flex-shrink: 0;

  &.is-selected {
    background: #007bff;
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;
