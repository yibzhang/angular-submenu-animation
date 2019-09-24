import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private menu1BtnLabel = 'btn1';
  private subMenu1BtnLabel = ['sub1', 'sub2'];
}
