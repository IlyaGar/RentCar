import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderListItem } from '../models/order-list-item';
import { Order } from '../models/order';
import { User } from 'src/app/user-management/models/user';
import { Car } from 'src/app/car-management/models/car';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private isSelectUser: boolean = false;
  private isSelectCar: boolean = false;
  private url = environment.apiUrl + 'api/orders/';
  onIsUser:EventEmitter<boolean> = new EventEmitter();
  onUser:EventEmitter<User> = new EventEmitter();
  onIsCar:EventEmitter<boolean> = new EventEmitter();
  onCar:EventEmitter<Car> = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Array<OrderListItem>> {
    return this.http.get<Array<OrderListItem>>(this.url);
  }

  getOrder(orderId: number): Observable<Order> {
    var strId = '?id=' + orderId;
    return this.http.get<Order>(`${this.url}${strId}`);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.url}`, order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.url}${order.OrderId}`, order);;
  }

  deleteOrder(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.url}${id}`);
  }   
  
  onSelectUser(user: User){
    if(this.isSelectUser = true){
      this.isSelectUser = false;
      this.onUser.emit(user);
    }
    else
      this.isSelectUser = true
    this.onIsUser.emit(this.isSelectUser);
  }

  onSelectCar(car: Car){
    if(this.isSelectCar = true){
      this.isSelectCar = false;
      this.onCar.emit(car);
    }
    else
      this.isSelectCar = true
    this.onIsCar.emit(this.isSelectCar);
  }
}