import {NgModule} from "@angular/core";
import { CommonModule }   from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import {RolesComponent} from "./roles.component";
import { CreateRoleComponent } from './create-role.component';
import { ListRoleComponent } from './list-role.component';
import { EditRoleComponent } from './edit-role.component';

import { RolesRoutes }  from './roles.routes';
import { RoleService } from '../../_services/index';
import { SetRolePermissionsComponent } from './set-role-permissions.component';



@NgModule({
  declarations: [RolesComponent, CreateRoleComponent, ListRoleComponent, EditRoleComponent, SetRolePermissionsComponent],
  providers:[RoleService],
  imports     : [CommonModule,RolesRoutes,SharedModule],
  exports     : [RolesComponent,CreateRoleComponent, ListRoleComponent, EditRoleComponent, SetRolePermissionsComponent],
})

export class RolesModule {}
