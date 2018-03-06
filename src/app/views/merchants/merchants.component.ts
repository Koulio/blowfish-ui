import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html'
})
export class MerchantsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.router.navigate([ 'list'], { relativeTo: this.route })
  }

}
