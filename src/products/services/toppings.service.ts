import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Topping } from '../models/topping.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ToppingsService {
  constructor(private http: HttpClient) {}

  getToppings(): Observable<Topping[]> {
    return this.http
      .get<Topping[]>(`${environment.base_url}/toppings`)
      /* .pipe(catchError((error: any) => Observable.throw(error.json()))); */
  }
}
