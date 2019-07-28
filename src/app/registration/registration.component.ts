import {Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../service/user.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name: string;
  password: string;

  constructor(private router: Router, private userService: UserService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }

  myEvent() {
    console.log(this.name + this.password);
    this.userService.getUser(this.name, this.password).subscribe(
      user => {
        if (this.name === user.valueOf().username && this.password === user.valueOf().password) {
          // sessionStorage.setItem('user', user);
          this.storage.set('user', user);
          this.router.navigate(['main']);
        } else {
          alert('Неправильный логин или пароль');
        }
        console.log(user);
      },
      err => {
        console.log(err);
      }
    );
  }
  reg(){
    this.router.navigate(['reg']);
  }
}
