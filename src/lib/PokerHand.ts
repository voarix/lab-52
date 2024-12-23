import Card from './Card.ts';

class PokerHand {
  private cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  private getRankCounts() {
    const rankCount : {[key : string] : number} = {};
    this.cards.forEach((card) => {
      rankCount[card.rank] = (rankCount[card.rank] || 0) + 1;
    });
    return rankCount;
  }

  private getOnePair(): boolean {
    const rankCount = this.getRankCounts();
    return Object.values(rankCount).includes(2);
  }

  private getTwoPair(): boolean {
    const rankCount = this.getRankCounts();
    const pairs = Object.values(rankCount).filter((count) => count === 2);
    return pairs.length === 2;
  }

  private getThreeOfAKind(): boolean {
    const rankCount = this.getRankCounts();
    return Object.values(rankCount).includes(3);
  }

  private getFlush(): boolean {
    const suits = this.cards.map((card) => card.suit);
    for(let i = 0; i < suits.length - 1; i++) {
      if(suits[i] !== suits[i+1]) {
        return false;
      }
    }
    return true;
  }

  public getOutcome(): string {
    if (this.getOnePair()) {
      return 'Одна пара';
    } else if (this.getTwoPair()) {
      return 'Две пары';
    } else if (this.getThreeOfAKind()) {
      return 'Тройка';
    } else if (this.getFlush()) {
      return 'Флэш';
    } else {
      return 'Старшая карта';
    }
  }
}

export default PokerHand;