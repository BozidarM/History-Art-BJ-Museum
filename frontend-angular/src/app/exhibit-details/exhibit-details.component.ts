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
