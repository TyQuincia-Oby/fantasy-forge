//Adventurer playground
import { Adventurer } from "../models/Adventurer.js";

const hero1 = new Adventurer("Robin", 80);
const hero2 = new Adventurer("Zemmy", 90);

//methods
hero1.scout();
hero1.receiveDamage(10);
hero1.heal(15);

hero2.receiveDamage(20);
hero2.heal(25);

console.log(hero1.name + " Final Health: " + hero1.health)
console.log(hero2.name + " Final Health: " + hero2.health)
console.log("Fantasy Forge Initialized!")