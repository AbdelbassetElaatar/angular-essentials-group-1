import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-core-concept',
  standalone: true,
  templateUrl: './core-concept.component.html',
  styleUrl: './core-concept.component.css'
})
export class CoreConceptComponent {

  @Input({ required: true }) concept!: {
    image: string;
    title: string;
    description: string;
  };
}
