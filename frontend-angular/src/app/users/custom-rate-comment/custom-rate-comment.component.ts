import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExhibitsService, UpdatingStars, Comment} from '../../services/exhibits.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-rate-comment',
  templateUrl: './custom-rate-comment.component.html',
  styleUrls: ['./custom-rate-comment.component.css']
})
export class CustomRateCommentComponent implements OnInit {

  currentRate: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private exhibitService: ExhibitsService, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

    // if(!isNaN(this.currentRate)){
    //   console.log(this.currentRate)
    //   this.updateStars(this.data.candyId, this.currentRate);
    //   console.log(this.currentRate)
    // }

    if (form.value.comment != ""){
      this.insertComment(this.data.elementId, this.data.username, form.value.comment, new Date());
    }

    if(!isNaN(this.currentRate) || form.value.comment != ""){
      this._snackBar.open("Thank you for your feedback!","",{duration: 3000});
    }
  }

  onRate($event:{oldValue:number, newValue:number}) {
   
    this.currentRate = $event.newValue

    this.updateStars(this.data.elementId, this.currentRate); 
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
      "rating": rating,
      "exhibitionId": "no"
    }
    this.exhibitService.updateStars(model).subscribe(value => {});
  }

}
