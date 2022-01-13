import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-angular';

  constructor (private authenticationService: AuthenticationService) {}

  loggedIn$: any;

  ngOnInit(){
    
    this.loggedIn$ = this.authenticationService.isLoggedIn();
  }
}
