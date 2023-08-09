import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo: string = '';
  todos: string[] = [];

  addTodo() {
    if (this.newTodo.length >= 4 && this.newTodo.length <= 200 && /^[a-zA-Z0-9\s]*$/.test(this.newTodo)) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
      this.saveTodos();
    } else {
      alert('Invalid input! The text should be 4 to 200 characters long and should only contain letters, numbers, and spaces.');
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  ngOnInit() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }
}
