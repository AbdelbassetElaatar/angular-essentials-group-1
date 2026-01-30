import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  standalone: true,
  template: `
    <button 
      (click)="handleClick()"
      [class.active]="isSelected()">
      {{ label() }}
    </button>
  `,
  styleUrl: './tab-button.component.css'
})
export class TabButtonComponent {
  // What inputs do you need?
  label = input.required<string>();
  isSelected = input<boolean>(false);
  
  // What output do you need?
  buttonClick = output<void>();
  
  // What method handles the click?
  handleClick() {
    this.buttonClick.emit();
  }
}