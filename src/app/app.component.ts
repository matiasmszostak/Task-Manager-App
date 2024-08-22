import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
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
