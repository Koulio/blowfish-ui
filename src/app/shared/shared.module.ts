import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertComponent } from '../_directives/index';
import {PeityModule } from '../components/charts/peity';
import {SparklineModule } from '../components/charts/sparkline';

@NgModule({
  imports: [
    CommonModule,
    PeityModule,
    SparklineModule,
    FormsModule
  ],
  declarations: [AlertComponent],
  exports: [
    AlertComponent,
    PeityModule,
    SparklineModule,
    FormsModule
  ],
})
export class SharedModule { }
