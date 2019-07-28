import {Component, Inject, OnInit} from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {User} from '../model/user';
import {VacancyService} from '../service/vacancy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private user;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private vacancyService: VacancyService) {
  }


  ngOnInit() {
    console.log('from session storage');
    const data = this.storage.get('user');
    console.log(data.id);

    this.vacancyService.getInspection(data.id).subscribe(
      user => {
        console.log('Response: ');
        console.log(user);
      },
      err => {
        console.log(err);
      }
    );
  }
}
