import { Component, OnInit } from '@angular/core';
import { Hero } from './hero-list-basic/hero.service';
import { BLA } from 'projects/angular-animations-library/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  heroes: Hero[] = [];

  ngOnInit() {
    this.heroes.push(new Hero('quirino'));
    this.heroes.push(new Hero('chopper'));
    this.heroes.push(new Hero('cicciabenza'));

  }
}
