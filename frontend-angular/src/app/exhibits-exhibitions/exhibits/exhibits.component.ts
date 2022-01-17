import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ExhibitsService } from '../../services/exhibits.service';
import { UsersService } from '../../services/users.service';
import { sortBy } from 'sort-by-typescript';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-exhibits',
  templateUrl: './exhibits.component.html',
  styleUrls: ['./exhibits.component.css']
})
export class ExhibitsComponent implements OnInit {

  constructor(private exhibitsService: ExhibitsService, private userService: UsersService, private _snackBar: MatSnackBar, private router: Router) { }

  data: any;
  copyData: any;
  p: number = 1;
  value: any;
  customPlannerNumber: string;  
  rating: any;
  categories: any;
  username: string;
  user: any;

  priceValue: number = 0;
  timeValue: number = 0;
  searchValue: string = '';
  sortValue: string;

  cultures = new FormControl();
  ListCultures: string[] = ['Roman', 'Egyptian', 'Greek', 'Chinese', 'Byzantine'];

  centuries = new FormControl();
  ListCenturies: string[] = ["10th century BCE", "11th century", "15th century", "15th-13th century BCE", "18th century", "19th century", "19th-20th century", 
                            "1st century BCE-1st century CE", "1st century BCE-2nd century CE", "1st-2nd century CE", "2nd-3rd century CE", "2nd-5th century CE",
                            "3rd century BCE", "3rd century CE", "3rd-2nd millennium BCE", "4th century BCE", "5th century", "5th-6th century","5th-7th century",
                            "6th century", "6th century BCE", "6th-9th century", "7th century BCE", "7th-1st century BCE", "mid 7th-late 1st century BCE"];

  classifications = new FormControl();
  ListClassifications: string[] = [ "Armor", "Coins", "Jewelry", "Lighting Devices", "Measuring Devices", "Ritual Implements", "Sculpture", "Textile Arts",
                                  "Tools and Equipment", "Vessels", "Weapons and Ammunition"];

  periods = new FormControl();
  ListPeriods: string[] = ["Archaic period", "Bronze Age, Late", "Byzantine period", "Byzantine period, Early", "Classical period, Late", 
                          "Classical period, Late, to Early Hellenistic", "Fatimid period", "Hellenistic period, Early", "Late Period to Ptolemaic", 
                          "Late Period, Dynasty 26", "Middle Kingdom", "Ming dynasty, 1368-1644", "Northern Wei, 386-534", "Qing dynasty, 1644-1911", 
                          "Roman Imperial period", "Roman Imperial period, Middle", "Roman period", "Zhou dynasty, Western Zhou period, c. 1050-771 BCE"];

  ratings = new FormControl();
  ListRatings: number[] = [1, 2, 3, 4, 5];

  favorites = new FormControl();
  ListFavorites: any[];

  ngOnInit(): void {
    this.customPlannerNumber =localStorage.getItem("customPlannerNumber");
    this.username = localStorage.getItem("username");
    this.findByUsername(this.username).subscribe(value => { this.user = value;  this.ListFavorites = this.user.favorites});
    this.findAll();
  }

  AddExhibitPlanner(exhibit: any){
    if (localStorage.getItem("logedin") == "true"){
      var lc = this.allStorage().filter(function(exhibit){
        return exhibit.startsWith("product") ;
      });

      var ids = [];
      lc.forEach(function(element){
        element = element.substring(element.indexOf("=") + 1);
        var getId = JSON.parse(element)
        ids.push(getId.id)
      });

      if(!ids.includes(exhibit.id)){
        var plannerNumber: number = +localStorage.getItem("customPlannerNumber");
        var incrementPlannerNumber = plannerNumber++;

        if (++incrementPlannerNumber == parseInt(localStorage.key(parseInt(localStorage.getItem("product" + incrementPlannerNumber))).substring(7))){
          
          localStorage.setItem("customPlannerNumber", ""+incrementPlannerNumber);
          localStorage.setItem("product" + ++incrementPlannerNumber,  JSON.stringify(exhibit));
        }else{
          localStorage.setItem("product" + incrementPlannerNumber,  JSON.stringify(exhibit));
          localStorage.setItem("customPlannerNumber", ""+incrementPlannerNumber);
        }

        this._snackBar.open("Successfuly added to planner!","",{duration: 3000});

        this.customPlannerNumber =localStorage.getItem("customPlannerNumber");

        // this.findExhibitById(this.id);
      }
      else{
        this._snackBar.open("This exhibit is already in planner!","",{duration: 3000});
      }
    }else{
      this.router.navigate(['/login'])
    }
  }

  onFilterChange(){

    //SORT
    let arr = this.copyData;
    
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
          return favorites.includes(item.culture); 
        })
      }
    }

    var cultures = this.cultures.value;
    if(cultures != undefined){
      if(cultures.length > 0){
        arr = arr.filter(function(item) {
          return cultures.includes(item.culture); 
        })
      }
    }

    var centuries = this.centuries.value;
    if(centuries != undefined){
      if(centuries.length > 0){
        arr = arr.filter(function(item) {
          return centuries.includes(item.century); 
        })
      }
    }

    var classifications = this.classifications.value;
    if(classifications != undefined){
      if(classifications.length > 0){
        arr = arr.filter(function(item) {
          return classifications.includes(item.classification); 
        })
      }
    }

    var periods = this.periods.value;
    if(periods != undefined){
      if(periods.length > 0){
        arr = arr.filter(function(item) {
          return periods.includes(item.period); 
        })
      }
    }

    var ratings = this.ratings.value;
    if(ratings != undefined){
      if(ratings.length > 0){
        arr = arr.filter(function(item) {
          return ratings.includes(item.rating); 
        })
      }
    }
    this.data = arr;
    
  }

  

  public findAll(): any {
    this.exhibitsService.findAll().subscribe(value => { this.data = value; this.copyData = value; });
  }

  public showOneExibit(id: String): any {
    this.exhibitsService.showExhibit(id);
  }

  public findByUsername(username: string): any{
    return this.userService.findByUsername(username);
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

}
