import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { IUser, IHttpResult } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<IUser>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  info(user: IUser) {
    this.router.navigate(['/detail', {id: user.id}]);
  }  
  
  remove(user: IUser) {
    if (confirm('Are you sure? [' + user.name + ']')) {
      this.userService.remove(user.id)
        .then((data: IHttpResult) => {
          if (data.ok) {
            this.getUsers();
          } else {
            console.error(data.err);
          }
        }, err => {
          console.error('Connection failed!')
        });
    }
  }

  getUsers() {
    this.userService.getUsers()
      .then(data => {
        let _data = <IHttpResult>data;

        if (_data.ok) {
          this.users = _data.rows;
        } else {
          console.error(_data.err);
        }

      }, err => {
        console.error('Connection error!');
      });
  }

}
