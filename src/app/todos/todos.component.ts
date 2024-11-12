import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
todoService = inject(TodosService);
todoItems = signal<Array<Todo>>([]);
ngOnInit(): void {
  this.todoService.getTodosFromApi()
  .pipe(
    catchError((err) => {
      console.log(err)
      throw err;
    })
  )
  .subscribe((todos) => {
    this.todoItems.set(todos);
  })
}

updateTodoItem(todoItem: Todo) {
  this.todoItems.update((todos) => {
    return todos.map(todo => {
      if(todo.id === todoItem.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
  });
}

}
