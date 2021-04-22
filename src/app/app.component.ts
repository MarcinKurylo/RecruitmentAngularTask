import { Component } from '@angular/core';
import { DatabaseService } from './database/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatabaseService]
})
export class AppComponent {
  title = 'Recruitment';
}
