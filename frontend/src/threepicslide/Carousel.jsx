import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { id: 1, content: 'Card 1', image: 'https://via.placeholder.com/150/FF5733' },
    { id: 2, content: 'Card 2', image: 'https://via.placeholder.com/150/33FF57' },
    { id: 3, content: 'Card 3', image: 'https://via.placeholder.com/150/3357FF' },
    { id: 4, content: 'Card 4', image: 'https://via.placeholder.com/150/F733FF' },
    { id: 5, content: 'Card 5', image: 'https://via.placeholder.com/150/FF5733' },
    { id: 6, content: 'Card 6', image: 'https://via.placeholder.com/150/33FF57' },
  ];

  const next = () => {
    if (currentIndex < Math.ceil(cards.length / 3) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={prev}>‹</button>
      <div className="carousel-content">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="carousel-card">
              <img src={card.image} alt={card.content} className="card-image" />
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button right" onClick={next}>›</button>
    </div>
  );
};

export default Carousel;
