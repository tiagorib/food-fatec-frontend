import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(`User: ${this.email}, Pass: ${this.password}`);
  }

}
