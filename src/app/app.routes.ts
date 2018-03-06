import {Routes} from "@angular/router";

import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {DomainComponent} from "./views/domain/domain.component";
import {CreateDomainComponent} from "./views/domain/create-domain.component";
import {EditDomainComponent} from "./views/domain/edit-domain.component";
import {ListDomainComponent} from "./views/domain/list-domain.component";

import {UsersComponent} from "./views/users/users.component";
import { ListUsersComponent } from './views/users/list-users.component';
import { CreateUsersComponent } from './views/users/create-users.component';
import { EditUsersComponent } from './views/users/edit-users.component';

import {LoginComponent} from "./views/login/login.component";
import {RolesComponent} from "./views/roles/roles.component";
import {CreateRoleComponent} from "./views/roles/create-role.component";
import {ListRoleComponent} from "./views/roles/list-role.component";
import {EditRoleComponent} from "./views/roles/edit-role.component";

import { SetRolePermissionsComponent } from './views/roles/set-role-permissions.component';
import { PermissionsComponent} from "./views/permissions/permissions.component";
import { CreatePermissionsComponent } from './views/permissions/create-permissions.component';
import { ListPermissionsComponent } from './views/permissions/list-permissions.component';
import { EditPermissionsComponent } from './views/permissions/edit-permissions.component';


import { MerchantsComponent } from './views/merchants/merchants.component';
import { ListMerchantsComponent } from './views/merchants/list-merchants.component';
import { CreateMerchantsComponent } from './views/merchants/create-merchants.component';
import { EditMerchantsComponent } from './views/merchants/edit-merchants.component';
import { ViewMerchantComponent } from './views/merchants/view-merchant.component';

import { TerminalsComponent} from "./views/terminals/terminals.component";
import { ListTerminalsComponent } from './views/terminals/list-terminals.component';
import { CreateTerminalComponent } from './views/terminals/create-terminal.component';
import { EditTerminalComponent } from './views/terminals/edit-terminal.component';
import { AssignTerminalComponent } from './views/terminals/assign-terminal.component';

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
       {
         path: 'users',
               component: UsersComponent,
               children: [
           {
              path: 'create',
              component: CreateUsersComponent
           },
           {
              path: 'list',
              component: ListUsersComponent
            },
            {
              path: 'edit',
              component: EditUsersComponent
            }
          ]
       },
      {
        path: 'roles',
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
         },
         {
           path: 'set',
           component: SetRolePermissionsComponent
         }
  	   ]},
       {
         path: 'permissions',
             component: PermissionsComponent,
             children: [
        {
           path: 'create',
           component: CreatePermissionsComponent
        },
        {
           path: 'list',
           component: ListPermissionsComponent
         },
          {
            path: 'edit',
            component: EditPermissionsComponent
          }
       ]},
       {
         path: 'merchants',
                component: MerchantsComponent,
                children: [
           {
              path: 'create',
              component: CreateMerchantsComponent
           },
           {
              path: 'list',
              component: ListMerchantsComponent
            },
             {
               path: 'edit',
               component: EditMerchantsComponent
             },
             {
               path: 'view',
               component: ViewMerchantComponent
             }
          ]
       },
       {
         path: 'terminals',
                component: TerminalsComponent,
                children: [
           {
              path: 'create',
              component: CreateTerminalComponent
           },
           {
              path: 'list',
              component: ListTerminalsComponent
            },
             {
               path: 'edit',
               component: EditTerminalComponent
             },
             {
               path: 'assign',
               component: AssignTerminalComponent
             }
          ]
       }
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: 'login'}
];
