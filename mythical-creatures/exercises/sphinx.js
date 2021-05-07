class Sphinx {
  constructor() {
    this.riddles = []
    this.heroesEaten = 0
  }
  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddle)
    } else if (this.riddles.length === 3) {
      this.riddles.shift()
      this.riddles.push(riddle)
    }
  }
  attemptAnswer(answer) {
  for (var i = 0; i < this.riddles.length; i++) {
    if (answer === this.riddles[i].answer) {
      this.riddles.pop(i, 1)
    } else if (!this.riddles[i].answer.includes(answer)) {
      this.heroesEaten++
      }
    }
  }
}
}


module.exports = Sphinx;
