import { Component, input } from '@angular/core';
import { TabButtonComponent } from '../tab-button/tab-button.component';

@Component({
  selector: 'app-example-list',
  standalone: true,
  imports: [TabButtonComponent],
  template: `
    <h1>Examples</h1>
    <div class="button-group">
      @for (content of contents(); track content.title) {
        <app-tab-button 
          [label]="content.title"
          [isSelected]="selectedTopic === content.title"
          (buttonClick)="onSelectTopic(content.title)" />
      }
    </div>
    <div class="example-content">
      @if (selectedTopic) {
        <h2>{{ getSelectedContent()?.title }}</h2>
        <p>{{ getSelectedContent()?.description }}</p>
        <pre>{{ getSelectedContent()?.code }}</pre>
      } @else {
        <p>Please select a topic</p>
      }
    </div>
  `,
  styleUrl: './example-list.component.css'
})
export class ExampleListComponent {
  contents = input.required<{ title: string; description: string, code?: string }[]>();
  
  selectedTopic: string | null = null;
  
  onSelectTopic(topic: string) {
    this.selectedTopic = topic;
  }
  
  getSelectedContent() {
    return this.contents().find(content => content.title === this.selectedTopic) || null;
  }
}