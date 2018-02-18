import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TerminalsComponent} from "./terminals.component";
import { ListTerminalsComponent } from './list-terminals.component';
import { CreateTerminalComponent } from './create-terminal.component';
import { EditTerminalComponent } from './edit-terminal.component';

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
       }
	   ]
	}
];

@NgModule({
  imports: [ RouterModule.forChild(terminalsRoutes) ],
  exports: [ RouterModule ]
})
export class TerminalsRoutes{ }
