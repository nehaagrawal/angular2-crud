import { Component ,OnInit , TemplateRef  } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import {HttpRequestService} from './services/HttpRequest.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {Car} from "./Car";
import {ModalContentComponent} from "./modal/createCarModal.component";

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
  private selectedRows: any[];

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
   onSelectionChanged: this.onSelectionChanged,
   onCellValueChanged : function(event)
   {
   var data = event.data;
   console.log("row data " + JSON.stringify(data) );
  // this.updatedRows.push(data);
   console.log("onCellValueChanged " + event.colDef.field + "= " + event.newValue );
   console.log(" this.updatedRows" + JSON.stringify( this.updatedRows) );

   //keep an array of all update rows. On click of update , pass that array to rest service and then clear it.
   }
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
  }

  update()
  {
  alert("update is called");
  }

  delete()
  {
  alert("are you sure you want to delete the " + this.selectedRows.length + " selected rows " );

  }

}

