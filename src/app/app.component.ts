import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: any[] = [];
  public title: String = 'Minhas Tarefas';

  constructor() {
      this.todos.push('estudar angular');
      this.todos.push('estudar Vue');
      this.todos.push('estudar Node');

  }
}
