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
  persons: Person[];

  domains: Domain[] = [];

constructor(private http: HttpClient,private router: Router,private domainService: DomainService) {}



  ngOnInit() {
    this.loadAllDomain();
    // const that = this;
    //
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10,
    //   serverSide: true,
    //   processing: true,
    //   ajax: (dataTablesParameters: any, callback) => {
    //     that.http
    //       .post<DataTablesResponse>(
    //         'https://angular-datatables-demo-server.herokuapp.com/',
    //         dataTablesParameters, {}
    //       ).subscribe(resp => {
    //         that.persons = resp.data;
    //
    //         callback({
    //           recordsTotal: resp.recordsTotal,
    //           recordsFiltered: resp.recordsFiltered,
    //           data: []
    //         });
    //       });
    //   },
    //   columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' },{ data: 'id'}]
    // };
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }

  private loadAllDomain() {
      this.domainService.getAll().subscribe(domains => { this.domains = domains; });
  }

}
