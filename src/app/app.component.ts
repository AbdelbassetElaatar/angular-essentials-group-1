import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleListComponent } from './example-list/example-list.component';
import { HeaderComponent } from './header/header.component';
import { CoreConceptComponent } from './core-concept/core-concept.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,ExampleListComponent , HeaderComponent,CoreConceptComponent],

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
  coreConcepts = [
    {
      image: 'assets/components.png',
      title: "Component",
      description: "The core UI building block in Angular."
    },
    {
      image: 'assets/jsx-ui.png',
      title: "Template",
      description: "Return potentially dynamic HTML."
    },
    {
      image: 'assets/config.png',
      title: "Inputs",
      description: "make a component configurable."
    },
    {
      image: 'assets/state-mgmt.png',
      title: "State",
      description: "Angular-managed data changes the UI."
    }
  ];}