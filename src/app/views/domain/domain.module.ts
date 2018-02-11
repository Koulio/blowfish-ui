import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import {DomainComponent} from "./domain.component";

// Chart.js Angular 2 Directive by Valor Software (npm)
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlotModule } from '../../components/charts/flotChart';
import { IboxtoolsModule } from '../../components/common/iboxtools/iboxtools.module';
import { JVectorMapModule } from '../../components/map/jvectorMap';
import { DataTablesModule } from 'angular-datatables';
import { CreateDomainComponent } from './create-domain.component';

import {DomainService } from '../../_services/index';
import { EditDomainComponent } from './edit-domain.component';


@NgModule({
  declarations: [DomainComponent, CreateDomainComponent, EditDomainComponent],
  providers:[DomainService],
  imports     : [SharedModule,FormsModule,RouterModule,BrowserModule,ChartsModule, FlotModule,IboxtoolsModule,JVectorMapModule,DataTablesModule],
  exports     : [DomainComponent,CreateDomainComponent,EditDomainComponent],
})

export class DomainModule {}
