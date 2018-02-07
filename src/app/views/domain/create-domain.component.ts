import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-domain',
  templateUrl: './create-domain.component.html'
})
export class CreateDomainComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor() { }

  ngOnInit() {
  }

  createDomain(){}

}
