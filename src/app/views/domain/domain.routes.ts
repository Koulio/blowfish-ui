import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DomainComponent} from "./domain.component";
import { CreateDomainComponent } from './create-domain.component';
import { EditDomainComponent } from './edit-domain.component';
import { ListDomainComponent } from './list-domain.component';

const domainRoutes: Routes = [
	{
	  path: 'domain',
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
	   ]
	}
];

@NgModule({
  imports: [ RouterModule.forChild(domainRoutes) ],
  exports: [ RouterModule ]
})
export class DomainRoutes{ }
