import React from 'react';

function getRandomSpeed() {
  return 0.8 + Math.random() * 0.7;
}

export function LetterDisplay({ word, color = "#e0e1dd" }) {
  return (
    <>
      {word.split('').map((char, i) => (
        <div
          key={i}
          className="letter text-6xl font-bold xs:text-[90px] md:text-[110px]"
          data-speed={getRandomSpeed()}
          style={{ color }}
        >
          {char}
        </div>
      ))}
    </>
  );
}
