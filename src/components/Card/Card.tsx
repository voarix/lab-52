import React from 'react';

interface CardProps {
  rank: number | string;
  suit: string;
}

const Card: React.FC<CardProps> = ({ rank, suit }) => {
  return (
    <span className={`card rank-${rank} ${suit}`}>
      <span className="rank" style={{ textTransform: 'uppercase' }}>{rank}</span>
      <span className="suit">{suit}</span>
    </span>
  );
};



export default Card;
