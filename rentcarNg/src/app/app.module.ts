import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarFormComponent } from './car-management/forms/car-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CarService } from './car-management/services/car.service';
import { UserFormComponent } from './user-management/forms/user-form.component';
import { OrderListComponent } from './order-management/lists/order-list/order-list.component';
import { OrderFormComponent } from './order-management/forms/order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    MainPageComponent,
    UserFormComponent,
    OrderListComponent,
    OrderFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
