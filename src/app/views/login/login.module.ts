import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { FormsModule } from '@angular/forms';

import {LoginComponent} from "./login.component";

import {PeityModule } from '../../components/charts/peity';
import {SparklineModule } from '../../components/charts/sparkline';
import { AlertComponent } from '../../_directives/index';

@NgModule({
  declarations: [
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PeityModule,
    SparklineModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ],
})

export class LoginModule {
}
