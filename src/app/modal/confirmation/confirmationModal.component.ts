import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Component ,OnInit , TemplateRef  } from '@angular/core';


@Component({
  selector: 'modal-content',
  templateUrl: './confirmationModal.component.html',
    styleUrls: ['./confirmationModal.component.css']
})
export class ConfirmationModalComponent {
  public title: string;

  constructor(public bsModalRef: BsModalRef) {}


confirm()
{
this.bsModalRef.hide();
}
}
