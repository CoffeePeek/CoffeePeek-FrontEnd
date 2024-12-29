import { Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login/login.component';
import { AuthGuard } from './Services/Auth/auth.guard';
import { HomeComponent } from './Components/Home/home/home.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
  ];