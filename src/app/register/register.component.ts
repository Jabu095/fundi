import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public nav: Router) { }

  ngOnInit() {
  }

  login(){
    this.nav.navigate(['/login']);
  }
}
