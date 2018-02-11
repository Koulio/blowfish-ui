import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertComponent } from '../_directives/index';
import {PeityModule } from '../components/charts/peity';
import {SparklineModule } from '../components/charts/sparkline';

import { FlotModule } from '../components/charts/flotChart';
import { IboxtoolsModule } from '../components/common/iboxtools/iboxtools.module';
import { JVectorMapModule } from '../components/map/jvectorMap';
import { DataTablesModule } from 'angular-datatables';
// Chart.js Angular 2 Directive by Valor Software (npm)
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    PeityModule,
    SparklineModule,
    FormsModule,
    FlotModule,
    IboxtoolsModule,
    JVectorMapModule,
    DataTablesModule,
    ChartsModule
  ],
  declarations: [AlertComponent],
  exports: [
    AlertComponent,
    PeityModule,
    SparklineModule,
    FormsModule,
    FlotModule,
    IboxtoolsModule,
    JVectorMapModule,
    DataTablesModule,
    ChartsModule
  ],
})
export class SharedModule { }
