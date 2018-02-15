import {NgModule} from "@angular/core";
import { CommonModule }   from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { PermissionsComponent} from "./permissions.component";
import { CreatePermissionsComponent } from './create-permissions.component';
import { ListPermissionsComponent } from './list-permissions.component';
import { EditPermissionsComponent } from './edit-permissions.component';

import { PermissionsRoutes }  from './permissions.routes';
import { PermissionsService } from '../../_services/index';



@NgModule({
  declarations: [PermissionsComponent, CreatePermissionsComponent, ListPermissionsComponent, EditPermissionsComponent],
  providers:[PermissionsService],
  imports     : [CommonModule,PermissionsRoutes,SharedModule],
  exports     : [PermissionsComponent, CreatePermissionsComponent, ListPermissionsComponent, EditPermissionsComponent],
})

export class PermissionsModule {}
