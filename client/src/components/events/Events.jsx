import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { EventsWrapper, ClubHeading, ThingsHeading, Embla, EmblaContainer, EmblaSlide, TextContainer, ImageContainer, EmblaPagination, EmblaDot } from './Events.styles'; // Import styled-components

import event from '../../../public/images/event.png'

const eventSlides = [
  {
    title: 'Event 1',
    date: '2023-12-01',
    description: 'This is a brief description of Event 1.',
    image: event,
  },
  {
    title: 'Event 2',
    date: '2023-12-15',
    description: 'This is a brief description of Event 2.',
    image: event,
  },
  {
    title: 'Event 3',
    date: '2024-01-10',
    description: 'This is a brief description of Event 3.',
    image: event,
  },
];

const Events = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]); // Autoplay with 3-second delay

  useEffect(() => {
    if (!emblaApi) return;

    const paginationDots = document.querySelectorAll('.embla__dot');

    const updatePagination = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      paginationDots.forEach((dot, index) => {
        dot.classList.toggle('is-selected', index === selectedIndex);
      });
    };

    const onDotClick = (index) => {
      emblaApi.scrollTo(index);
    };

    paginationDots.forEach((dot, index) => {
      dot.addEventListener('click', () => onDotClick(index));
    });

    emblaApi.on('select', updatePagination);
    updatePagination(); // Initialize pagination on mount

    return () => {
      emblaApi.off('select', updatePagination);
      paginationDots.forEach((dot, index) => {
        dot.removeEventListener('click', () => onDotClick(index));
      });
    };
  }, [emblaApi]);

  return (
    <EventsWrapper>
      <ClubHeading>Club Events</ClubHeading>
      <ThingsHeading>Things for you ❤️</ThingsHeading>
      <Embla>
        <div className="embla__viewport" ref={emblaRef}>
          <EmblaContainer>
            {eventSlides.map((slide, index) => (
              <EmblaSlide key={index}>
                <TextContainer>
                  <h3>{slide.title}</h3>
                  <p className="event-date">Scheduled on {slide.date}</p>
                  <p>{slide.description}</p>
                  <button>Register Now</button>
                </TextContainer>
                <ImageContainer>
                  <img src={slide.image} alt={slide.title} />
                </ImageContainer>
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </div>
        <EmblaPagination>
          {eventSlides.map((_, index) => (
            <EmblaDot key={index} className="embla__dot"></EmblaDot>
          ))}
        </EmblaPagination>
      </Embla>
    </EventsWrapper>
  );
};

export default Events;