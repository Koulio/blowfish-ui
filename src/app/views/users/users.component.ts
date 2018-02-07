import { Component, OnInit, } from '@angular/core';

import { FlotChartDirective } from '../../components/charts/flotChart';

declare var jQuery:any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
