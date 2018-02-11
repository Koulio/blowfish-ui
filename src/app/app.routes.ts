import {Routes} from "@angular/router";

import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {DomainComponent} from "./views/domain/domain.component";
import {CreateDomainComponent} from "./views/domain/create-domain.component";
import {EditDomainComponent} from "./views/domain/edit-domain.component";
import {ListDomainComponent} from "./views/domain/list-domain.component";
import {UsersComponent} from "./views/users/users.component";
import {LoginComponent} from "./views/login/login.component";
import {RolesComponent} from "./views/roles/roles.component";
import {CreateRoleComponent} from "./views/roles/create-role.component";
import {ListRoleComponent} from "./views/roles/list-role.component";
import {EditRoleComponent} from "./views/roles/edit-role.component";

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
      {path: 'domain',
            component: DomainComponent,
            children: [
        {
           path: 'create',
           component: CreateDomainComponent
        },
        {
           path: 'list',
           component: ListDomainComponent
         },
         {
  		       path: 'edit',
  		       component: EditDomainComponent
  		   }
       ]},
      {path: 'users', component: UsersComponent},
      {path: 'roles',
            component: RolesComponent,
            children: [
  	    {
  	       path: 'create',
  	       component: CreateRoleComponent
  	    },
  	    {
  	       path: 'list',
  	       component: ListRoleComponent
  	     },
         {
           path: 'edit',
           component: EditRoleComponent
         }
  	   ]}
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: 'login'}
];
