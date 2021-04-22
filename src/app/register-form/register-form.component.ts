import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @ViewChild("registerForm")
  loginForm! : NgForm

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  addUser(){
    if (this.loginForm.valid){
      console.log(this.loginForm.value)
    }
  }

}

