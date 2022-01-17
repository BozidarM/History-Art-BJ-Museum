import { Component, OnInit } from '@angular/core';
import { ExhibitionsService, ExhibitionsStatus } from '../../services/exhibitions.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExhibitsService } from '../../services/exhibits.service';
import { MatDialog } from '@angular/material/dialog';
import { RateCommentComponent } from '../rate-comment/rate-comment.component';
import { CustomRateCommentComponent } from '../custom-rate-comment/custom-rate-comment.component';

export interface ItemsExhibition {
  image: string;
  title: string;
  price: any;
  time: any;
  stars: any;
}

@Component({
  selector: 'app-exhibitions-history',
  templateUrl: './exhibitions-history.component.html',
  styleUrls: ['./exhibitions-history.component.css']
})
export class ExhibitionsHistoryComponent implements OnInit {

  dialogOpen: boolean = false;

  exhibitionsSource: any = new MatTableDataSource<ItemsExhibition>();

  displayedColumns = ["image", "title", "price", "time", "action"];

  constructor(private exhibitionsService: ExhibitionsService, private exhibitsService: ExhibitsService, private _snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.findAllOrdersHistoryByUsername(localStorage.getItem("username")).subscribe(value => { this.exhibitionsSource.data = value; });
  }

  public findAllOrdersHistoryByUsername(username: string){
    return this.exhibitionsService.findAllExhibitionsHistoryByUsername(username)
  }

  public deleteById(id: string){
    return this.exhibitionsService.deleteById(id);
  }
  
  deleteOrder(id: any){
    this.deleteById(id).subscribe(value => {  this._snackBar.open("Reservation deleted from history.","",{duration: 3000}); 
                                              this.findAllOrdersHistoryByUsername(localStorage.getItem("username")).subscribe(value => { this.exhibitionsSource.data = value; }); });
  }

  rateAndComment(elementId: any, username: string, type: any){
    if(type == "customExhibition")
    {
      this.dialogOpen = true;

        const rateDialog = this.dialog.open(CustomRateCommentComponent, {
          disableClose: true,
          width: "60%",
          data: { elementId: elementId, username:username }
        });

        rateDialog.afterClosed().subscribe(result => {
          this.dialogOpen = false;
        })
    }
    else
    {
      this.dialogOpen = true;

        const rateDialog = this.dialog.open(RateCommentComponent, {
          disableClose: true,
          width: "60%",
          height: "70%",
          data: { elementId: elementId, username:username }
        });

        rateDialog.afterClosed().subscribe(result => {
          this.dialogOpen = false;
        })
    }
  }

}
