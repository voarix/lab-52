class Card {
  constructor(
    public rank: string | number,
    public suit: string,
  ) {
    this.rank = rank;
    this.suit = suit;
  }
}

export default Card;
