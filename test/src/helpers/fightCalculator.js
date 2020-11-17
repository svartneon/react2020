export function calcDmgMod(opponent, dmgMod) {
   let exist = false;
   dmgMod.forEach((element) => {
      if ((opponent.primarytype || opponent.primarytype) === element.name) {
         exist = true;
      }
   });
   return exist;
}
