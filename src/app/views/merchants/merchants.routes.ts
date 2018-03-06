import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MerchantsComponent} from "./merchants.component";
import { ListMerchantsComponent } from './list-merchants.component';
import { CreateMerchantsComponent } from './create-merchants.component';
import { EditMerchantsComponent } from './edit-merchants.component';
import { ViewMerchantComponent } from './view-merchant.component';


const merchantsRoutes: Routes = [
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
	}
];

@NgModule({
  imports: [ RouterModule.forChild(merchantsRoutes) ],
  exports: [ RouterModule ]
})
export class MerchantsRoutes{ }
