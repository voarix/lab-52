import Card from "./Card.ts";

class PokerHand {
  private cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  private getRankCounts() {
    const rankCount: { [key: string]: number } = {};
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
    for (let i = 0; i < suits.length - 1; i++) {
      if (suits[i] !== suits[i + 1]) {
        return false;
      }
    }
    return true;
  }

  private getStraight(): boolean {
    const rankMap: { [key: string]: number } = {
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "10": 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };

    const ranks = this.cards
      .map((card) => rankMap[card.rank])
      .sort((a, b) => a - b);

    if (
      ranks[0] === 2 &&
      ranks[1] === 3 &&
      ranks[2] === 4 &&
      ranks[3] === 5 &&
      ranks[4] === 14
    ) {
      return true;
    }

    for (let i = 0; i < ranks.length - 1; i++) {
      if (ranks[i] + 1 !== ranks[i + 1]) {
        return false;
      }
    }
    return true;
  }

  private getRoyalFlush(): boolean {
    if (this.getFlush() && this.getStraight()) {
      const ranks = this.cards.map((card) => card.rank);
      return (
        ranks.includes(10) &&
        ranks.includes(11) &&
        ranks.includes(12) &&
        ranks.includes(13) &&
        ranks.includes(14)
      );
    }
    return false;
  }

  private getStraightFlush(): boolean {
    return this.getFlush() && this.getStraight();
  }

  private getFourOfAKind(): boolean {
    const rankCount = this.getRankCounts();
    for (const count of Object.values(rankCount)) {
      if (count === 4) {
        return true;
      }
    }
    return false;
  }

  private getStraightHand(): boolean {
    const ranks = this.cards
      .map((card) => Number(card.rank))
      .sort((a, b) => a - b);
    if (
      ranks[0] === 2 &&
      ranks[1] === 3 &&
      ranks[2] === 4 &&
      ranks[3] === 5 &&
      ranks[4] === 14
    ) {
      return true;
    }
    for (let i = 0; i < ranks.length - 1; i++) {
      if (ranks[i] + 1 !== ranks[i + 1]) {
        return false;
      }
    }
    return true;
  }

  private getFullHouse(): boolean {
    const rankCount = this.getRankCounts();
    let threeFound = false;
    let twoFound = false;
    for (const count of Object.values(rankCount)) {
      if (count === 3) threeFound = true;
      if (count === 2) twoFound = true;
    }
    return threeFound && twoFound;
  }

  public getOutcome(): string {
    if (this.getRoyalFlush()) {
      return "Роял флеш";
    } else if (this.getStraightFlush()) {
      return "Стрит флеш";
    } else if (this.getFourOfAKind()) {
      return "Каре";
    } else if (this.getFullHouse()) {
      return "Фулл хаус";
    } else if (this.getFlush()) {
      return "Флэш";
    } else if (this.getStraightHand()) {
      return "Стрит";
    } else if (this.getThreeOfAKind()) {
      return "Тройка";
    } else if (this.getTwoPair()) {
      return "Две пары";
    } else if (this.getOnePair()) {
      return "Одна пара";
    } else {
      return "Старшая карта";
    }
  }
}

export default PokerHand;
