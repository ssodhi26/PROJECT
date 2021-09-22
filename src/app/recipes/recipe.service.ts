import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model'
@Injectable()
export class RecipeService
{
    private recipes: Recipe[]=[
        new Recipe('Caramel Butter Pancake',
        'A super tasty Caramel Butter Pancake',
        'https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?webp=true&quality=90&crop=9px%2C2330px%2C5697px%2C2451px&resize=940%2C399',
        [
            new Ingredient('All purpose flour',1),
            new Ingredient('Brown Sugar',2)
        ]),
        new Recipe('Exotic Italian White Sauce Pasta ',
        'Will dazzle your tastebuds!',
        'https://somethingscookingwithalpa.com/wp-content/uploads/2016/09/0059_WhiteSaucePasta.jpg',
        [
            new Ingredient('Pasta',1),
            new Ingredient('Cheese',5)
        ])

      ];

      constructor(private slService: ShoppingListService){}

      getRecipes()
      {
          return this.recipes.slice();     //slice is used so that everytime the getRecipes() method is called, it creates an exact copy the recipes array
      }

      getRecipe(index:number)
      {
        return this.recipes[index];
      }

      addIngToSL(ingredients: Ingredient[])
      {
        this.slService.addIngredients(ingredients);
      }
}
