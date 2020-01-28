import { Ingredients } from 'src/app/models/resourcesModel';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterIngredients",
  pure: false
})
export class IngredientPipe implements PipeTransform {
  transform(
    ingredients: Ingredients[],
    ingredientsInput: string
  ): Ingredients[] {
    if (!ingredients || !ingredientsInput || ingredientsInput.length < 2) {
      return [];
    }
    try {
      return ingredients.filter(
        ingredient => ingredientsInput && ingredientsInput.toLowerCase &&
          (ingredient.inventoryName
            .toLowerCase()
            .indexOf(ingredientsInput.toLowerCase()) > -1 ||
          ingredient.casNumber
            .toLowerCase()
            .indexOf(ingredientsInput.toLowerCase()) !== -1 ||
          ingredient.inventoryNumber
            .toLowerCase()
            .indexOf(ingredientsInput.toLowerCase()) !== -1 ||
          ingredient.molecularFormula
            .toLowerCase()
            .indexOf(ingredientsInput.toLowerCase()) !== -1)
      );
    } catch (error) {
      return [];
    }
    
  }
}
