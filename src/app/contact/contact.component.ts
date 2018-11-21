import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  pageContacts:any;

  constructor(private http:HttpClient) { }

    // initialisation
    ngOnInit() {
      this.http.get("http://localhost:8080/chercherContacts?mc=A&size=3&page=0")
        .subscribe( data => {
          this.pageContacts = data;
          this.pageContacts = this.pageContacts.json();
        }, err => {
          console.log(err);
        }

      );

  }

}
