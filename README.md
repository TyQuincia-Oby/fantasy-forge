# fantasy-forge
An Object-Oriented Programming project in JavaScript that crafts the building blocks of a fantasy world including: heroes, magic items along with their interactions between them.

Classes create the templates of the building blocks , new objects create the building blocks and the methods will bring everything to life with behaviors.

Code is based on:
- Class-based design
- Object instantiation
- Method-driven interactions
- Console-based feedback for state changes such as health, damage, and item usage

## Getting Started

### Prerequisites
- Node.js installed (any modern version that supports ES6 classes)

Run:
```bash
    node src/main-game.js
```
You should see console output describing scouting, attacks, healing, and potion usage.

---
## Creating New Items
The Adventurer takes a `name` and `health` parameter for the user to set while the Magical Item takes a `name`, `heal amount` and `charges` within their own classes. 

### new Adventurer
Create a new adventurer with a method similar as follows:

```javascript
const hero1 = new Adventurer("Salazar", 70)
```
    
    Salazar will start off with a health of 70


### new Magic Item
Create a new magic item with a method similar as follows: 

```javascript
const elixir1 = new HealPotion("Phoenix Tears Elixir", 15, 3)
```

    Phoenix Tears Elixir will have a heal amount of 15 and 3 charges.

## Adventurer Methods()
**Dot notation can be used to access 

### `scout();`

Used to scout the area and documents health 

Example Usage: 

```javascript
hero1.scout();
```

Example Response:

```bash
Robin is scouting. Current health: 80
```

### `receiveDamage(amount);`

Used when Adventurer receives damage -> Takes in `amount` parameter; documents new health and amount of damage taken

Example Usage: 

```javascript
hero1.receiveDamage(20);
```

Example Response: 

```bash
!!DAMAGE DONE!! ** Brahden took 20 damage. Health is now 60
```

### `attack(target, amount);`

Used when Adventurer gives damage -> Takes in `target` and `amount` parameters; documents Adventurer who gave attack, target that received attack and new health.

Example Usage: 

```javascript
antihero.attack(hero1, 10);
```

Example Response: 

```bash
!!ATTACK USED!! ** Sir Brave attacked by Orc Warrior. Health is now 90
```

### `heal(amount);`
Used when Adventurer heals themselves -> Takes in `amount` as a parameter; Documents new health and heal amount.

Example Usage: 

```javascript
hero1.heal(25);
```

Example Response: 

```bash
Health increased by 25! Health is now 95
```

## HealPotion Methods()

### `use(target);`
Used to heal a target -> Takes in a `target` as a parameter; Documents target magic item is used on, heal amount increased by, new health, and how many charges the item has left.

Example Usage:

```javascript
elixir1.use(hero1)
```

Example Response:

```bash
!!POTION USED!! ** Brahden healed by 10. Health is now 90. SugarWindElixir charges left: 1
```

### `recharge(amount);`
Used to recharge magical item itself -> Takes in an `amount` parameter; Documents the magical item has been recharged.

Example Usage:

```javascript
elixir1.recharge(10)
```

Example Response:

```bash
!!Potion recharged!!
```
## Configuration

This project does not use environment variables or external configuration files. All values are defined directly in code for clarity and ease of learning.

---

## Notes and Limitations

- There is no health cap enforcement.
- Potion charge depletion behavior depends entirely on method logic.
- No persistence layer exists; all state resets on each run.
- Output is console-based only.

---

## Troubleshooting

**Nothing prints to the console**
- Ensure you are running `node src/main-game.js` from the project root.

**Health values behave unexpectedly**
- Double-check that methods are called on the correct object.
- Verify that parameters are passed in the expected order.

**Potion charges drop incorrectly**
- Inspect the `use()` method logic for charge decrement behavior.

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with clear commits
4. Open a pull request describing your additions or fixes

---

## Assignee
### TyQuincia R. Oby
![me](src/me.png)