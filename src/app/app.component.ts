import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleListComponent } from './example-list/example-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,ExampleListComponent , ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atelier1-angular';

    contents = [
    { title: "Component", description: "This is the description for Component" , code :` @Component({
      selector : 'app-hello', 
      template: '<h1>Hello World</h1>',
      }) 
      export class HelloComponent {}
      `},

    { title: "Template", description: "This is the description for Template" , code :` @Component({
      selector : 'app-hello', 
      template: "<h1></h1>",
      }) 
      export class HelloComponent {}
      `},

    { title: "Inputes", description: "This is the description for Inputes" , code :` @Component({
      selector : 'app-hello', 
      template: '<h1>Hello World</h1>',
      }) 
      export class HelloComponent {}
      `},

    { title: "State", description: "This is the description for State" , code :`@Component({
      selector : 'app-hello', 
      template: '<h1>Hello World</h1>',
      }) 
      export class HelloComponent {}
      `}
  ];
}
