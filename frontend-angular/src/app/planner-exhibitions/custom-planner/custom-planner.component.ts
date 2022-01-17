import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Exhibitions, ExhibitionsService } from '../../services/exhibitions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExhibitsService } from '../../services/exhibits.service';

export interface ExhibitsCustomPlanner {
  id: number,
  databaseId: string;
  title: string;
  image: string;
  price: any;
  time: any;
  rating: any;
}

@Component({
  selector: 'app-custom-planner',
  templateUrl: './custom-planner.component.html',
  styleUrls: ['./custom-planner.component.css']
})
export class CustomPlannerComponent implements OnInit {

  message: any;
  items: any;
  total_price: number;
  total_time: number;


  EXHIBIT_DATA: ExhibitsCustomPlanner[] = [];

  exhibitsSource = new MatTableDataSource<ExhibitsCustomPlanner>();
  displayedColumns = ["id", "image", "title", "price", "time", "rating", "action"];

  customPlannerNumber: number = +localStorage.getItem("customPlannerNumber");

  constructor(private exhibitionsService: ExhibitionsService,private exhibitsService: ExhibitsService , private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.makeArray();

    this.exhibitsSource.data = this.EXHIBIT_DATA;

    this.items = this.getItems();

    this.total_price =  this.totalPrice();
    this.total_time =  this.totalTime();
  }

  onSubmit(form: NgForm){
    if (localStorage.getItem("logedin") == "true"){
     
      this.insertExhibition(form.value.dateVisit)

      var plannerNumber = localStorage.getItem("plannerNumber")
      var username = localStorage.getItem("username")
      var logedIn = localStorage.getItem("logedin")

      let array = new Map();
      for(let i=0; i < localStorage.length; i++){
        if(localStorage.key(i).includes("exhibition")){
          array.set(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
        }
      }

      localStorage.clear();

      localStorage.setItem("username", username)
      localStorage.setItem("logedin", logedIn)
      localStorage.setItem("customPlannerNumber", "0")
      localStorage.setItem("plannerNumber", ""+plannerNumber)

      for (let [key, value] of array) {
        localStorage.setItem(key, value);
      }

      this.makeArray();

      this.exhibitsSource.data = this.EXHIBIT_DATA;

      this.items = this.getItems();

      this.total_price =  this.totalPrice();
      this.total_time =  this.totalTime();

      window.location.reload();
    }
  }

  deleteFromCart(id: number){

    if (localStorage.getItem("logedin") == "true"){
     
      this.customPlannerNumber = this.customPlannerNumber - 1; 
      localStorage.setItem("customPlannerNumber", ""+this.customPlannerNumber); 
      
      // let stringId = JSON.parse(localStorage.getItem("exhibit" + id)).id;


      localStorage.removeItem("product" + id);

      this.makeArray();

      this.items = this.getItems();

      this.exhibitsSource.data = this.EXHIBIT_DATA;

      this.total_price =  this.totalPrice();
      this.total_time =  this.totalTime();
    }
  }

  public insertExhibition(form){
    var model: Exhibitions = {
      "username": localStorage.getItem("username"),
      "price": this.total_price,
      "tourTime": this.total_time,
      "items": this.items,
      "orderedAt": new Date(),
      "status": "pending",
      "type": "customExhibition",
      "dateVisit": form
    }
    this.exhibitionsService.insert(model).subscribe(value => { this._snackBar.open("Success, please go to reservations to finish your reservation.","",{duration: 7000}); });
  }

  totalPrice(){
    var totalPrice = 0;
    for(let i=0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("product")){
        totalPrice += JSON.parse(localStorage.getItem(localStorage.key(i))).price;
      }
    }
    return Math.round(totalPrice * 100) / 100;
  }

  totalTime(){
    var totalTime = 0;
    for(let i=0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("product")){
        totalTime += JSON.parse(localStorage.getItem(localStorage.key(i))).tourTime;
      }
    }
    return Math.round(totalTime * 100) / 100;
  }

  getItems(){
    var items = [];
    for(let i=0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("product")){
        items.push({id: JSON.parse(localStorage.getItem(localStorage.key(i))).id, 
                    title: JSON.parse(localStorage.getItem(localStorage.key(i))).title, 
                    image: JSON.parse(localStorage.getItem(localStorage.key(i))).image,
                    price: JSON.parse(localStorage.getItem(localStorage.key(i))).price,
                    time: JSON.parse(localStorage.getItem(localStorage.key(i))).tourTime,
                    rating: JSON.parse(localStorage.getItem(localStorage.key(i))).rating})
      }
    }
    return items;
  }

  makeArray(){
    this.EXHIBIT_DATA.length = 0;
    for(let i=0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("product")){
        this.EXHIBIT_DATA.push({id: parseInt(localStorage.key(i).substring(7)),
                                databaseId: JSON.parse(localStorage.getItem(localStorage.key(i))).id, 
                                title: JSON.parse(localStorage.getItem(localStorage.key(i))).title, 
                                image: JSON.parse(localStorage.getItem(localStorage.key(i))).image,
                                price: JSON.parse(localStorage.getItem(localStorage.key(i))).price,
                                time: JSON.parse(localStorage.getItem(localStorage.key(i))).tourTime,
                                rating: JSON.parse(localStorage.getItem(localStorage.key(i))).rating})
                                
      }
    }

  }

}
