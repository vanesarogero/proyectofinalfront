import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

import React, { useState } from 'react';

import slider1 from './slider1.jpg'
import slider2 from './slider2.jpg'
import slider3 from './slider3.png'

function HomeCarousel() {
    const items = [
        { 
          id: 1,
          altText: 'Joyas',
          caption: 'Las mejores del mercado.',
          img: slider1
        },
        {
          id: 2,
          altText: 'Ropa de mujer y hombre',
          caption: 'Productos muy selectos',
          img: slider2
        },
        {
          id: 3,
          altText: 'Electrónica',
          caption: 'Últimas novedades del mercado',
          img: slider3
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
          <img className='w-100 carousel-img' src={item.img}/>
          <CarouselCaption
            className="text-danger"
            captionText={item.caption}
            captionHeader={item.altText}
          />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {`.custom-tag {
                max-width: 100%;
                background: black;
            }`}
        </style>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    );
}

export default HomeCarousel;