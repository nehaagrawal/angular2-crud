import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Component ,OnInit , TemplateRef  } from '@angular/core';
import {HttpRequestService} from '../../services/HttpRequest.service';
import {Car} from "../../model/Car";
import {GridOptions} from "ag-grid/main";



@Component({
  selector: 'modal-content',
  templateUrl: './createCarModal.component.html',
    styleUrls: ['./createCarModal.component.css']
})
export class ModalContentComponent {
  public title: string;
  model = new Car();
  action: string;
    public myGridOptions: GridOptions;

  constructor(public bsModalRef: BsModalRef , private httpRequestService : HttpRequestService) {}

save()
{
console.log("make " + this.model.make);
console.log("model " + this.model.modelNumber);
console.log("price " + this.model.price);
console.log("year " + this.model.year);
console.log("color " + this.model.color);
console.log("rating " + this.model.rating);
console.log("dealer " + this.model.dealer);

if(this.action == "create")
{
//this.httpRequestService.create();
    var newItem = this.createNewRowData();
    var res = this.myGridOptions.api.updateRowData({add: [newItem]});

}
else if (this.action == "update")
{
 //this.httpRequestService.update();
//check if this works
  // this.myGridOptions.api.refreshCells(true);
}


this.bsModalRef.hide();
}


 createNewRowData() {
    var newData = {
        make: this.model.make,
        model: this.model.modelNumber,
        price: this.model.price,
        year: this.model.year,
        color: this.model.color,
        rating: this.model.rating,
        dealer : this.model.dealer
    };


    return newData;
}

}
