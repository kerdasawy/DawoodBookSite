import { Component, ViewChild, ElementRef } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DawoodBook';

  fontSize = 16;
  constructor() {
    this.fontSize = +localStorage.getItem("fontSize");
    if (!this.fontSize || this.fontSize<16) {
      this.fontSize = 16;
      
    }
    document.body.style.fontSize = `${this.fontSize}px`;
  }
  changeFont(operator) {
    operator === '+' ? this.fontSize++ : this.fontSize--;
    localStorage.setItem("fontSize", this.fontSize.toString());
    document.body.style.fontSize = `${this.fontSize}px`;

  }
}
