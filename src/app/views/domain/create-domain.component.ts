import { Component, OnInit } from '@angular/core';

import { AlertService, DomainService } from '../../_services/index';

@Component({
  selector: 'app-create-domain',
  templateUrl: './create-domain.component.html'
})
export class CreateDomainComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private alertService: AlertService, private domainService: DomainService) { }

  ngOnInit() {
  }


  createDomain() {
      this.loading = true;
      this.domainService.create(this.model)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('Domain created successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
