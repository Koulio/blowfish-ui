import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, MerchantsService } from '../../_services/index';

import { Merchant } from '../../_models/index';

@Component({
  selector: 'app-view-merchant',
  templateUrl: './view-merchant.component.html'
})
export class ViewMerchantComponent implements OnInit {

  merchant: any = {};
  loading = false;

  constructor(private router: Router, private route: ActivatedRoute, private alertService: AlertService, private merchantsService: MerchantsService) { }

  ngOnInit() {

    if(typeof this.merchantsService.selectedMerchant !== "undefined" && this.merchantsService.selectedMerchant !== null) {
      this.merchant = this.merchantsService.selectedMerchant;
    }

  }

  manageMerchant(merchant: Merchant){
    this.merchantsService.selectedMerchant = merchant;
    this.router.navigate(['../outlets'], { relativeTo: this.route });
  }

}
