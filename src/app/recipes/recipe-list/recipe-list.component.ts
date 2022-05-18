import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    //Calling the constructor
    new Recipe('Breakfast Sandwich', 'A homemade raspberry jam, ready in 10 minutes, balances the salty layers of this mellow, comforting breakfast sandwich.', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Breakfast Sandwich', 'A homemade raspberry jam, ready in 10 minutes, balances the salty layers of this mellow, comforting breakfast sandwich.', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
