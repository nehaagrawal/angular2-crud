import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import {AgGridModule} from "ag-grid-angular/main";
import {HttpModule} from '@angular/http';
import {HttpRequestService} from './services/HttpRequest.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    HttpModule,
    AgGridModule.withComponents([])
  ],
  providers: [HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
