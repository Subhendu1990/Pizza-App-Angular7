import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pizza } from '../models/pizza.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(`${environment.base_url}/pizzas`)
      /* .pipe(catchError((error: any) => Observable.throw(error.json()))); */
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(`${environment.base_url}/pizzas`, payload)
      /* .pipe(catchError((error: any) => Observable.throw(error.json()))); */
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`${environment.base_url}/pizzas/${payload.id}`, payload)
      /* .pipe(catchError((error: any) => Observable.throw(error.json()))); */
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .delete<any>(`${environment.base_url}/pizzas/${payload.id}`)
      /* .pipe(catchError((error: any) => Observable.throw(error.json()))); */
  }
}
