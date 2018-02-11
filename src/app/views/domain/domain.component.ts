import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Router} from '@angular/router';

import { FlotChartDirective } from '../../components/charts/flotChart';

import { DomainService } from '../../_services/index';
import { Domain } from '../../_models/index';

declare var jQuery:any;

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html'
})
export class DomainComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  domains: Domain[] = [];

constructor(private http: HttpClient,private router: Router,private domainService: DomainService) {}



  ngOnInit() {
    this.loadAllDomain();
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }

  private loadAllDomain() {
      this.domainService.getAll().subscribe(domains => { this.domains = domains; });
  }

  editDomain(domain: Domain){
    this.domainService.selectedDomain = domain;
    this.router.navigate(['/home/editdomain']);
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
