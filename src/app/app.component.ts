import { Component ,OnInit , TemplateRef  } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import {HttpRequestService} from './services/HttpRequest.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {Car} from "./model/Car";
import {ModalContentComponent} from "./modal/create/createCarModal.component";
import {UpdateCarModalComponent} from "./modal/update/updateCarModal.component";
import {ConfirmationModalComponent} from "./modal/confirmation/confirmationModal.component";

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
  private updatedRowsData : any[];
  private selectedRows: any[];

constructor (private httpRequestService : HttpRequestService , private modalService: BsModalService )
{

}
ngOnInit(): void {
this.selectedRows = [];
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
   rowSelection : 'multiple'
  };

return gridOptions;
}

onSelectionChanged(event: any) {
if(this.myGridOptions)
{
  this.selectedRows = this.myGridOptions.api.getSelectedRows();
   console.log(JSON.stringify(this.selectedRows) );
}
}

   onCellValueChanged (event : any)
   {
   var data = event.data;
   console.log("row data " + JSON.stringify(data) );
   this.updatedRowsData.push(data);
   console.log("onCellValueChanged " + event.colDef.field + "= " + event.newValue );
   console.log(" this.updatedRowsData" + JSON.stringify( this.updatedRowsData) );

   //keep an array of all update rows. On click of update , pass that array to rest service and then clear it.
   }


getGridOptions() : GridOptions
{
  return this.myGridOptions;
}

getColumnDef() : any[] {
  return this.myColumnDefs;
}

public create() {
    this.bsModalRef = this.modalService.show(ModalContentComponent);
    this.bsModalRef.content.title = 'Create New Car';
}

 update()
  {
  if(this.selectedRows.length > 1)
  {
    this.bsModalRef = this.modalService.show(ConfirmationModalComponent);
    this.bsModalRef.content.title = 'Update Confirmation';
    this.bsModalRef.content.message = 'Please select only one row';
    this.bsModalRef.content.action = "warning";
  }
  else if(this.selectedRows.length < 1)
  {
    this.bsModalRef = this.modalService.show(ConfirmationModalComponent);
    this.bsModalRef.content.title = 'Update Confirmation';
    this.bsModalRef.content.message = 'Please select atleast one row';
    this.bsModalRef.content.action = "warning";
  }
  else
  {
    this.bsModalRef = this.modalService.show(UpdateCarModalComponent);
    this.bsModalRef.content.title = 'Update Car';
     this.bsModalRef.content.dealer = 'dealer name';
      this.bsModalRef.content.action = "update";
  }
 }

  delete()
  {
    if(this.selectedRows.length < 1)
    {
       this.bsModalRef = this.modalService.show(ConfirmationModalComponent);
       this.bsModalRef.content.title = 'Delete Confirmation';
       this.bsModalRef.content.message = 'Please select atleast one row';
       this.bsModalRef.content.action = "warning";
    }
    else
    {
       this.bsModalRef = this.modalService.show(ConfirmationModalComponent);
       this.bsModalRef.content.title = 'Delete Confirmation';
       this.bsModalRef.content.message = "are you sure you want to delete the " + this.selectedRows.length + " selected rows ";
       this.bsModalRef.content.action = "delete";
       this.bsModalRef.content.myGridOptions = this.myGridOptions;
       this.bsModalRef.content.selectedRows = this.selectedRows;
    }
  }

}

