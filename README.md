# fantasy-forge
An Object-Oriented Programming project in JavaScript that crafts the building blocks of a fantasy world including: heroes, magic items along with their interactions between them.

Classes create the templates of the building blocks , new objects create the building blocks and the methods will bring everything to life with behaviors.

## Getting Started

Run ```
    node src/main-game.js
    ```

## Creating New Items
The Adventurer takes a name and health parameter for the user to set while the Magical Item takes a name, heal amount and charges within their own classes. 

### new Adventurer
Create a new adventurer with a method similar as follows:

> const hero1 = new Adventurer("Salazar", 70)
    
    Salazar will start off with a health of 70


### new Magic Item
Create a new magic item with a method similar as follows: 

> const elixir1 = new HealPotion("Phoenix Tears Elixir", 15, 3)

    Phoenix Tears Elixir will have a heal amount of 15 and 3 charges.

## Adventurer Methods()
**Dot notation can be used to access 

### scout();

Used to scout the area and documents health 

Example Usage: 

> hero1.scout();

Example Response:

> Robin is scouting. Current health: 80

### receiveDamage(amount);

Used when Adventurer receives damage -> Takes in amount parameter; documents new health and amount of damage taken

Example Usage: 

> hero1.receiveDamage(20);

Example Response: 

> !!DAMAGE DONE!! ** Brahden took 20 damage. Health is now 60

### attack(target, amount);

Used when Adventurer gives damage -> Takes in target and amount parameters; documents Adventurer who gave attack, target that received attack and new health.

Example Usage: 

> antihero.attack(hero1, 10);

Example Response: 

> !!ATTACK USED!! ** Sir Brave attacked by Orc Warrior. Health is now 90

### heal(amount);

Example Usage: 

> hero1.heal(25);

Example Response: 

> Health increased by 25! Health is now 95







## HealPotion Methods()