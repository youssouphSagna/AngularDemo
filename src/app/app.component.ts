import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contact:any = {
    nom: "sagna",
    email: "you@uha.fr"
  };
}
