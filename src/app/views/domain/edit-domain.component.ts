import { Component, OnInit } from '@angular/core';

import { AlertService, DomainService } from '../../_services/index';

@Component({
  selector: 'app-edit-domain',
  templateUrl: './edit-domain.component.html'
})
export class EditDomainComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private alertService: AlertService, private domainService: DomainService) { }

  ngOnInit() {

    if(typeof this.domainService.selectedDomain !== "undefined" && this.domainService.selectedDomain !== null) {
      this.model = this.domainService.selectedDomain;
    }

  }

  editDomain() {
      this.loading = true;
      this.domainService.update(this.model)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('Domain edited successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
