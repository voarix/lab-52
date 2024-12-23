import React from "react";
import { suits } from '../../constants.ts';

interface CardProps {
  rank: number | string;
  suit: string;
}

const Card: React.FC<CardProps> = ({ rank, suit }) => {
  return (
    <span className={`card rank-${rank} ${suit}`}>
      <span className="rank" style={{ textTransform: "uppercase" }}>
        {rank}
      </span>
      <span className="suit">{suits[suit]}</span>
    </span>
  );
};

export default Card;
