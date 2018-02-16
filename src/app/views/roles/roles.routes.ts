import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RolesComponent} from "./roles.component";
import { CreateRoleComponent } from './create-role.component';
import { ListRoleComponent } from './list-role.component';
import { EditRoleComponent } from './edit-role.component';
import { SetRolePermissionsComponent } from './set-role-permissions.component';

const rolesRoutes: Routes = [
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
	   ]
	}
];

@NgModule({
  imports: [ RouterModule.forChild(rolesRoutes) ],
  exports: [ RouterModule ]
})
export class RolesRoutes{ }
