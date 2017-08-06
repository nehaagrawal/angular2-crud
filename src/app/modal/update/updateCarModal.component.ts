import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Component ,OnInit , TemplateRef  } from '@angular/core';
import {HttpRequestService} from '../../services/HttpRequest.service';
import {Car} from "../../Car";


@Component({
  selector: 'modal-content',
  templateUrl: './updateCarModal.component.html',
    styleUrls: ['./updateCarModal.component.css']
})
export class UpdateCarModalComponent {
  public title: string;
  public list: any[] = [];
  model = new Car();
  constructor(public bsModalRef: BsModalRef) {


  }

update()
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
