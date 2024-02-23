import { Component } from '@angular/core';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: Todo[] = [];

  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [];
  }

  toggleDone(id: number): void {
    this.todos[id].completed = !this.todos[id].completed;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo(): void {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
