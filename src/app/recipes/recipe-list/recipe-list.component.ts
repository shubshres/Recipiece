import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 
  recipes: Recipe[] = [
    //Calling the constructor
    new Recipe('Food', 'Description', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Food', 'Description', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe)
  {
    this.recipeWasSelected.emit(recipe); 
  }

}
