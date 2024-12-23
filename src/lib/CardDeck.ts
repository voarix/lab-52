import Card from "./Card.ts";
import { ranks, suits } from "../constants.ts";

class CardDeck {
  private deck: Card[];

  constructor() {
    this.deck = [];

    for (const suit of Object.keys(suits)) {
      for (const rank of ranks) {
        const card = new Card(rank, suit);
        this.deck.push(card);
      }
    }
  }

  public getCard(): Card {
    const countDeck: number = this.deck.length;
    const randomCard: number = Math.floor(Math.random() * countDeck);

    return this.deck.splice(randomCard, 1)[0];
  }

  public getCards(howMany: number): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      cards.push(this.getCard());
    }
    return cards;
  }
}

export default CardDeck;
