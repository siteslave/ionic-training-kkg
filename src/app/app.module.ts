import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserService } from './user.service'

import { AppComponent } from './app.component';
import { ToupperPipe } from './toupper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToupperPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
