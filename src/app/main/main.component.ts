import {Component, Inject, OnInit} from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {User} from '../model/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }
  ngOnInit() {
    console.log('from session storage');
    const data = this.storage.get('user');
    console.log(data);
  }
}
