import "./App.css";
import Card from "./components/Card/Card.tsx";
import CardType from "./lib/Card.ts";
import CardDeck from "./lib/CardDeck.ts";
import { useState } from "react";
import PokerHand from "./lib/PokerHand.ts";

const App = () => {
  const [hand, setHand] = useState<CardType[]>([]);
  const [combination, setCombination] = useState<string>("");
  const [deck, setDeck] = useState<CardDeck>(new CardDeck());

  const createPack = () => {
    const newHand: CardType[] = deck.getCards(5);
    setHand(newHand);

    const pokerHand = new PokerHand(newHand);
    setCombination(pokerHand.getOutcome());
  };

  const clearDeck = () => {
    setDeck(new CardDeck());
    setHand([]);
    setCombination("");
  };

  return (
    <>
      <p>Количество карт в колоде: {deck.deck.length}</p>
      <p>Комбинация: {combination}</p>
      {deck.deck.length >= 5 ? (
        <button type="button" onClick={createPack}>
          Раздать карты
        </button>
      ) : (
        <button type="button" onClick={clearDeck}>
          Восполнить колоду
        </button>
      )}

      {hand.length > 0 && (
        <div className="playingCards faceImages" style={{ marginTop: "20px" }}>
          {hand.map((card, index) => (
            <Card key={index} rank={card.rank} suit={card.suit} />
          ))}
        </div>
      )}
    </>
  );
};

export default App;
