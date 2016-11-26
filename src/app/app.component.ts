import { Component } from '@angular/core';

let xx = 'Test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title: string = 'Hello';
  age: number;
  fruits: Array<any> = [1, 2, 'xx'];
  users: Array<{ id: number, name: string, age?: number }>;
  user: { id: number, name: string } = { id: null, name: null };

  name: string;

  public x = 30;

  constructor() {
    this.title = 'xxx';
    this.showName('Angular')
    this.showFunction(() => { console.log('hello') }, 'ab','bb','cc');
    this.users = [
      {id: 1, name: 'John Doe'},
      {id: 2, name: 'Bill Gate', age: 30},
    ]    
    // function hello() { 
    //   console.log('hello')
    // }

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

