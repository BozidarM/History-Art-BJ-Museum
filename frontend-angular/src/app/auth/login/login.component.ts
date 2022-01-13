import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsersLogin, UsersService } from 'src/app/services/users.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: any;
  errorMessage: String;

  constructor(private users_s: UsersService, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(localStorage.getItem("logedin") == "true"){
      this.authenticationService.logOut();
      localStorage.clear();
    }
  }

  onSubmit(form: NgForm){
    var model: UsersLogin = {
      "username": form.value.username,
      "password": form.value.password
    }

    this.users_s.login(model).subscribe(value => { this.message = value; if(this.message == null){
      this.errorMessage = "Failed! Inccorect password or user doesnt exists!";
      }else{
        localStorage.setItem("username", this.message.username.toString());
        localStorage.setItem("logedin", "true");
        localStorage.setItem("plannerNumber", "0");
        this.authenticationService.logIn();
        this.router.navigate(['/']);
      }
    })
  }

}
