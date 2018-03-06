import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CompleterService, CompleterData, RemoteData } from "ng2-completer";
import { AlertService, TerminalsService } from '../../_services/index';

@Component({
  selector: 'app-assign-terminal',
  templateUrl: './assign-terminal.component.html'
})
export class AssignTerminalComponent implements OnInit {

  model: any = {};
  loading = false;
  private dataService: RemoteData;

  constructor(private alertService: AlertService, private terminalsService: TerminalsService, private completerService: CompleterService) {
    this.dataService = completerService.remote(null, "name", "name");
this.dataService.urlFormater(term => {
        return environment.apiEndpoint + "/merchants";
    });
   }

  ngOnInit() {

    if(typeof this.terminalsService.selectedTerminal !== "undefined" && this.terminalsService.selectedTerminal !== null) {
      this.model = this.terminalsService.selectedTerminal;
    }

  }

  reAssignTerminal() {
      this.loading = true;
      this.terminalsService.update(this.model)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('Terminal assigned to merchant successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
