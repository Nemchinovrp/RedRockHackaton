import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(login: String, password: String): Observable<any> {
    console.log(login + ' ' + password);
    const body = {username: login, password : password};
    return this.http.post('http://localhost:8081/login', body);
  }
}
