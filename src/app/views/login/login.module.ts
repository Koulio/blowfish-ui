import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { FormsModule } from '@angular/forms';

import {LoginComponent} from "./login.component";

import {PeityModule } from '../../components/charts/peity';
import {SparklineModule } from '../../components/charts/sparkline';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PeityModule,
    SparklineModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    LoginComponent
  ],
})

export class LoginModule {
}
