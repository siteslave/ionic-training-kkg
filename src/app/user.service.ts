import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  
  constructor(private http: Http) { }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get('https://jsonplaceholder.typicode.com/users')
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err));
    })
  }  
}
