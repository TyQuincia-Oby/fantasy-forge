class HealPotion {
    name: string;
    healAmount: number;
    charges: number;
    constructor(name: string, healAmount: number, charges: number){
        this.name = name;
        this.healAmount = healAmount;
        this.charges = charges;
    }

    use(target: string){
        if (this.charges < 0){
            console.log("No more charges");
            return;
        }

        target.health += this.healAmount;
        this.charges--;

        console.log(
            `!!POTION USED!! ** ${target.name} healed by ${this.healAmount}. ` +
            `Health is now ${target.health}. ` +
            `${this.name} charges left: ${this.charges}`
        );
    }

    recharge(amount: number){
        this.charges += amount;
        console.log("!!Potion recharged!!")
    }
}

export { HealPotion };
