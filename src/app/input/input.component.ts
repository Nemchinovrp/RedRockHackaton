import { Component, OnInit } from '@angular/core';
import {ResumeService} from '../service/resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public login: string;
  public password: string;
  public name: string;
  public email: string;
  public inn: number;
  public ogrn: number;

  constructor(private resumeService: ResumeService, private router: Router) { }

  ngOnInit() {
  }

  reg(){
    this.resumeService.sendUser(this.login, this.password, this.name, this.email, this.inn, this.ogrn).subscribe(
      user => {
        console.log('Response registration: ');
        console.log('response - ' + user);
        this.router.navigate(['registration']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
