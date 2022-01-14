import { Component, OnInit } from '@angular/core';
import { Exhibits, ExhibitsService } from '../services/exhibits.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-exhibit-details',
  templateUrl: './exhibit-details.component.html',
  styleUrls: ['./exhibit-details.component.css']
})
export class ExhibitDetailsComponent implements OnInit {

  constructor(private exhibitsService: ExhibitsService, private route:ActivatedRoute, private _snackBar: MatSnackBar, private router: Router) { }

  id: string = "";
  data: any;
  comments: any;
  // currentRate: number;
  //this.currentRate = this.data.rating}
  plannerNumber: string;  
  username: string;

  ngOnInit(): void {
    this.plannerNumber =localStorage.getItem("plannerNumber");
    this.username  = localStorage.getItem("username");
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.findExhibitById(this.id);
    this.findAllCommentsByExhibitId(this.id);
  }

  onSubmit(form: NgForm){
    if (localStorage.getItem("logedin") == "true"){
      var lc = this.allStorage().filter(function(exhibit){
        return exhibit.startsWith("exhibit") ;
      });
      var ids = [];
      lc.forEach(function(element){
        element = element.substring(element.indexOf("=") + 1);
        var getId = JSON.parse(element)
        ids.push(getId.id)
      });

      if(!ids.includes(this.data.id)){
        var plannerNumber: number = +localStorage.getItem("plannerNumber");
        var incrementPlannerNumber = plannerNumber++;

        if (++incrementPlannerNumber == parseInt(localStorage.key(parseInt(localStorage.getItem("exhibit" + incrementPlannerNumber))).substring(7))){
          
          localStorage.setItem("plannerNumber", ""+incrementPlannerNumber);
          localStorage.setItem("exhibit" + ++incrementPlannerNumber,  JSON.stringify(this.data));
        }else{
          localStorage.setItem("exhibit" + incrementPlannerNumber,  JSON.stringify(this.data));
          localStorage.setItem("plannerNumber", ""+incrementPlannerNumber);
        }

        this._snackBar.open("Successfuly added to planner!","",{duration: 3000});

        this.plannerNumber =localStorage.getItem("plannerNumber");

        this.findExhibitById(this.id);
      }
      else{
        this._snackBar.open("This exhibit is already in planner!","",{duration: 3000});
      }
    }else{
      this.router.navigate(['/login'])
    }

  }


  public findExhibitById(id: string): any {
    return this.exhibitsService.findExhibitById(id).subscribe(value => { this.data = value });
  }

  public findAllCommentsByExhibitId(id: string): any {
    return this.exhibitsService.findAllByExibitId(id).subscribe(value => { this.comments = value; } );
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
