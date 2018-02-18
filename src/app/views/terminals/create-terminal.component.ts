import { Component, OnInit } from '@angular/core';

import { AlertService, TerminalsService } from '../../_services/index';

@Component({
  selector: 'app-create-terminal',
  templateUrl: './create-terminal.component.html'
})
export class CreateTerminalComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private alertService: AlertService, private terminalsService: TerminalsService) { }

  ngOnInit() {
  }


  createTerminal() {
      this.loading = true;
      this.terminalsService.create(this.model)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('Terminal created successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
