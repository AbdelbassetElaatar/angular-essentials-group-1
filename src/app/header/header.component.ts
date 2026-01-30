import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mot = this.pickRandomWord();

  private pickRandomWord(): string {
    const words = ['Fundamental', 'Core', 'Crucial'];
    return words[Math.floor(Math.random() * words.length)];
  }
} 
