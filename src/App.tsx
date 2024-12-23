import "./App.css";
import Card from "./components/Card/Card.tsx";
import CardType from "./lib/Card.ts";
import CardDeck from "./lib/CardDeck.ts";
import React, { useState } from "react";

const App = () => {
  const [hand, setHand] = useState<CardType[]>([]);

  const createPack = () => {
    const pack = new CardDeck();
    const newHand: CardType[] = pack.getCards(5);
    setHand(newHand);
    console.log(newHand);
  };

  let content: React.ReactNode;

  if (hand.length === 0) {
    content = <button type="button" onClick={createPack}>Раздать карты</button>;
  } else {
    content = (
      <>
        <button type="button" onClick={createPack}>
          Раздать карты
        </button>

        <div className="playingCards faceImages">
          {hand.map((card, index) => (
            <Card key={index} rank={card.rank} suit={card.suit} />
          ))}
        </div>
      </>
    );
  }

  return content;
};

export default App;
