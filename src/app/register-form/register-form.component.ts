import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm = new FormGroup({
    username : new FormControl(""),
    userEmail : new FormControl(""),
    userPassword : new FormControl("")
  })
  

  constructor(private router : Router, private databaseService : DatabaseService) { }

  ngOnInit(): void {
  }
  // addUser(){
  //   if (this.registerForm.valid){
  //     const email = this.registerForm.value["user-email"]
  //     const password = this.registerForm.value["user-password"]
  //     const username = this.registerForm.value["user-name"]
  //     this.databaseService.signUp(email, password, username).subscribe(resData => {
  //       console.log(resData)
  //     })
  //     this.registerForm.reset()
  //   }
  // }
  addUser() {
    console.log(this.registerForm.value)
  }

}

