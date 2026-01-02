class Adventurer{
    name: string;
    health: number;
    constructor(name: string, health: number){
        this.name = name;
        this.health = health;
    }

    scout(): void {
        console.log(`${this.name} is scouting. Current health: ${this.health}`)
    }

    receiveDamage(amount: number): void{
        this.health -= amount;
        if (this.health <= 0){
            this.health = 0;
            console.log("The Adventurer Collapses!!!")
        }
        console.log(`!!DAMAGE DONE!! ** ${this.name} took ${amount} damage. Health is now ${this.health}`)
    }

    attack(target: Adventurer, amount: number): void{

        if (target.health <= 0){
            console.log("No more health");
            return;
        }

        target.receiveDamage(amount);
    
        console.log(
            `!!ATTACK USED!! ** ${target.name} attacked by ${this.name}. ` +
            `Health is now ${target.health}`
        );
    
    }

    heal(amount: number): void{
        this.health += amount;
        console.log(`Health increased by ${amount}! Health is now ${this.health}`)
    }
}
 

export {Adventurer};