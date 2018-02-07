import {Routes} from "@angular/router";

import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {DomainComponent} from "./views/domain/domain.component";
import {CreateDomainComponent} from "./views/domain/create-domain.component";
import {UsersComponent} from "./views/users/users.component";
import {LoginComponent} from "./views/login/login.component";

import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";

import { AuthGuard } from './_guards/index';

export const ROUTES:Routes = [
  // Main redirect
  {
    path: '', component: DashboardComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },

  {path: 'home', redirectTo: 'home/dashboard'},
  {
    path: 'home', component: BasicLayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'domain', component: DomainComponent},
      {path: 'createdomain', component: CreateDomainComponent},
      {path: 'users', component: UsersComponent}
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: 'login'}
];
