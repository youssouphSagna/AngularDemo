import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info:any = {
    name: 'Sagna',
    mail: 'You@sagna.fr'
  };

  constructor() { }

  ngOnInit() {
  }

}
