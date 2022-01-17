import { Component, OnInit } from '@angular/core';
import { ExhibitionsService, ExhibitionsStatus } from '../../services/exhibitions.service';
import { UsersService } from '../../services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExhibitsService } from '../../services/exhibits.service';
import { MatDialog } from '@angular/material/dialog';
import { sortBy } from 'sort-by-typescript';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export interface ItemsExhibition {
  image: string;
  title: string;
  price: any;
  time: any;
  stars: any;
}

@Component({
  selector: 'app-default-exhibitions',
  templateUrl: './default-exhibitions.component.html',
  styleUrls: ['./default-exhibitions.component.css']
})
export class DefaultExhibitionsComponent implements OnInit {

  dialogOpen: boolean = false;

  displayedColumns = ["image", "title", "price", "time", "rating"];

  categories = new FormControl();
  ListCategories: string[] = ['Roman', 'Egyptian', 'Greek', 'Chinese', 'Byzantine'];

  favorites = new FormControl();
  ListFavorites: any[];

  constructor(private exhibitionsService: ExhibitionsService, private exhibitsService: ExhibitsService, private userService: UsersService, private _snackBar: MatSnackBar, private dialog: MatDialog, private route:ActivatedRoute, private router: Router) { }

  id: string = "";
  data: any;
  copyData: any;
  user: any;

  priceValue: number = 0;
  timeValue: number = 0;
  searchValue: any = "";
  sortValue: any;
  categoryArray: any = [];

  plannerNumber: string;  
  rating: any;
  username: string;

  ngOnInit(): void {
    this.plannerNumber =localStorage.getItem("plannerNumber");
    this.username = localStorage.getItem("username");
    this.findByUsername(this.username).subscribe(value => { this.user = value;  this.ListFavorites = this.user.favorites});
    this.findAllByType();
    // console.log(this.exhibitionsSource.data)
  }

  public showOneExhibition(id: String): any {
    this.exhibitionsService.showExhibition(id);
  }

  search(search: any){

    if (search.value == ""){
      // this.findAllByType().subscribe(value => { this.exhibitionsSource.data = value; });
    }
    else{
      // this.exhibitsService.findAllByName(search.value.trim()).subscribe(value => { this.data = value; });
    }
  }

  AddExhibitionPlanner(tour: any){
    if (localStorage.getItem("logedin") == "true"){
      var lc = this.allStorage().filter(function(exhibition){
        return exhibition.startsWith("exhibition") ;
      });

      var ids = [];
      lc.forEach(function(element){
        element = element.substring(element.indexOf("=") + 1);
        var getId = JSON.parse(element)
        ids.push(getId.id)
      });

      if(!ids.includes(tour.id)){
        var plannerNumber: number = +localStorage.getItem("plannerNumber");
        var incrementPlannerNumber = plannerNumber++;

        if (++incrementPlannerNumber == parseInt(localStorage.key(parseInt(localStorage.getItem("exhibition" + incrementPlannerNumber))).substring(10))){
          
          localStorage.setItem("plannerNumber", ""+incrementPlannerNumber);
          localStorage.setItem("exhibition" + ++incrementPlannerNumber,  JSON.stringify(tour));
        }else{
          localStorage.setItem("exhibition" + incrementPlannerNumber,  JSON.stringify(tour));
          localStorage.setItem("plannerNumber", ""+incrementPlannerNumber);
        }

        this._snackBar.open("Successfuly added to planner!","",{duration: 3000});

        this.plannerNumber =localStorage.getItem("plannerNumber");

        // this.findExhibitById(this.id);
      }
      else{
        this._snackBar.open("This exhibition is already in planner!","",{duration: 3000});
      }
    }else{
      this.router.navigate(['/login'])
    }
  }

  onFilterChange(){

    // this.copyData = this.findAllByType()

    let arr = this.copyData;
    console.log(this.searchValue);
    
    let search = this.searchValue.trim().toLowerCase();

    if(search != ""){
      arr = arr.filter((product) => {
        return product.title.toLowerCase().includes(search);
      });
    }
    
    if (this.sortValue == "title-asc"){
      
      arr = arr.sort(sortBy("title"));
    }
    if (this.sortValue == "title-dsc"){

      arr = arr.sort(sortBy("-title"));
    }
    if (this.sortValue == "price-asc"){

      arr = arr.sort(sortBy("price"));
    }
    if (this.sortValue == "price-dsc"){

      arr = arr.sort(sortBy("-price"));
    }
    if (this.sortValue == "time-asc"){

      arr = arr.sort(sortBy("tourTime"));
    }
    if (this.sortValue == "time-dsc"){

      arr = arr.sort(sortBy("-tourTime"));
    }
    
    if (this.priceValue > 0){
        arr = arr.filter((exhibition) =>{
            return exhibition.price <= this.priceValue;
          })
    }

    if (this.timeValue > 0){
        arr = arr.filter((exhibition) =>{
          return exhibition.tourTime <= this.timeValue;
        })
    }

    var favorites = this.favorites.value;
    if(favorites != undefined){
      if(favorites.length > 0){
        arr = arr.filter(function(item) {
          return favorites.includes(item.category); 
        })
      }
    }

    var categories = this.categories.value;
    if(categories != undefined){
      if(categories.length > 0){
        arr = arr.filter(function(item) {
          return categories.includes(item.category); 
        })
      }
    }
    this.data = arr;
  }

  public findAllByType(){
    return this.exhibitionsService.findAllByType().subscribe(value => { this.data = value; this.copyData = value;
        for(let item of this.data)
        {
          if(item.stars.length > 0)
          {
            item.rating = this.exhibitionsService.average(item.stars);
          }
        } 
     });
  }

  public allStorage() {

    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push( key + '=' + localStorage.getItem(key));
    }

    return archive;
  }

  public findExhibitionsById(id: string): any {
    return this.exhibitionsService.findExhibitionsById(id).subscribe(value => { this.data = value; });
  }

  public findByUsername(username: string): any{
    return this.userService.findByUsername(username);
  }

}
