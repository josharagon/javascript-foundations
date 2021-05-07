class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }
  fill(candy) {
    this.candies.push(candy);
    //counter for this.count within this function
    this.count++
  }
  contains(candyName) {
    if (candyName === this.candies[0].type) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Bag;
