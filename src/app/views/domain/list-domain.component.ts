import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { FlotChartDirective } from '../../components/charts/flotChart';

import { DomainService } from '../../_services/index';
import { Domain } from '../../_models/index';

declare var jQuery:any;


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-list-domain',
  templateUrl: './list-domain.component.html'
})
export class ListDomainComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  domains: Domain[] = [];

constructor(private http: HttpClient,private router: Router,
  private domainService: DomainService,
  private route: ActivatedRoute,) {}



  ngOnInit() {
    this.loadAllDomain();
  }

  private loadAllDomain() {
      this.domainService.getAll().subscribe(domains => { this.domains = domains; });
  }

  editDomain(domain: Domain){
    this.domainService.selectedDomain = domain;
    this.router.navigate(['../edit'], { relativeTo: this.route });
  }


  deleteDomain(id: number){
    this.domainService.delete(id)
        .subscribe(
            data => {
                this.domainService.getAll().subscribe(domains => { this.domains = domains; });
            },
            error => {
            });
  }

}
