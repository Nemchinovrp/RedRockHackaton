import { Component, OnInit } from '@angular/core';
import {ResumeService} from '../service/resume.service';
import {VacancyService} from '../service/vacancy.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  private login: string;
  private password: string;
  private name: string;
  private email: string;
  private inn: number;
  private ogrn: number;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
  }

  reg(){
    this.resumeService.sendUser(this.login, this.password, this.name, this.email, this.inn, this.ogrn).subscribe(
      user => {
        console.log('Response registration: ');
        console.log('response - ' + user);
        alert('Пользователь зарегистрован');
      },
      err => {
        console.log(err);
      }
    );
  }
}
