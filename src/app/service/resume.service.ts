import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ResumeService {

  constructor(private http: HttpClient) {}

  sendUser(login: String, password: String, name: String, email: String, inn: number, ogrn: number): Observable<any> {
    console.log(login + ' ' + password);
    const body = {username: login, password : password, name: name, email: email, inn: inn, ogrn: ogrn};
    return this.http.post('http://localhost:8081/users', body);
  }
}
