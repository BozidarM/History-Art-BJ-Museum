import { Component, OnInit } from '@angular/core';
import { ExhibitionsService, ExhibitionsStatus } from '../services/exhibitions.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExhibitsService } from '../services/exhibits.service';
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
  selector: 'app-exhibition-details',
  templateUrl: './exhibition-details.component.html',
  styleUrls: ['./exhibition-details.component.css']
})
export class ExhibitionDetailsComponent implements OnInit {

  displayedColumns = ["image", "title", "price", "time", "rating"];

  constructor(private exhibitionsService: ExhibitionsService, private exhibitsService: ExhibitsService, private _snackBar: MatSnackBar, private dialog: MatDialog, private route:ActivatedRoute, private router: Router) { }

  id: string = "";
  data: any;
  copyData: any;
  priceValue: any;
  timeValue: any;
  plannerNumber: string;  
  rating: any;
  username: string;
  databaseItems: any;
  ids: any = [];

  ngOnInit(): void {
    this.plannerNumber =localStorage.getItem("plannerNumber");
    this.username = localStorage.getItem("username");
    // this.findAllByType().subscribe(value => { this.exhibitionsSource.data = value;});
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.findExhibitionsById(this.id).subscribe(value => { this.data = value;
      if(this.data.stars.length > 0){
        this.data.rating = this.exhibitionsService.average(this.data.stars)
      }
      var items = this.data.items;
      for(let i of items){
        this.ids.push(i.id)
      }
      this.findAllById(this.ids).subscribe(value => { this.databaseItems = value;}); 
    });

    // console.log(this.exhibitionsSource.data);
    
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
    return this.exhibitionsService.findExhibitionsById(id);
  }

  public findAllById(ids: any){
    return this.exhibitsService.findAllById(ids)
  }


}
