import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { ExhibitionsService, UpdateExhibition } from '../../services/exhibitions.service';

@Component({
  selector: 'app-update-exhibition',
  templateUrl: './update-exhibition.component.html',
  styleUrls: ['./update-exhibition.component.css']
})
export class UpdateExhibitionComponent implements OnInit {

  dateVisitForForm: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private exhibitionsService: ExhibitionsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dateVisitForForm = this.data.dateVisit;
  }

  onSubmit(form: NgForm){
    console.log(this.data.reservationId);
    console.log(form.value.dateVisit);
    
    this.updateOrder(this.data.reservationId, form.value.dateVisit);
  }

  private updateOrder(id: string, dateVisit: string){
    var model: UpdateExhibition = {
      "id": id,
      "dateVisit": dateVisit
    }
    this.exhibitionsService.update(model).subscribe(value => { this._snackBar.open("Reservation is successfuly updated!","",{duration: 3000}); });
  }

}
