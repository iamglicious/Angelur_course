import { Component } from '@angular/core';
import { Vereniging } from './vereniging';
import { Student } from '../student/student';

@Component ({
  selector: 'my-vereniging',
  templateUrl: 'app/vereniging/vereniging.component.html',
  styleUrls: ['app/vereniging/vereniging.component.css']
})

export class VerenigingComponent{
    ver: Vereniging;

  constructor(){
    this.ver = new Vereniging;
    this.ver.naam = "Schaakclub";
    this.ver.voorzitter = new Student;
    this.ver.voorzitter.firstName = "Piet";
    this.ver.voorzitter.lastName = "Paulisma";
    this.ver.voorzitter.studieRichting = "meteorologie";
    this.ver.students = [];
    this.ver.students[0] = new Student;
    this.ver.students[0] .firstName = "Anne";
  }

}
