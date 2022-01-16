import { Component, OnInit } from '@angular/core';
import { ExhibitionsService, ExhibitionsStatus } from '../../services/exhibitions.service';
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

  constructor(private exhibitionsService: ExhibitionsService, private exhibitsService: ExhibitsService, private _snackBar: MatSnackBar, private dialog: MatDialog, private route:ActivatedRoute, private router: Router) { }

  id: string = "";
  data: any;
  copyData: any;
  priceValue: any;
  timeValue: any;
  plannerNumber: string;  
  rating: any;
  username: string;

  ngOnInit(): void {
    this.plannerNumber =localStorage.getItem("plannerNumber");
    this.username = localStorage.getItem("username");
    // this.findAllByType().subscribe(value => { this.exhibitionsSource.data = value;});
    this.findAllByType();

    // console.log(this.exhibitionsSource.data);
    
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

  onFilterChange(event: any, type: string){

    console.log(event);
    console.log(type);

    if(event.value == '' || categories== [] || event.value == 0)
    {
      console.log('USOOO');
      
      var filtered_data = [];

      this.data = this.findAllByType()
      console.log(this.data);
      

      switch(type){
        case 'sort':
          if (event.value == ""){
            this.copyData;
          }
          if (event.value == "title-asc"){
            
            this.copyData = this.data.sort(sortBy("title"));
          }
          if (event.value == "title-dsc"){

            this.copyData = this.data.sort(sortBy("-title"));
          }
          if (event.value == "price-asc"){

            this.copyData = this.data.sort(sortBy("price"));
          }
          if (event.value == "price-dsc"){

            this.copyData = this.data.sort(sortBy("-price"));
          }
          if (event.value == "time-asc"){

            this.copyData = this.data.sort(sortBy("tourTime"));
          }
          if (event.value == "time-dsc"){

            this.copyData = this.data.sort(sortBy("-tourTime"));
          }
          break;
        case 'price':
          if (event.value > 0){
              this.copyData = this.copyData.filter(function(exhibition){
                  return exhibition.price <= event.value;
                })
          }else if(event.value == 0){
            this.copyData;
          }
          break;
        case 'tour':
          if (event.value > 0){
              this.copyData = this.copyData.filter(function(exhibition){
                return exhibition.tourTime <= event.value;
              })
          }else if(event.value == 0){
            this.copyData;
          }
          break;
        case 'category':
            var categories = this.categories.value;
            if(categories.length > 0){
              this.copyData = this.copyData.filter(function(item) {
                return categories.includes(item.category); 
              })
            }
            else
            {
              this.copyData;
            }
            break;
      }
      this.data = this.copyData;
    }else{
      switch(type){
        case 'sort':
          if (event.value == ""){
            this.copyData;
          }
          if (event.value == "title-asc"){
            
            this.copyData = this.data.sort(sortBy("title"));
          }
          if (event.value == "title-dsc"){

            this.copyData = this.data.sort(sortBy("-title"));
          }
          if (event.value == "price-asc"){

            this.copyData = this.data.sort(sortBy("price"));
          }
          if (event.value == "price-dsc"){

            this.copyData = this.data.sort(sortBy("-price"));
          }
          if (event.value == "time-asc"){

            this.copyData = this.data.sort(sortBy("tourTime"));
          }
          if (event.value == "time-dsc"){

            this.copyData = this.data.sort(sortBy("-tourTime"));
          }
          break;
        case 'price':
          if (event.value > 0){
              this.copyData = this.copyData.filter(function(exhibition){
                  return exhibition.price <= event.value;
                })
          }else if(event.value == 0){
            this.copyData;
          }
          break;
        case 'tour':
          if (event.value > 0){
              this.copyData = this.copyData.filter(function(exhibition){
                return exhibition.tourTime <= event.value;
              })
          }else if(event.value == 0){
            this.copyData;
          }
          break;
        case 'category':
            var categories = this.categories.value;
            if(categories.length > 0){
              this.copyData = this.copyData.filter(function(item) {
                return categories.includes(item.category); 
              })
            }
            else
            {
              this.copyData;
            }
            break;
      }
    }
  }

  public findAllByType(){
    return this.exhibitionsService.findAllByType().subscribe(value => { this.data = value; this.copyData = value; });
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
    return this.exhibitionsService.findExhibitionsById(id).subscribe(value => { this.data = value });
  }

}
