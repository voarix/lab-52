import Card from "./Card.ts";
import { ranks, suits } from "../constants.ts";

class CardDeck {
  public deck: Card[];

  constructor() {
    this.deck = [];

    for (const suit in suits) {
      for (const rank in ranks) {
        const card = new Card(rank, suits[suit]);
        this.deck.push(card);
      }
    }
  }

  getCard(): Card {
    const countDeck: number = this.deck.length;
    const randomCard: number = Math.floor(Math.random() * countDeck);

    return this.deck.splice(randomCard, 1)[0];
  }

  getCards(howMany: number): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      cards.push(this.getCard());
    }
    return cards;
  }
}

export default CardDeck;
