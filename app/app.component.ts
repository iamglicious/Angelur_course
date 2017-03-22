import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {  
  title : string = "Hello Angular2";
  subTitle : string = "To you too";
  e_mail : string;
  nr : number = 42;

  changeTitle($event : any) {
    this.title = $event.target.value;
    console.log($event);
    console.log($event.target);
  }
}
