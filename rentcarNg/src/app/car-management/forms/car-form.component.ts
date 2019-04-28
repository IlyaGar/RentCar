import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
import { OrderService } from 'src/app/order-management/services/order.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})

export class CarFormComponent implements OnInit {

  cars: Car[];
  car: Car;
  @Input() isCar: boolean;

  constructor(
    private carService: CarService,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.carService.getCars().subscribe(c => this.cars = c);
  }

  onSelectCar(car: Car){
    this.orderService.onSelectCar(car);
  }
}