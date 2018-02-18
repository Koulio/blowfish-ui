import { Component, OnInit } from '@angular/core';

import { AlertService, TerminalsService } from '../../_services/index';

@Component({
  selector: 'app-edit-terminal',
  templateUrl: './edit-terminal.component.html'
})
export class EditTerminalComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private alertService: AlertService, private terminalsService: TerminalsService) { }

  ngOnInit() {

    if(typeof this.terminalsService.selectedTerminal !== "undefined" && this.terminalsService.selectedTerminal !== null) {
      this.model = this.terminalsService.selectedTerminal;
    }

  }

  editTerminal() {
      this.loading = true;
      this.terminalsService.update(this.model)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('Terminal edited successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
