import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  standalone: true,
  templateUrl: './tab-button.component.html',
  styleUrl: './tab-button.component.css'
})
export class TabButtonComponent {
  label = input.required<string>();
  isSelected = input<boolean>(false);

  buttonClick = output<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
