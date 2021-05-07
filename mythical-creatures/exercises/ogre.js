 class Ogre {
   constructor(obj) {
     this.name = obj.name
     this.home = obj.abode || 'Swamp'
     this.swings = 0
   }
   encounter(human) {
     human.encounterCounter++
     if (human.encounterCounter === 3 || human.encounterCounter === 6) {
       this.swings++
       human.knockedOut = true;
     }
   }
   swingAt(human) {
       this.swings++
       human.knockedOut = true;
   }
   apologize(human) {
     human.knockedOut = false;
   }
 }



module.exports = Ogre;
