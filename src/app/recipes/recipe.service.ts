import { Recipe } from "./recipe.model";
export class RecipeService
{
    private recipes: Recipe[] = [
    //Calling the constructor
    new Recipe('Food', 'Description', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Food', 'Description', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ]; 

  getRecipes()
  {
      // returns a new array (copy of the original)
      return this.recipes.slice(); 
  }
}