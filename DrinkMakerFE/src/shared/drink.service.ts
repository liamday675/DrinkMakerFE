import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) { }

  getActions(drink: string): Observable<string[]> {
    return this.http.get<string[]>(environment.apistub + `drinkmaker/drinkactions/?drink=${drink}`);

  }
}
