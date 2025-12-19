import { Adventurer } from  '../models/Adventurer.js'
import { HealPotion } from '../models/HealPotion.js'

const hero = new Adventurer("Sir Brave", 100);
const antihero = new Adventurer("Orc Warrior", 120);
const flask = new HealPotion("Flask of Red Goo", 15, 5);

console.log(`\n---Game 3 [ Scene ]---`);
console.log(hero);
console.log(antihero);
console.log(flask);

console.log(`\n---Sir Brave Encounters The Orc Warrior---`)
//Action
antihero.attack(hero, 10);
//Reaction
flask.use(hero);
//Counter-Action
hero.attack(antihero, 30);

console.log("\n--- Post Encounter Stats ---");
console.log(`${hero.name} > Health: ${hero.health} <`)
console.log(`${antihero.name} > Health: ${antihero.health} <`)
console.log(`Flask of Red Goo charge: ${flask.charges}`)
