import "./App.css";
import Card from "./components/Card/Card.tsx";
import { suits, ranks } from "./constants.ts";
import CardDeck from "./lib/CardDeck.ts";

const cardDeck = new CardDeck();
console.log(cardDeck.getCards(5));

const App = () => {
  return (
    <>
      <Card rank={ranks[11]} suit={suits.diams} />
    </>
  );
};

export default App;
