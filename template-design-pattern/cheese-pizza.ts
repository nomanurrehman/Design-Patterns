import { Pizza } from './pizza';

/**
 * All steps are the same but
 * only has cheese.
 */
export class CheesePizza extends Pizza {
  addCheeseToppings(): void {
    console.log('Adding cheese...');
  }

  addVegetableToppings(): void {
  }

  addMeatToppings(): void {
  }
  
  hasVegetables(): boolean {
    return false;
  }
  
  hasMeat(): boolean {
    return false;
  }
}
