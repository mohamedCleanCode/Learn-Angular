import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  title: string = 'To-Do List Application';
  image: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFb0b4D0QjeeepuAa1nmcksjmNSC0dfRijA&s';
  newTask: string = '';
  todoList: string[] = [];
  addNewTask() {
    if (this.newTask.trim() === '') {
      alert('Please enter a valid task');
      return;
    }
    this.todoList.push(this.newTask.trim());
    this.newTask = '';
  }
  editTask(i: number) {
    const task = this.todoList[i];
    const newTask = prompt('Edit task:', task);
    if (newTask !== null && newTask.trim() !== '') {
      this.todoList[i] = newTask.trim();
    }
  }
  removeTask(i: number) {
    const isSure = prompt('Are you sure? (yes/no)', 'yes');
    if (isSure === 'yes') {
      this.todoList.splice(i, 1);
    } else {
      return;
    }
  }
}
