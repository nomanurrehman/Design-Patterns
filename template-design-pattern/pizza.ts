/**
 * The steps to make a pizza are the same.
 * The only parts that differ are based on the
 * flavour. For example, a vegetable pizza will
 * only have vegetables but everything else remains
 * the same.
 */
export abstract class Pizza {
  constructor() {
  }

  make(): void {
    this.kneadDough();
    this.settleDough();
    this.prepareSauce();
    this.rollDough();
    this.applySauce();
    if ( this.hasVegetables() ) {
      this.addVegetableToppings();
    }
    if ( this.hasMeat() ) {
      this.addMeatToppings();
    }
    if ( this.hasCheese() ) {
      this.addCheeseToppings();
    }
    this.bake();
  }

  kneadDough(): void {
    console.log('Kneading dough...');
  }

  settleDough(): void {
    console.log('Settling dough...');
  }

  prepareSauce(): void {
    console.log('Preparing sauce...');
  }

  rollDough(): void {
    console.log('Rolling dough...');
  }

  applySauce(): void {
    console.log('Applying sauce...');
  }

  abstract addVegetableToppings(): void;
    
  abstract addMeatToppings(): void;

  abstract addCheeseToppings(): void;

  bake(): void {
    console.log('Baking...');
  }

  hasVegetables(): boolean {
    return true;
  }

  hasMeat(): boolean {
    return true;
  }

  hasCheese(): boolean {
    return true;
  }
}
