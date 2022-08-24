import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'milagro-de-abril';

  escape = () => {
    setTimeout(function(){
      window.location.replace("https://www.google.com/");
     },100)
  }
}
