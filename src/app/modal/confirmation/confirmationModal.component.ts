import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Component ,OnInit , TemplateRef  } from '@angular/core';
import {GridOptions} from "ag-grid/main";


@Component({
  selector: 'modal-content',
  templateUrl: './confirmationModal.component.html',
    styleUrls: ['./confirmationModal.component.css']
})
export class ConfirmationModalComponent {
  public title: string;
  public action: boolean;
  public myGridOptions: GridOptions;
  constructor(public bsModalRef: BsModalRef) {}


confirm()
{
  if(this.action == "delete")
  {
    var selectedData = this.myGridOptions.api.getSelectedRows();
    var res = this.myGridOptions.api.updateRowData({remove: selectedData});
  }
  else if (this.action == "update")
  {

  }
    this.bsModalRef.hide();

}

}
