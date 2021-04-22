import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @ViewChild("loginForm")
  private loginForm! : NgForm

  constructor(private router : Router, private databaseService : DatabaseService) { }

  ngOnInit(): void {
  }
  login(){
    if (this.loginForm.valid){
      const email = this.loginForm.value["user-email"]
      const password = this.loginForm.value["user-password"]
      this.databaseService.login(email, password).subscribe(resData => {
        localStorage.setItem("userToken", resData.idToken)
        localStorage.setItem("username", resData.displayName)
        this.databaseService.currentUsername = localStorage.getItem("username") ?? undefined
        this.databaseService.userName.next(this.databaseService.currentUsername)
        this.router.navigate(['/welcome'])
      })
      this.loginForm.reset()
    }
  }

}
