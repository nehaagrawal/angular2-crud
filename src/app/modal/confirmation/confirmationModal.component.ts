import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Component ,OnInit , TemplateRef  } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import {HttpRequestService} from '../../services/HttpRequest.service';


@Component({
  selector: 'modal-content',
  templateUrl: './confirmationModal.component.html',
    styleUrls: ['./confirmationModal.component.css']
})
export class ConfirmationModalComponent {
  public title: string;
  public action: string;
  public myGridOptions: GridOptions;
  private selectedRows: any[];
  constructor(public bsModalRef: BsModalRef , private httpRequestService : HttpRequestService) {}


confirm()
{
  if(this.action == "delete")
  {
    var selectedData = this.myGridOptions.api.getSelectedRows();
    var res = this.myGridOptions.api.updateRowData({remove: selectedData});
    //this.httpRequestService.delete(this.selectedRows);
  }
  else if (this.action == "update")
  {

//this.httpRequestService.update();
  }
    this.bsModalRef.hide();

}

}
