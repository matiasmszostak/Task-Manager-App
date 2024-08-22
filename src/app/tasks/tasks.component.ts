import { Component, Input } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

//  @Input () name: string | undefined; // | pipes workes here for telling typescript that you can get 2 types in a value
  @Input ({required: true}) name!: string; // the '?' tells we know it might not be initilized.
  @Input({required: true}) userId!: string;
  
  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  
  get selectedUserTask() {
    return this.taskService.getUserTasks(this.userId)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
