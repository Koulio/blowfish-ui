import { Component, OnInit } from '@angular/core';

import { AlertService, MerchantsService } from '../../_services/index';

@Component({
  selector: 'app-create-merchants',
  templateUrl: './create-merchants.component.html'
})
export class CreateMerchantsComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private alertService: AlertService, private merchantsService: MerchantsService) { }

  ngOnInit() {
  }


  createMerchant() {
      this.loading = true;
      this.merchantsService.create(this.model)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('Merchant created successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
