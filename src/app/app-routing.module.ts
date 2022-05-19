// Provide routing functionality to our application
// Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

// routes is an array of javascript objects where each object represents a route
const appRoutes: Routes = [
    // path we will reach when we load the app for the first time
    // only redirect if the full path is empty
    { path: '', redirectTo: '/recipes', pathMatch: 'full'}, 
    { path: 'recipes', component: RecipesComponent, children:
    [
        {path: '', component: RecipeStartComponent}, 
        {path: 'new', component: RecipeEditComponent}, 
        {path: ':id', component: RecipeDetailComponent}, 
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    { path: 'shopping-list', component: ShoppingListComponent},
];

// convert from normal typescript class to an angular module
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {}
