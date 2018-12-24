import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomersModule } from "./customers/customers.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
   imports: [ BrowserModule, HttpClientModule, CustomersModule, SharedModule, CoreModule ],
   declarations: [ AppComponent ],
   bootstrap: [ AppComponent ],
})
export class AppModule { }

