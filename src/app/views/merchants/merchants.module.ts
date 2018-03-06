import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import { SharedModule } from '../../shared/shared.module';

import { MerchantsComponent} from "./merchants.component";
import { ListMerchantsComponent } from './list-merchants.component';
import { CreateMerchantsComponent } from './create-merchants.component';
import { EditMerchantsComponent } from './edit-merchants.component';

import { MerchantsRoutes }  from './merchants.routes';
import { MerchantsService } from '../../_services/index';
import { ViewMerchantComponent } from './view-merchant.component';


@NgModule({
  declarations: [MerchantsComponent, ListMerchantsComponent, CreateMerchantsComponent,
    EditMerchantsComponent, ViewMerchantComponent],
  imports     : [MerchantsRoutes,BrowserModule,SharedModule],
  providers:[MerchantsService],
  exports     : [MerchantsComponent, ListMerchantsComponent, CreateMerchantsComponent,
    EditMerchantsComponent,ViewMerchantComponent],
})

export class MerchantsModule {}
