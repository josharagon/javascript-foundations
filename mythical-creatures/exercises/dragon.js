
class Dragon {
constructor(name, rider){
  this.name = name
  this.rider = rider
  this.hungry = true
  this.timesAte = 0
  }
  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.timesAte += 1;
    if (this.timesAte >= 3) {
      this.hungry = false;
    } else {
      return;
    }
  }

}

module.exports = Dragon
