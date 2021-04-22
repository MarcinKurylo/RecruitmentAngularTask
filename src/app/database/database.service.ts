import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface responseData {
  displayName : string,
  email : string,
  expiresIn : string,
  idToken : string,
  kind : string,
  localId : string,
  refreshToken : string,
  registered : boolean
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public currentUsername : string | undefined = localStorage.getItem("username") ?? undefined
  public userName = new Subject<string>()

  constructor(private http : HttpClient) { }

  signUp(email : string, password : string, username : string){
    return this.http.post<responseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCZHUigJVXgbjJ10_1OMO-7xdrRc-38Fjg", {
      email : email,
      password : password,
      returnSecureToken : true,
      displayName : username
    })
  }
  login(email : string, password : string){
    return this.http.post<responseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZHUigJVXgbjJ10_1OMO-7xdrRc-38Fjg", {
      email : email,
      password : password,
      returnSecureToken : true
    })
  }
  logout(){
    localStorage.clear()
    this.userName.next(undefined)
  }
}
