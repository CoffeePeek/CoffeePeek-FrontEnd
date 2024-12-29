import { Component } from '@angular/core';
import { BrandButtonComponent } from "../brand-button/brand-button.component";
import { NavigationButtonComponent } from "../navigation-button/navigation-button.component";
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-main-header',
  imports: [BrandButtonComponent, NavigationButtonComponent, ProfileComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

}
