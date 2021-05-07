class Fairy {
  constructor(name) {
    this.name = name,
    this.dust = 10
    this.clothes = {dresses:['Iris']}
    this.disposition = 'Good natured'
    this.humanWards = []
    this.stealCount = 0;
  }
  receiveBelief() {
    this.dust += 1;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(flowers) {
  this.clothes.dresses.push(...flowers)
  }
  becomeProvoked() {
    this.disposition = 'Vengeful'
  }
  replaceInfant(infant) {
      this.stealCount += 1;
    if (this.disposition === 'Vengeful' && this.stealCount < 3) {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
    } else {
      this.disposition = 'Good natured'
      return infant;
    }
  }
}


module.exports = Fairy;
