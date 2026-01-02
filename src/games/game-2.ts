import {HealPotion} from '../models/HealPotion.ts'
import { Adventurer } from '../models/Adventurer.ts'

const hero1 = new Adventurer ("Brahden", 80)
const potion1 = new HealPotion("BrambleBrightBrew", 20, 60);
const smallPotion = new HealPotion("SugarWindElixir", 10, 2)
const bigPotion = new HealPotion("HollowStarDraft", 50, 1)

console.log("\n--- Game 2: Heal Potion Test ---");
console.log(hero1);
console.log(potion1);
console.log(smallPotion);
console.log(bigPotion);

//methods
hero1.scout();
hero1.receiveDamage(20);
potion1.use(hero1);
smallPotion.use(hero1);
smallPotion.use(hero1);
smallPotion.recharge(3);
smallPotion.use(hero1);
smallPotion.use(hero1);


console.log("\n--- After Using Potion ---");
console.log(`${hero1.name} > Health: ${hero1.health} <`)
console.log(`Big Potion charge: ${bigPotion.charges}`)
console.log(`Small Potion charge: ${smallPotion.charges}`)
