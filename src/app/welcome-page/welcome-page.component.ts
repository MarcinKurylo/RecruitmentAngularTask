import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  username = this.databaseService.currentUser?.username ?? "Undefined"

  constructor( private databaseService : DatabaseService ) {}

  ngOnInit(): void {
  }

}
