import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import {AgGridModule} from "ag-grid-angular/main";
import {HttpModule} from '@angular/http';
import {HttpRequestService} from './services/HttpRequest.service';
import { ModalModule } from 'ngx-bootstrap';
import { DatepickerModule } from 'ngx-bootstrap';
import { ModalContentComponent } from './modal/create/createCarModal.component';
import { UpdateCarModalComponent } from './modal/update/updateCarModal.component';
import { ConfirmationModalComponent } from './modal/confirmation/confirmationModal.component';

@NgModule({
  declarations: [
    AppComponent , ModalContentComponent , UpdateCarModalComponent , ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    HttpModule,
    FormsModule,
    AgGridModule.withComponents([]),
    ModalModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [HttpRequestService],
  bootstrap: [AppComponent],
  entryComponents : [ModalContentComponent , UpdateCarModalComponent , ConfirmationModalComponent]
})
export class AppModule { }
