# fantasy-forge
An Object-Oriented Programming project in JavaScript that crafts the building blocks of a fantasy world including: heroes, magic items along with their interactions between them.

Classes create the templates of the building blocks , new objects create the building blocks and the methods will bring everything to life with behaviors.

## Getting Started

Run ```
    node src/main-game.js
    ```

## Creating New Items
The Adventurer takes a name and health parameter for the user to set while the Magical Item takes a name, heal amount and charges within their own classes. 

### Adventurer
Create a new adventurer with a method similar as follows:

> const hero1 = new Adventurer("Salazar", 70)
    
    Salazar will start off with a health of 70


### Magic Item
Create a new magic item with a method similar as follows: 

> const elixir1 = new HealPotion("Phoenix Tears Elixir", 15, 3)

    Phoenix Tears Elixir will have a heal amount of 15 and 3 charges.