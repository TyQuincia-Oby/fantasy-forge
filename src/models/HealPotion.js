class HealPotion {
    constructor(name, healAmount, charges){
        this.name = name;
        this.healAmount = healAmount;
        this.charges = charges;
    }

    use(target){
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
}

export { HealPotion };
