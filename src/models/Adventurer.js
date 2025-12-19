class Adventurer{
    constructor(name,health){
        this.name = name;
        this.health = health;
    }

    scout(){
        console.log(`${this.name} is scouting. Current health: ${this.health}`)
    }
}

export {Adventurer};