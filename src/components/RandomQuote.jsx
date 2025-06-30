// src/components/RandomQuote.jsx
import React from 'react';
import quotes from './Quotes';
import './RandomQuote.css'; // ✅ Import CSS here

const RandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return (
    <div className="quote-box">
      <p>{randomQuote}</p>
    </div>
  );
};

export default RandomQuote;
