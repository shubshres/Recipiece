import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipiece';
  loadedTab = 'recipe'; 
  onNavigate(tab: string)
  {
    // change the loaded page
    this.loadedTab = tab; 
  }
}
