import { Pizza } from './pizza';

/**
 * All steps are the same but
 * only has vegetables.
 */
export class VegetablePizza extends Pizza {
  addCheeseToppings(): void {
  }

  addVegetableToppings(): void {
    console.log('Adding vegetables...');
  }

  addMeatToppings(): void {
  }
  
  hasMeat(): boolean {
    return false;
  }
  
  hasCheese(): boolean {
    return false;
  }
}
