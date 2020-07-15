import { Component } from '@angular/core';
import * as data from '../assets/colleges.json';
import { Colleges } from './models/colleges.model.js';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-Angular';
  colleges: Colleges = (data as any).colleges;
  constructor(){}
  ngOnInit(){
    console.log(this.colleges);
  }
}
