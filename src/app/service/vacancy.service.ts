import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {RequestOptions} from '@angular/http';

@Injectable()
export class VacancyService {

  constructor(private http: HttpClient) { }

  getInspection(id: string): Observable<any> {

    // http://localhost:8081/inspections/user?userId=2
    return this.http.get('http://localhost:8081/inspections/user?userId='.concat(id));
  }
}
