class Medusa {
  constructor(name) {
    this.name = name,
    this.statues = []
  }
  gazeAtVictim(person) {
    if (this.statues.length < 3) {
       if ( person.name === new Statue(`${person.name }`).name) {
        this.statues.push(new Statue(`${person.name}`))
      }
    } else if(this.statues.length === 3){
      var person1 = new Person(this.statues[0].name)
      this.statues.push(new Statue(`${person.name}`))
      this.statues.shift()
      person1.mood = 'relieved'
      return person1
    }
  }
}

var Person = require('./person');
var Statue = require('./statue');
module.exports = Medusa;
