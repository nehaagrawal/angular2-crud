import { Component ,OnInit , TemplateRef  } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import {HttpRequestService} from './services/HttpRequest.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {Car} from "./Car";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sample angular 2 App';
  private myColumnDefs: any[];
  private myGridOptions: GridOptions;
  private rowData;
  public bsModalRef: BsModalRef;
  private updatedRows : any[];

constructor (private httpRequestService : HttpRequestService , private modalService: BsModalService )
{

}
ngOnInit(): void {
  this.myGridOptions = this.createGridOptions();
  this.myColumnDefs = [
  {headerName : "#" , width: 30 , checkboxSelection: true , suppressSorting : true , suppresssMenu: true , pinned: true},
              {headerName: "Make", field: "make" , editable :true},
              {headerName: "Model", field: "model", editable :true},
              {headerName: "Price", field: "price" , editable :true},
              {headerName: "Year", field: "year" , editable :true},
              {headerName: "Color", field: "color", editable :true},
              {headerName: "Rating", field: "rating" , editable :true},
              {headerName: "Dealer Name", field: "dealer", editable :true},
          ];

          this.rowData = [
              {make: "Toyota", model: "Celica", price: 35000 , year: 2017, color : "red", rating : "5", dealer: "Dealer 1"},
              {make: "Ford", model: "Mondeo", price: 32000, year : 2016 , color : "black" , rating : "4" , dealer : "Dealer 2"},
              {make: "Porsche", model: "Boxter", price: 72000, year: 2014, color: "grey" , rating : "4" , dealer : "Dealer 3"}
          ]

/*
          this.httpRequestService.getAsyncData("/testService").subscribe(result => {
         console.log("result " + result);
        // this.rowData = result;
          })
*/
}

private createGridOptions ()
{
  let gridOptions : GridOptions = {
   enableColResize: true,
   enableSorting : true,
   enableFilter: true,
   pagination: true,
   rowSelection : 'multiple',
   onCellValueChanged : function(event)
   {
   var data = event.data;
   console.log("row data " + JSON.stringify(data) );
  // this.updatedRows.push(data);
   console.log("onCellValueChanged " + event.colDef.field + "= " + event.newValue );
   console.log(" this.updatedRows" + JSON.stringify( this.updatedRows) );

   //keep an array of all update rows. On click of update , pass that array to rest service and then clear it.
   },
   onSelectionChanged: this.onSelectionChanged
  };

return gridOptions;
}

onSelectionChanged()
{
console.log('selection changed');
var selectedRows = this.myGridOptions.api.getSelectedRows();
  // console.log(JSON.stringify(selectedRows) );
}

getGridOptions() : GridOptions
{
  return this.myGridOptions;
}

getColumnDef() : any[] {
  return this.myColumnDefs;
}

public create(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(ModalContentComponent);
   this.bsModalRef.content.title = 'Create New Car';
   let list = ['Open a modal with component', 'Pass your data', 'Do something else', '...'];
      this.bsModalRef.content.list = list;
      setTimeout(() => {
        list.push('PROFIT!!!');
      }, 2000);
  }

  update()
  {
  alert("update is called");
  }

  delete()
  {
  alert("delete is called");

  }

}


/* This is a component which we pass in modal*/

@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <!--
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul> -->

      <form class="form-horizontal">
        <div class="form-group">
          <label class="control-label col-sm-3" for="make">Make:</label>
          <div class="col-sm-9">
            <input type="textbox" class="form-control" required id="make" [(ngModel)]="model.make" name="make" placeholder="Enter make">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-3" for="modelNumber">Model:</label>
          <div class="col-sm-9">
            <input type="textbox" class="form-control" id="modelNumber"  required [(ngModel)]="model.modelNumber" name="modelNumber" placeholder="Enter Model">
          </div>
        </div>

<div class="form-group">
          <label class="control-label col-sm-3" for="price">Price:</label>
          <div class="col-sm-9">
            <input type="textbox" class="form-control" id="price" required [(ngModel)]="model.price" name="price" placeholder="Enter Price">
          </div>
        </div>

<div class="form-group">
          <label class="control-label col-sm-3" for="year">Year:</label>
          <div class="col-sm-9">
            <input type="textbox" class="form-control" id="year" required [(ngModel)]="model.year" name="year" placeholder="Enter Year">
          </div>
        </div>

<div class="form-group">
          <label class="control-label col-sm-3" for="color">Color:</label>
          <div class="col-sm-9">
            <input type="textbox" class="form-control" id="color" required [(ngModel)]="model.color" name="color" placeholder="Enter Color">
          </div>
        </div>

<div class="form-group">
          <label class="control-label col-sm-3" for="rating">Rating:</label>
          <div class="col-sm-9">
            <input type="textbox" class="form-control" id="rating" required [(ngModel)]="model.rating" name="rating" placeholder="Enter Rating">
          </div>
        </div>

<div class="form-group">
          <label class="control-label col-sm-3" for="dealer">Dealer:</label>
          <div class="col-sm-9">
            <input type="textbox" class="form-control" id="dealer" required [(ngModel)]="model.dealer" name="dealer" placeholder="Enter Dealer">
          </div>
        </div>


        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-9">
            <button type="submit" class="btn btn-default" (click)="save()">Submit</button>
          </div>
        </div>
      </form>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>
    </div>
  `
})
export class ModalContentComponent {
  public title: string;
  public list: any[] = [];
  model = new Car();
  constructor(public bsModalRef: BsModalRef) {}

save()
{

console.log("clicked on save " );
console.log("make " + this.model.make);
console.log("model " + this.model.modelNumber);
console.log("price " + this.model.price);
console.log("year " + this.model.year);
console.log("color " + this.model.color);
console.log("rating " + this.model.rating);
console.log("dealer " + this.model.dealer);

}
}
