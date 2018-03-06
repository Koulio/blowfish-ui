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
import { DualListBoxModule } from 'ng2-dual-list-box';
import { NgxSelectModule } from 'ngx-select-ex';
import { Ng2CompleterModule } from "ng2-completer";

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
    ChartsModule,
    DualListBoxModule,
    NgxSelectModule,
    Ng2CompleterModule
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
    ChartsModule,
    DualListBoxModule,
    NgxSelectModule,
    Ng2CompleterModule
    ],
})
export class SharedModule { }
