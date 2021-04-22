import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @ViewChild("registerForm")
  registerForm! : NgForm

  constructor(private router : Router, private databaseService : DatabaseService) { }

  ngOnInit(): void {
  }
  addUser(){
    if (this.registerForm.valid){
      const email = this.registerForm.value["user-email"]
      const password = this.registerForm.value["user-password"]
      this.databaseService.signUp(email, password).subscribe(resData => {
        console.log(resData)
      })
      this.registerForm.reset()
    }
  }

}

