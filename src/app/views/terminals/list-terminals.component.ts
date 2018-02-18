import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { TerminalsService } from '../../_services/index';
import { Terminal } from '../../_models/index';

declare var jQuery:any;


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-list-terminals',
  templateUrl: './list-terminals.component.html'
})
export class ListTerminalsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  terminals: Terminal[] = [];

constructor(private http: HttpClient,private router: Router,
  private terminalsService: TerminalsService,
  private route: ActivatedRoute,) {}



  ngOnInit() {
    this.loadAllTerminals();
  }

  private loadAllTerminals() {
      this.terminalsService.getAll().subscribe(terminals => { this.terminals = terminals; });
  }

  editTerminal(terminal: Terminal){
    this.terminalsService.selectedTerminal= terminal;
    this.router.navigate(['../edit'], { relativeTo: this.route });
  }


  deleteTerminal(id: number){
    this.terminalsService.delete(id)
        .subscribe(
            data => {
                this.terminalsService.getAll().subscribe(terminals => { this.terminals = terminals; });
            },
            error => {
            });
  }

}
