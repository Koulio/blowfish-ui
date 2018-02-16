import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import { SharedModule } from '../../shared/shared.module';

import {UsersComponent} from "./users.component";
import { ListUsersComponent } from './list-users.component';
import { CreateUsersComponent } from './create-users.component';
import { EditUsersComponent } from './edit-users.component';

import { UsersRoutes }  from './users.routes';


@NgModule({
  declarations: [UsersComponent, ListUsersComponent, CreateUsersComponent, EditUsersComponent],
  imports     : [UsersRoutes,BrowserModule,SharedModule],
  exports     : [UsersComponent, ListUsersComponent, CreateUsersComponent, EditUsersComponent],
})

export class UsersModule {}
