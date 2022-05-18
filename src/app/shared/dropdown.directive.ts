import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective
{
    // boolean that will see if the dropdown menu is open
    @HostBinding('class.open') isOpen = false; 
    // listen if clicked, and if clicked toggleOpen function
    @HostListener('document:click', ['$event']) toggleOpen(event: Event)
    {
        // if open then set to close, if close, then set to open
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false; 
    }
    constructor(private elRef: ElementRef) 
    {

    }
}