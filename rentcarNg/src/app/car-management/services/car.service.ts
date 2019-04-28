import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
    providedIn: 'root'
  })

  export class CarService {
    private url = environment.apiUrl + 'api/cars/';
  
    constructor(private http: HttpClient) { }
  
    getCars(): Observable<Array<Car>> {
      return this.http.get<Array<Car>>(this.url);
    }
}

