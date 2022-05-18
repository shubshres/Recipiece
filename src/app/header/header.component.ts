import { Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent
{
    
    // Create an event emitter
    // include the output decorator so it can be listened to by parent
    @Output() tabSelected = new EventEmitter<string>(); 
    onSelect(tab: string)
    {
        this.tabSelected.emit(tab); 
    }
}