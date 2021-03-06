import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html'
})
export class DomainComponent implements OnInit {

  constructor(private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.router.navigate([ 'list'], { relativeTo: this.route })
  }

}
