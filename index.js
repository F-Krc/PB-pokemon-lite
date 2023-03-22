class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }

  learnAttackSkill(attackSkill) {
    if(attackSkill instanceof AttackSkill){
       this.skills.push(attackSkill);
    }
  }

  showStatus() {
    console.log(`${this.name}'s Status \nHealth: ${this.health} \nMagic: ${this.magic}`);
  }

  getMagic(addMagic) {
    this.magic += addMagic;
    console.log(`${this.name} got ${addMagic} magic back.`);
  }

  attack(attackName, opponentPokemon) {
    // const attackSkill = (this.skills).find(item=> item.name === attackName);
    const attackSkill = this.skills[attackName];
    if (this.magic < attackSkill.magic) {
      console.log(`${this.name} has not enough magic, cannot launch attack!`);
      return;
    }

    this.magic -= attackSkill.magic;

    console.log(`${this.name} launched skill '${attackSkill.name}' successfully!`);

    opponentPokemon.health -= attackSkill.damage;

    console.log(`${opponentPokemon.name} got ${attackSkill.damage} damage.`);

    if (opponentPokemon.health <= 0) {
      console.log(`${opponentPokemon.name} is already dead! ${this.name} is killed!`);
    }
  }
}

class AttackSkill {
  constructor(name, damage, magic) {
    this.name = name;
    this.damage = damage;
    this.magic = magic;
  }
}

let pikachu = new Pokemon('Pikachu', 120, 80);
let bulbasaur = new Pokemon('Bulbasaur', 95, 105);
let charmander = new Pokemon('Charmander', 110, 90);
let squirtle = new Pokemon('Squirtle', 100, 30);

let lightning = new AttackSkill('Lightning', 40, 30);
let poisonSeed = new AttackSkill('Poison Seed', 20, 20);
let fireball = new AttackSkill('Fireball', 50, 40);
let waterGun = new AttackSkill('Water Gun', 30, 35);

pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
charmander.learnAttackSkill(fireball);
squirtle.learnAttackSkill(waterGun);

//pikachu.attack('Lightning', bulbasaur);
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
charmander.attack(0, squirtle);
squirtle.attack(0, charmander);
pikachu.attack(0, bulbasaur);
pikachu.getMagic(20);
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
bulbasaur.attack(0, pikachu);
bulbasaur.attack(0, pikachu);

pikachu.showStatus();
bulbasaur.showStatus();
charmander.showStatus();
squirtle.showStatus();
