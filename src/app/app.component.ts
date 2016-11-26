import { Component } from '@angular/core';
import { UserService } from './user.service';
import { IUser, IUserDetail, IGroup } from './models';

let xx = 'Test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello';
  age: number;
  fruits: Array<any> = [1, 2, 'xx'];
  users: Array<IUser>;
  user: IUser;
  xxUser: IUserDetail;

  name: string;

  public x = 30;

  constructor(private userService: UserService) {
    this.user = { id: null, name: null, email: null };

    this.title = 'xxx';
    this.showName('Angular')
    this.showFunction(() => { console.log('hello') }, 'ab','bb','cc');  
    this.userService.getUsers()
      .then(data => {
        this.users = <Array<IUser>>data;
      }, err => {
        console.error(err);
      });
    

  }

  getUserDetail(id: number) {
    this.userService.getDetail(id)
      .then(data => {
        this.user = <IUser>data;
      }, err => {
        console.error(err);
      });
  } 
  

  alertName() {
    this.users.push(this.user);
    alert(JSON.stringify(this.user));
  }

  myMethod() {

  }

  showFunction(fn: any, ...xx) {
    fn();
    console.log(xx);
    console.log(fn);
  } 

  showName(name: string, lang?: string) {

    let type = !lang ? 'Invalid' : lang;

    if (!lang) {
      type = 'Invalid'
    } else {
      type = lang;
    }

    let xx = this.title + ' ' + type;

    console.log(`${name} [${lang}]`);
  }

}

