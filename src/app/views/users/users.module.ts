import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {UsersComponent} from "./users.component";

// Chart.js Angular 2 Directive by Valor Software (npm)
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlotModule } from '../../components/charts/flotChart';
import { IboxtoolsModule } from '../../components/common/iboxtools/iboxtools.module';
import { PeityModule } from '../../components/charts/peity';
import { SparklineModule } from '../../components/charts/sparkline';
import { JVectorMapModule } from '../../components/map/jvectorMap';


@NgModule({
  declarations: [UsersComponent],
  imports     : [BrowserModule,ChartsModule, FlotModule,IboxtoolsModule,PeityModule,SparklineModule,JVectorMapModule],
  exports     : [UsersComponent],
})

export class UsersModule {}
