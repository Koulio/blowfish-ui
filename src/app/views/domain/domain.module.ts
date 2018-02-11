import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { DomainComponent} from "./domain.component";
import { CreateDomainComponent } from './create-domain.component';
import { EditDomainComponent } from './edit-domain.component';
import { DomainService } from '../../_services/index';
import { ListDomainComponent } from './list-domain.component';

import { DomainRoutes }  from './domain.routes';



@NgModule({
  declarations: [DomainComponent, CreateDomainComponent, EditDomainComponent, ListDomainComponent],
  providers:[DomainService],
  imports     : [SharedModule,FormsModule,RouterModule,BrowserModule,DomainRoutes],
  exports     : [DomainComponent,CreateDomainComponent,EditDomainComponent,ListDomainComponent],
})

export class DomainModule {}
