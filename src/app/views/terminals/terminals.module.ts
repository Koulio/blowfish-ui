import {NgModule} from "@angular/core";
import { CommonModule }   from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { TerminalsComponent} from "./terminals.component";
import { ListTerminalsComponent } from './list-terminals.component';
import { CreateTerminalComponent } from './create-terminal.component';
import { EditTerminalComponent } from './edit-terminal.component';
import { AssignTerminalComponent } from './assign-terminal.component';

import { TerminalsRoutes }  from './terminals.routes';
import { TerminalsService } from '../../_services/index';





@NgModule({
  declarations: [TerminalsComponent, ListTerminalsComponent, CreateTerminalComponent, EditTerminalComponent, AssignTerminalComponent],
  providers:[TerminalsService],
  imports     : [CommonModule,TerminalsRoutes,SharedModule],
  exports     : [TerminalsComponent, ListTerminalsComponent, CreateTerminalComponent, EditTerminalComponent, AssignTerminalComponent],
})

export class TerminalsModule {}
