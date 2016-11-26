import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserService } from './user.service'
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ToupperPipe } from './toupper.pipe';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToupperPipe,
    HomeComponent,
    AddComponent,
    DetailComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    {provide: 'API_URL', useValue: 'http://localhost:3000'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
