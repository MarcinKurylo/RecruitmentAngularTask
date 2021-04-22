import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private isAuthenticated : boolean | undefined
  private userSub! : Subscription


  constructor(private databaseService : DatabaseService) { }
  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }


  ngOnInit(): void {
    this.userSub =  this.databaseService.userName.subscribe(user => {
      this.isAuthenticated = !user ? false : true
    })
  }
  logout(){
    this.databaseService.logout()
  }

}
