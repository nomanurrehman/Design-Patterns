import { Pizza } from './pizza';

/**
 * All steps are the same but
 * only has meat.
 */
export class MeatPizza extends Pizza {
  addCheeseToppings(): void {
  }

  addVegetableToppings(): void {
  }

  addMeatToppings(): void {
    console.log('Adding meat...');
  }
  
  hasVegetables(): boolean {
    return false;
  }
  
  hasCheese(): boolean {
    return false;
  }
}
