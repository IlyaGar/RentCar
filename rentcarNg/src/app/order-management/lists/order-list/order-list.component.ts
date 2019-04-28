import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrderListItem } from '../../models/order-list-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: OrderListItem[];
  orderId: number;
  editOrder: OrderListItem;
  isSort: boolean = false;
  isSortOrderId: boolean = false;

  orderIdSearch: number;
  firstNameSearch: string;
  secondNameSearch: string;
  brandSearch: string;
  modelSearch: string;
  startDateSearch: Date;
  finishDateSearch: Date;

  ord: OrderListItem;

  constructor(
    private router: Router,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(o => this.orders = o);
  } 

  sortTable(param: string) {
    if(!this.isSort) {
      this.orders.sort((a, b)=> a[param].localeCompare(b[param]));
      this.isSort = true;
    }
    else {
      this.orders.sort((a, b)=> b[param].localeCompare(a[param]));
      this.isSort = false;
    }
  }

  onDeleteOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe((response) => {
      console.log("deleted")});
      this.router.navigate(['/orders']);
    this.orderService.getOrders().subscribe(o => this.orders = o);
  }
  
  filterTable(){
    if(this.orderIdSearch)
      this.filterOrderId();
    if(this.firstNameSearch)
      this.filterFirstName();
    if(this.secondNameSearch)
      this.filterSecondName();
    if(this.brandSearch)
      this.filterBrand();
    if(this.modelSearch)
      this.filterModel();
    if(this.startDateSearch)
      this.filterStartDate();
    if(this.finishDateSearch)
      this.filterFinishDate();
  }

  resetFilter(){
    this.orderIdSearch = null;
    this.firstNameSearch = null;
    this.secondNameSearch = null;
    this.brandSearch = null;
    this.modelSearch = null;
    this.startDateSearch = null;
    this.finishDateSearch = null;
    this.router.navigate(['/orders']);
    this.orderService.getOrders().subscribe(o => this.orders = o);
  }

  sortTableOrder() {
    if(!this.isSortOrderId) {
      this.orders.sort((a,b)=>a.OrderId-b.OrderId);
      this.isSortOrderId = true;
    }
    else {
      this.orders.sort((a,b)=>b.OrderId-a.OrderId);
      this.isSortOrderId = false;
    }
  }

  filterOrderId() {
    this.orders = this.orders.filter(o => o.OrderId === this.orderIdSearch);
  }

  filterFirstName() {
    this.orders = this.orders.filter(o => o.FirstName === this.firstNameSearch);
  }

  filterSecondName() {
    this.orders = this.orders.filter(o => o.SecondName === this.secondNameSearch);
  }

  filterBrand() {
    this.orders = this.orders.filter(o => o.Brand === this.brandSearch);
  }

  filterModel() {
    this.orders = this.orders.filter(o => o.Model === this.modelSearch);
  }

  filterStartDate() {
    this.orders = this.orders.filter(o => o.StartDate === this.startDateSearch.toString());
  }

  filterFinishDate() {
    this.orders = this.orders.filter(o => o.FinishDate === this.finishDateSearch.toString());
  }
}
