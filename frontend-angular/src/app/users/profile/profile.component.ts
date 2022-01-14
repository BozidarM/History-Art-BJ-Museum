import { Component, OnInit } from '@angular/core';
import { Users, UsersService } from 'src/app/services/users.service';
import { NgForm, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private usersService: UsersService, private _snackBar: MatSnackBar) { }

  data: any;

  favorites = new FormControl();
  favoriteList: string[] = ['Roman', 'Egyptian', 'Greek', 'Chinese', 'Byzantine'];

  ngOnInit(): void {
    this.findByUsername(localStorage.getItem("username"))
  }

  onSubmit(form: NgForm){
    var model: Users = {
      "fullname": form.value.fullname,
      "email": form.value.email,
      "username": localStorage.getItem("username"),
      "password": form.value.password,
      "city": form.value.city,
      "address": form.value.address,
      "phone": form.value.phone,
      "birthday": new Date(form.value.birthday),
      "favorites": this.favorites.value
    }
    this.usersService.update(model).subscribe(value => { this._snackBar.open("You successfuly updated your account.","",{duration: 3000}); });
  }

  public findByUsername(username: string){
    this.usersService.findByUsername(username).subscribe(value => { this.data = value; });
  }
}
