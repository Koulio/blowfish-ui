import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';

import {DomainComponent} from "./domain.component";

// Chart.js Angular 2 Directive by Valor Software (npm)
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlotModule } from '../../components/charts/flotChart';
import { IboxtoolsModule } from '../../components/common/iboxtools/iboxtools.module';
import { PeityModule } from '../../components/charts/peity';
import { SparklineModule } from '../../components/charts/sparkline';
import { JVectorMapModule } from '../../components/map/jvectorMap';
import { DataTablesModule } from 'angular-datatables';
import { CreateDomainComponent } from './create-domain.component';

import {DomainService } from '../../_services/index';


@NgModule({
  declarations: [DomainComponent, CreateDomainComponent],
  providers:[DomainService],
  imports     : [FormsModule,RouterModule,BrowserModule,ChartsModule, FlotModule,IboxtoolsModule,PeityModule,SparklineModule,JVectorMapModule,DataTablesModule],
  exports     : [DomainComponent],
})

export class DomainModule {}
