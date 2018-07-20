import { Component } from "@angular/core";
import { Hero } from "./hero-list-basic/hero.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  heroes: Hero[] = [];

  ngOnInit() {
    this.heroes.push(new Hero('quirino'));
    this.heroes.push(new Hero('chopper'));
  }
}
