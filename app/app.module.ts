import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {  HttpModule }    from '@angular/http';

import './rxjs-extensions';

import { AppComponent }  from './app.component';
import { StudentComponent } from './student/student.component';
import { VerenigingComponent } from './vereniging/vereniging.component';


@NgModule({
  imports:      [ 
                  BrowserModule,
                  FormsModule,
                  HttpModule
                ],
  declarations: [ 
                  AppComponent,
                  StudentComponent,
                  VerenigingComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }