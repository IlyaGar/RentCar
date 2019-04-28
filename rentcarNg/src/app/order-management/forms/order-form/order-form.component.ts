import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../models/order';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { User } from 'src/app/user-management/models/user';
import { Car } from 'src/app/car-management/models/car';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  order = new Order(0, "", "",  "", "", null, null, 0, 0);
  user: User;
  car: Car;
  existed = false;
  nameValue:string = '';
  isUser: boolean;
  isCar: boolean;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
  ) { 
    this.orderService.onIsUser.subscribe(b=>this.isUser = b);
    this.orderService.onUser.subscribe(u=>this.user = u);
    this.orderService.onIsCar.subscribe(b=>this.isCar = b);
    this.orderService.onCar.subscribe(c=>this.car = c);
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) return;
      this.orderService.getOrder(p['id']).subscribe(h => this.order = h);
      this.existed = true;
    });
  }
  onSubmit(order: Order){
  if(order.OrderId > 0) this.onUpdate(order);
  else this.onAdd(order);
  this.navigateToOrders();
  }

  onAdd(order: Order) {
    this.orderService.addOrder(order).subscribe(o => order.OrderId);
  }

  onUpdate(order: Order) {
    this.orderService.updateOrder(order).subscribe(o => order.OrderId);
  }

  navigateToOrders() {
    this.router.navigate(['/orders']);
  }

  onSelectUser(){
    this.orderService.onSelectUser(null);
    this.isUser = true;
  }

  onSelectCar(){
    this.orderService.onSelectCar(null);
    this.isCar = true;
  }
}
