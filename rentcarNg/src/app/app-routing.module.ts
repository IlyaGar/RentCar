import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarFormComponent } from './car-management/forms/car-form.component';
import { UserFormComponent } from './user-management/forms/user-form.component';
import { OrderListComponent } from './order-management/lists/order-list/order-list.component';
import { OrderFormComponent } from './order-management/forms/order-form/order-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'cars', component: CarFormComponent },
  { path: 'users', component: UserFormComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'order/:id', component: OrderFormComponent },
  { path: 'order', component: OrderFormComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
