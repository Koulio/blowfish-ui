import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { FlotChartDirective } from '../../components/charts/flotChart';

import { MerchantsService } from '../../_services/index';
import { Merchant } from '../../_models/index';

declare var jQuery:any;


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-list-merchants',
  templateUrl: './list-merchants.component.html'
})
export class ListMerchantsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  merchants: Merchant[] = [];

constructor(private http: HttpClient,private router: Router,
  private merchantsService: MerchantsService,
  private route: ActivatedRoute,) {}



  ngOnInit() {
    this.loadMerchants();
  }

  private loadMerchants() {
      this.merchantsService.getAll().subscribe(merchants => { this.merchants = merchants; });
  }

  editMerchant(merchant: Merchant){
    this.merchantsService.selectedMerchant = merchant;
    this.router.navigate(['../edit'], { relativeTo: this.route });
  }

  viewMerchant(merchant: Merchant){
    this.merchantsService.selectedMerchant = merchant;
    this.router.navigate(['../view'], { relativeTo: this.route });
  }

  deleteMerchant(id: number){
    this.merchantsService.delete(id)
        .subscribe(
            data => {
                this.merchantsService.getAll().subscribe(merchants => { this.merchants = merchants; });
            },
            error => {
            });
  }

}
