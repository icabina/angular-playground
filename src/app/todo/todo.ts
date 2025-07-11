import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Needed for *ngFor, *ngIf

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      const newTask: Todo = {
        id: Date.now(),
        title: this.newTodo.trim(),
        completed: false,
      };
      this.todos.push(newTask);
      this.newTodo = '';
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
