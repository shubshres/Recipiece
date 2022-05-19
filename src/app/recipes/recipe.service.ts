import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    //Calling the constructor
    new Recipe(
      'PB & J',
      'Peanut Butter and Jelly Sandwich ',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/4/FNM_090112-Peanut-Butter-and-Jelly-Sandwich-Cake-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541616148.jpeg',
      [
        new Ingredient('Peanut Butter', 1),
        new Ingredient('Jelly', 1),
        new Ingredient('Bread', 2),
      ]
    ),
    new Recipe(
      'Ham & Cheese Sandwich',
      'Ham and Cheese Sandich',
      'https://i.ytimg.com/vi/LW4yk2MWqOw/maxresdefault.jpg',
      [
        new Ingredient('Ham', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Bread', 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService)
  {

  }

  getRecipes() 
  {
    // returns a new array (copy of the original)
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[])
  {
    this.slService.addIngredients(ingredients);
  }
}
