import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  database : any

  constructor(private http : HttpClient) { }

  signUp(email : string, password : string){
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCZHUigJVXgbjJ10_1OMO-7xdrRc-38Fjg", {
      email : email,
      password : password,
      returnSecureToken : true
    })
  }
  login(email : string, password : string){
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZHUigJVXgbjJ10_1OMO-7xdrRc-38Fjg", {
      email : email,
      password : password,
      returnSecureToken : true
    })
  }
}
