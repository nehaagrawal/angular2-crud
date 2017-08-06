import { Component ,OnInit } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import {HttpRequestService} from './services/HttpRequest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sample CRUD App';
  private myColumnDefs: any[];
  private myGridOptions: GridOptions;
  private rowData;

constructor (private httpRequestService : HttpRequestService )
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
   rowSelection : 'multiple'
  };

return gridOptions;
}

getGridOptions() : GridOptions
{
  return this.myGridOptions;
}

getColumnDef() : any[] {
  return this.myColumnDefs;
}

}
