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
        console.log(`${this.name} took ${amount} damage. Health is now ${this.health}`)
    }

    heal(amount){
        this.health = this.health + amount;
        console.log(`Health increased by ${amount}! Health is now ${this.health}`)
    }
}

export {Adventurer};