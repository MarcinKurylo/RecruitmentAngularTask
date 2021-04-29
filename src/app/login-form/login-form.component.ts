import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({})
  fields : FormlyFieldConfig[] = [
    {
      key: "email",
      type: "input",
      templateOptions: {
        label: "Your email:",
        placeholder: "Email",
        required: true,
        type: "email"
      },
      validators: {
        validator: {
          expression : (email : any) =>  /\S+@\S+\.\S+/.test(email.value),
          message: (error : Error, field: FormlyFieldConfig) => `"${field.formControl!.value}" is not a valid email Address`,
        }
      }
    },
    {
      key: "password",
      type: "input",
      templateOptions: {
        label: "Your password:",
        placeholder: "password",
        required: true,
        type: "password"
      }
    },

  ]
  

  constructor(private router : Router, private databaseService : DatabaseService) { }

  ngOnInit(): void {
  }
  login(){
    // if (this.loginForm.valid){
    //   const email = this.loginForm.value["user-email"]
    //   const password = this.loginForm.value["user-password"]
    //   this.databaseService.login(email, password).subscribe(resData => {
    //     localStorage.setItem("userToken", resData.idToken)
    //     localStorage.setItem("username", resData.displayName)
    //     this.databaseService.currentUsername = localStorage.getItem("username") ?? undefined
    //     this.databaseService.userName.next(this.databaseService.currentUsername)
    //     this.router.navigate(['/welcome'])
    //   })
    //   this.loginForm.reset()
    // }
    console.log(this.loginForm.value)
  }

}
