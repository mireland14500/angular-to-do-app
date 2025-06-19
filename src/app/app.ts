import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from '../components/to-do-component';

@Component({
  selector: 'app-root',
  template: '<app-todo ></app-todo>',
    imports: [RouterOutlet, ToDo],

  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-app';
}
