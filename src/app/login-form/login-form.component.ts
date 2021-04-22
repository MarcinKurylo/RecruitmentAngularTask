import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @ViewChild("loginForm")
  loginForm! : NgForm

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  login(){
    if (this.loginForm.valid){
      console.log(this.loginForm.value)
    }
  }

}
