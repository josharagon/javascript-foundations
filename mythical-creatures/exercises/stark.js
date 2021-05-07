const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(obj) {
    if (obj) {
      this.name = obj.name;
      this.location = obj.area || 'Winterfell'
      this.safe = false
    }
  }

    sayHouseWords() {
      if (this.safe === false) {
        return 'Winter is Coming'
      } else {
        return 'The North Remembers'
    }
  }
  callDirewolf(name, location) {
    var newWolf = new Direwolf(name, location)
    newWolf.home = this.location
    newWolf.starksToProtect.push(this)
    this.safe = true;
    return newWolf
  }
}


module.exports = Stark;
