import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  
  constructor() { }

  getUsers() {
    let users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Bill Gate', age: 30 }
    ];

    return users;
  }  
}
