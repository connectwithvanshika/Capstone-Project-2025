import React from 'react';
import './FeatureCarousel.css';
import yoga from '../assets/yoga.jpeg';
import music from '../assets/music.jpeg'
import nature from '../assets/brownnature.jpeg'
import pomodoro from '../assets/pomodoro.jpeg'
import Journal from '../assets/Journal.jpeg'

const features = [
  {
    image: yoga,
    title: 'Relaxing Yoga Tutorial.',
    description: 'Guided yoga sessions designed to stretch, calm, and relieve stress. Perfect for any experience level, helping you find inner peace',
    link: '#'
  },
  {
    image: music,
    title: 'Soothing Music.',
    description: 'A collection of calming music and nature sounds to create a peaceful atmosphere, perfect for relaxation or focus',
    link: '#'
  },
  {
    image: Journal,
    title: 'Mood Journal.',
    description: 'Track your emotions daily to gain insights into your mental health and cultivate mindfulness for a balanced life.',
    link: '#'
  },
  {
    image: pomodoro,
    title: 'Focus Timer.',
    description:'Boost your concentration and work peacefully using our calming Pomodoro timer.',
    link: '#'
  },
  {
    image: nature,
    title: 'Relaxing Visuals.',
    description: 'Immerse yourself in calming nature visuals to reduce stress and create a tranquil environment wherever you are.',
    link: '#'
  }
];

const FeatureCarousel = () => {
  // sdfsadfsdf
  return (
    <div className="carousel-section">
      <h2 className="carousel-title">Featured Wellness Picks</h2>
      <div className="carousel-container">
        {features.map((item, index) => (
          <div className="carousel-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} className="cta-btn">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
