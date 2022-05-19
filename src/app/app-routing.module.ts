// Provide routing functionality to our application
// Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

// routes is an array of javascript objects where each object represents a route
const appRoutes: Routes = [
    // path we will reach when we load the app for the first time
    // only redirect if the full path is empty
    { path: '', redirectTo: '/recipes', pathMatch: 'full'}, 
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent},
];

// convert from normal typescript class to an angular module
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {}
