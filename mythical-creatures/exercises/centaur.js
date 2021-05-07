class Centaur {
  constructor({name: name, type: breed }) {
    this.stress = 0,
    this.name = name,
    this.breed = breed,
    this.cranky = false,
    this.standing = true,
    this.layingDown = false
  }

  shootBow() {
    if(this.cranky === true || this.layingDown === true) {
      return 'NO!'
    } else {
      this.stress++;
      if (this.stress === 3) {
        this.cranky = true;
      }
      return 'Twang!!!';
    }
  }

  run() {
    if (this.cranky === true || this.layingDown === true) {
      return 'NO!'
    } else {
      this.stress++;
      if (this.stress === 3) {
        this.cranky = true;
      }
      return "Clop clop clop clop!!!"
    }
  }

  sleep() {
  if (this.standing === true) {
    return 'NO!'
  } else if (this.layingDown === true) {
    this.cranky = false;
    return 'ZZZZ'
  }
}

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing === true){
    this.cranky = false;
    }else {
      return 'Not while I\'m laying down!'
    }
  }
}



module.exports = Centaur
