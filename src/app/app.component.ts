import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notify:number = 2;
  spinner = false;


  load(){
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 5000);
  }


}
