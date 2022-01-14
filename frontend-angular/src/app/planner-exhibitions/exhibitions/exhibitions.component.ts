import { Component, OnInit } from '@angular/core';
import { ExhibitionsService, ExhibitionsStatus } from '../../services/exhibitions.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExhibitsService } from '../../services/exhibits.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateExhibitionComponent } from '../update-exhibition/update-exhibition.component';

export interface ItemsExhibition {
  image: string;
  title: string;
  price: any;
  time: any;
  stars: any;
}


@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.css']
})
export class ExhibitionsComponent implements OnInit {

  dialogOpen: boolean = false;

  exhibitionsSource: any = new MatTableDataSource<ItemsExhibition>();
  displayedColumns = ["image", "title", "price", "time", "rating"];

  constructor(private exhibitionsService: ExhibitionsService, private exhibitsService: ExhibitsService, private _snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAllByUsername(localStorage.getItem("username")).subscribe(value => { this.exhibitionsSource.data = value; });
  }

  public findAllByUsername(username: string){
    return this.exhibitionsService.findAllByUsername(username)
  }

  completeOrder(id: any){

    this.changeStatusComplete(id).subscribe(value => { this._snackBar.open("Reservation completed, go to your profile to see and rate this reservation.","",{duration: 5000});
                                                       this.findAllByUsername(localStorage.getItem("username")).subscribe(value => { this.exhibitionsSource.data = value; }); });

  }

  cancelOrder(id: any, items:any){

    this.changeStatusCanceled(id).subscribe(value => { this._snackBar.open("Reservation canceled!","",{duration: 3000}); 
                                                       this.findAllByUsername(localStorage.getItem("username")).subscribe(value => { this.exhibitionsSource.data = value; });});

    var itemArray = [];
    items.forEach(item => {
      itemArray.push({id: item.id, quantity: item.quantity})
      //this.cartDeleteQuantity(item.id, item.quantity);
    }); 
  }

  updateOrder(id: any, city: string, address: string, payment: string){
    // this.dialogOpen = true;

    //     const orderDialog = this.dialog.open(UpdateOrderComponent, {
    //       disableClose: true,
    //       width: "60vw",
    //       data: { orderId: id, city:city, address:address, payment: payment }
    //     });

    //     orderDialog.afterClosed().subscribe(result => {
    //       this.dialogOpen = false;
    //       this.findAllByUsername(localStorage.getItem("username")).subscribe(value => { this.orderSource.data = value; });
    //     })
  }

  public changeStatusComplete(id){
    var model: ExhibitionsStatus = {
      "id": id,
      "status": "completed"
    }
     return this.exhibitionsService.changeStatus(model);
  }

  public changeStatusCanceled(id){
    var model: ExhibitionsStatus = {
      "id": id,
      "status": "canceled"
    }
    return this.exhibitionsService.changeStatus(model);
  }

}
