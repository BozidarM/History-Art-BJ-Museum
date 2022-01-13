import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Users, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  message: any;
  errorMessage: string;
  
  favorites = new FormControl();
  favoriteList: string[] = ['Roman', 'Egyptian', 'Greek', 'Chinese', 'Byzantine'];

  constructor(private users_s: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var model: Users = {
      "fullname": form.value.fullname,
      "email": form.value.email,
      "username": form.value.username,
      "password": form.value.password,
      "city": form.value.city,
      "address": form.value.address,
      "phone": form.value.phone,
      "birthday": form.value.birthday,
      "favorites": this.favorites.value
    }
    this.users_s.insert(model).subscribe(value => { this.message = value; 
                                                    if(this.message == null){
                                                      this.errorMessage = "Failed! You enterd wrong mail or password format, or user with this email or username alredy exists!";
                                                    }else{
                                                      this.router.navigate(['/login']);
    } });
    
  }

}
