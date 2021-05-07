class Magician {
  constructor({name : name, assistant: assistant, clothing: clothing}){
    this.name = `The Great ${name}`,
    this.assistant = assistant,
    this.favoriteAccessory = clothing || 'top hat',
    this.confidencePercentage = 10
  }
  performIncantation(incantation) {
     return incantation.toUpperCase() + "!";
  }
  performTrick() {
    this.confidencePercentage += 10;

    if(this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }
  performShowStopper() {
    console.log(this.confidencePercentage);
    if (this.confidencePercentage < 99 || this.assistant === false) {
      return 'Oh no, this trick is not ready!'
    } else if (this.confidencePercentage >= 100 && this.assistant === true) {
      return 'WOW! The magician totally just sawed that person in half!'
    }
  }
}


module.exports = Magician;
