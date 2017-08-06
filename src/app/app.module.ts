import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap';
import { AppComponent , ModalContentComponent } from './app.component';
import {AgGridModule} from "ag-grid-angular/main";
import {HttpModule} from '@angular/http';
import {HttpRequestService} from './services/HttpRequest.service';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent , ModalContentComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    HttpModule,
    FormsModule,
    AgGridModule.withComponents([]),
    ModalModule.forRoot()
  ],
  providers: [HttpRequestService],
  bootstrap: [AppComponent],
  entryComponents : [ModalContentComponent]
})
export class AppModule { }
