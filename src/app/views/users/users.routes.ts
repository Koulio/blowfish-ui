import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./users.component";
import { ListUsersComponent } from './list-users.component';
import { CreateUsersComponent } from './create-users.component';
import { EditUsersComponent } from './edit-users.component';

const usersRoutes: Routes = [
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
	}
];

@NgModule({
  imports: [ RouterModule.forChild(usersRoutes) ],
  exports: [ RouterModule ]
})
export class UsersRoutes{ }
