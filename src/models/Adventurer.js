class Adventurer{
    constructor(name,health){
        this.name = name;
        this.health = health;
    }

    scout(){
        console.log(`${this.name} is scouting. Current health: ${this.health}`)
    }

    receiveDamage(amount){
        this.health = this.health - amount;
        console.log(`!!DAMAGE DONE!! ** ${this.name} took ${amount} damage. Health is now ${this.health}`)
    }

    attack(target, amount){

        if (target.health < 0){
            console.log("No more health");
            return;
        }

        target.health -= amount;

        console.log(
            `!!ATTACK USED!! ** ${target.name} attacked by ${this.name}. ` +
            `Health is now ${target.health}`
        );
    }

    heal(amount){
        this.health = this.health + amount;
        console.log(`Health increased by ${amount}! Health is now ${this.health}`)
    }
}
 

export {Adventurer};