import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from "./Components/Header/main-header/main-header.component";
import { HomeComponent } from "./Components/Home/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainHeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CoffeePeek';
}
