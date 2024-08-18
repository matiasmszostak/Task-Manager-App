import { Component, Input, input, computed, Output, EventEmitter, output} from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../ui/card/card.component";



@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {

  //Input marks that this property it's settable from outside
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }


  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
