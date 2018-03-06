import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TerminalsComponent} from "./terminals.component";
import { ListTerminalsComponent } from './list-terminals.component';
import { CreateTerminalComponent } from './create-terminal.component';
import { EditTerminalComponent } from './edit-terminal.component';
import { AssignTerminalComponent } from './assign-terminal.component';

const terminalsRoutes: Routes = [
	{
	  path: 'terminals',
          component: TerminalsComponent,
          children: [
	    {
	       path: 'create',
	       component: CreateTerminalComponent
	    },
	    {
	       path: 'list',
	       component: ListTerminalsComponent
	     },
       {
         path: 'edit',
         component: EditTerminalComponent
       },
			 {
				 path: 'assign',
				 component: AssignTerminalComponent
			 }
	   ]
	}
];

@NgModule({
  imports: [ RouterModule.forChild(terminalsRoutes) ],
  exports: [ RouterModule ]
})
export class TerminalsRoutes{ }
