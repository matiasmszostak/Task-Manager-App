import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS // Exposing the imported data into the template.

  selectedUserId?: string;
  

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!; // ! is for telling typescrypt that you won't have an undifined value, when we know we won't.
  }


  onSelectUser(id: string) {
    console.log('Selected user with id ' + id);
    this.selectedUserId = id;
  }
}
