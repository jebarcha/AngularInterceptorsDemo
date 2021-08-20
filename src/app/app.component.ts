import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private usersService: UsersService) {
    this.usersService.getUser().subscribe( users => {
      console.log(users);
    }, (err) => {
      console.log('err', err)
    } );
  }
}
