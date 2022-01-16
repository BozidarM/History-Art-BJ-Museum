import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExhibitsService, UpdatingStars, Comment} from '../../services/exhibits.service';
import { ExhibitionsService, ExhibitionsStatus } from '../../services/exhibitions.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StarRatingComponent } from 'ng-starrating';


@Component({
  selector: 'app-rate-comment',
  templateUrl: './rate-comment.component.html',
  styleUrls: ['./rate-comment.component.css']
})
export class RateCommentComponent implements OnInit {

  currentRate: number;
  databaseData:any = [];
  ids: any = [];
  databaseItems: any;

  displayedColumns = ["image", "title","rating", "action"];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private exhibitService: ExhibitsService, private exhibitionsService: ExhibitionsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  
    this.findExhibitionsById(this.data.elementId).subscribe(value => { this.databaseData = value;
      var items = this.databaseData.items;
      
      for(let i of items){
        this.ids.push(i.id)
      }
      this.findAllById(this.ids).subscribe(value => { this.databaseItems = value;}); 
    })
    // setTimeout (() => { console.log(this.databaseData)}, 3000)
  }

  onSubmit(form: NgForm, id){

    console.log(this.currentRate)

    // if(!isNaN(this.currentRate)){
    //   console.log(this.currentRate)
    //   this.updateStars(this.data.exhibitId, this.currentRate);
    //   console.log(this.currentRate)
    // }

    if (form.value.comment != ""){
      this.insertComment(id, this.data.username, form.value.comment, new Date());
    }

    if(!isNaN(this.currentRate) || form.value.comment != ""){
      this._snackBar.open("Thank you for your feedback!","",{duration: 3000});
    }
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}, id) {
   
      this.currentRate = $event.newValue

      console.log(id);
      console.log(this.currentRate);

      this.updateStars(id, this.currentRate); 
  }

  public insertComment(exhibitId: string, username: string, content: string, date: Date){
    var model: Comment = {
      "exhibitId": exhibitId,
      "username": username,
      "content": content,
      "postedAt": date
    }
    this.exhibitService.insertComment(model).subscribe(value => {});
  }

  public updateStars(id: string, rating: number){
    var model: UpdatingStars = {
      "id": id,
      "rating": rating
    }
    this.exhibitService.updateStars(model).subscribe(value => {});
  }

  public findAllById(ids: any){
    return this.exhibitService.findAllById(ids)
  }

  public findExhibitionsById(id: string): any {
    return this.exhibitionsService.findExhibitionsById(id);
  }

}
