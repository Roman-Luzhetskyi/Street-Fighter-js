import controls from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
    return new Promise(resolve, reject) => {
        const maxRounds = 100;
        let round = 0;

        while (firstFighter.health > 0 && secondFighter.health > 0 && round < maxRounds) {
            round++;

            const firstFighterDamage = getDamage(firstFighter);
            secondFighter.health -= firstFighterDamage;

            const secondFighterDamage = getDamage(secondFighter);
            firstFighter.health -= secondFighterDamage;
        }

        if (firstFighter.health <= 0 && secondFighter.health <= 0) {
            reject(new Error('The fight ended in a draw.'));
     else if (firstFighter.health <= 0) {
                resolve(secondFighter);
     else {
                    resolve(firstFighter);
                }
             }
        }
    }
}
         
         
export function getDamage(attacker, defender) {
    // return damage
    const blockPower = getBlockPower(defender);
    const hitPower = getHitPower(attacker);
    if (blockPower > hitPower) {
        return 0;
   else {
            return hitPower - blockPower;
        }
    }
}

export function getHitPower(fighter) {
    // return hit power
  const  attack, speed  = fighter;
  const criticalHitChance = Math.floor(Math.random() * 2) + 1; // generate random number between 1 and 2
  const power = attack * criticalHitChance;
  return power * speed;
}

export function getBlockPower(fighter) {
    // return block power
  const  defense  = fighter;
  const dodgeChance = Math.floor(Math.random() * 2) + 1; // generate random number between 1 and 2
  return defense * dodgeChance;
}
