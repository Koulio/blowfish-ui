import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PermissionsComponent} from "./permissions.component";
import { CreatePermissionsComponent } from './create-permissions.component';
import { ListPermissionsComponent } from './list-permissions.component';
import { EditPermissionsComponent } from './edit-permissions.component';

const permissionsRoutes: Routes = [
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
	   ]
	}
];

@NgModule({
  imports: [ RouterModule.forChild(permissionsRoutes) ],
  exports: [ RouterModule ]
})
export class PermissionsRoutes{ }
