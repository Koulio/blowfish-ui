import { Component, OnInit } from '@angular/core';

import { AlertService, MerchantsService } from '../../_services/index';

@Component({
  selector: 'app-edit-merchants',
  templateUrl: './edit-merchants.component.html'
})
export class EditMerchantsComponent implements OnInit {

  merchant: any = {};
  loading = false;

  constructor(private alertService: AlertService, private merchantsService: MerchantsService) { }

  ngOnInit() {

    if(typeof this.merchantsService.selectedMerchant !== "undefined" && this.merchantsService.selectedMerchant !== null) {
      this.merchant = this.merchantsService.selectedMerchant;
    }

  }

  editMerchant() {
      this.loading = true;
      this.merchantsService.update(this.merchant)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('Merchant edited successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
